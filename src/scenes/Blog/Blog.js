import React from 'react';
import { Layout, Input, Select } from 'antd';
import Footer from '../../components/layout/footer/footer';
import { Link } from 'react-router-dom';
import { notification } from 'antd';
import { withNamespaces } from 'react-i18next';
import { Spin } from 'antd';
import { connect } from 'react-redux';

import TakeStand from '../../components/blog/take-stand/take-stand';
import Article from '../../components/blog/article/article';
import FloatLogo from '../../components/layout/float-logo/float-logo';
import { Helmet } from 'react-helmet';
import i18n from '../../i18n';
import { NewContact } from '../../commons/services/emblueService';
import { article as ArticleActions } from '../../services/Articles/ArticlesActions'
import { client as ClientActions } from '../../services/Client/ClientActions'

const { Search } = Input;
const { Option } = Select;

class Blog extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      searchOpen: false,
      emailNewsletter: '',
      findedArticles: [],
      searchValue: '',
      newsletterWaiting: false,
      posts: [],
      isLoading: true,
      lngSelect: i18n.language
    };

    this.handleChange = this.handleChange.bind(this);
    this.registerEmailNewsletter = this.registerEmailNewsletter.bind(this);
    this.searchArticle = this.searchArticle.bind(this);
  }

  articleLoaded = [];
  recommendedEntries = [];

  componentDidMount() {
    this.props.getPost(i18n.language)
    this.props.getAllClients(i18n.language)
  }

  componentDidUpdate() {
    if (this.state.lngSelect !== i18n.language) {
      this.setState({ lngSelect: i18n.language })
      this.props.getPost(i18n.language)
    }
  }

  searchToggle() {
    this.setState({ searchOpen: !this.state.searchOpen });
  }

  loadArticle() {
    const { match } = this.props
    const { articles } = this.props.article
    const { clients } = this.props.client

    if (articles && match?.params.article) {
      if (match.params.category === 'our-clients' || match.params.category === 'nuestros-clientes') {
        const client = clients.find(client => client.url === match.params.article);
        this.articleLoaded = client;
        this.generateRecommendedEntries('clients');
      } else {
        const art = articles.find(art => art.url === match.params.article);
        this.articleLoaded = art;
        this.generateRecommendedEntries('article');
      }
    }
  }

  searchArticle(value) {
    this.searchToggle();
  }

  clearSearch() {
    this.setState({ findedArticles: [] });
    this.setState({ searchValue: '' });
    this.setState({ searchOpen: false });
  }

  generateRecommendedEntries(type) {
    const { match } = this.props
    const { articles } = this.props.article
    const { clients } = this.props.client

    let recommended = [];
    let array = [];
    let nCategory = (match.params.category === 'under-the-tree') ? 'take-stand' : match.params.category;
    if (type === 'article') {
      array = articles.filter(t => t.breads && t.breads.find(e => e.href.includes(nCategory)));
    } else {
      array = clients;
    }
    const fIndex = array.findIndex(art => art.url === match.params.article);
    let rest = 1;
    let lim = array.length > 3 ? 4 : array.length;
    for (let i = 1; i < lim; i++) {
      if (fIndex + i < array.length) {
        recommended = recommended.concat(array[fIndex + i])
      } else {
        recommended = recommended.concat(array[fIndex - rest])
        rest++;
      }
    }
    this.recommendedEntries = recommended;
  }

  handleChange(event) {
    this.setState({ emailNewsletter: event.target.value });
  }

  _handleChange = (lng) => {
    const { match } = this.props

    i18n.changeLanguage(lng);
    if (match.params.category === 'nuestros-clientes' || match.params.category === 'our-clients')
      this.props.getAllClients(i18n.language)

    if (!match.params.category)
      this.props.getPost(i18n.language)
  };

  searchOnChange(event) {
    const { article: { articles } } = this.props
    const allArticles = articles.slice(0, -1);// articlesEn.concat(articlesEs);
    const searched = allArticles.filter(t => t.title.toLowerCase().includes(event.target.value.toLowerCase()));
    this.setState({ findedArticles: searched });
    this.setState({ searchValue: event.target.value });
    this.setState({ searchValue: event.target.value });
  }

  registerEmailNewsletter(e) {
    e.preventDefault();
    this.setState({ newsletterWaiting: true });
    NewContact(this.state.emailNewsletter).then((response) => this.openNotification(response))
  }

  openNotification = (data) => {
    if (data.AggregatedGroups) {
      if (data.Description === "preexistente") {
        notification.warning({
          message: i18n.t('errors.already-did-it'),
          description: i18n.t('errors.registered-email')
        });
      } else {
        notification.success({
          message: i18n.t('messages.welcome-community'),
          description: i18n.t('messages.newsletter-ok')
        });
        this.setState({ emailNewsletter: '' });
      }
    } else {
      notification.error({
        message: i18n.t('errors.email-send-error'),
        description: i18n.t('errors.try-again')
      });
    }

    this.setState({ newsletterWaiting: false });
  };

  render() {
    const { article: { articles: allArticles }, lastArticle, t, serverProps } = this.props
    const { clients } = this.props.client
    const { searchOpen, emailNewsletter, newsletterWaiting, findedArticles, searchValue } = this.state;
    const { category, article } = this.props.match ? this.props.match.params : {};
    
    this.loadArticle();

    let articleSEO
    if (serverProps)
      articleSEO = serverProps.articles;

    return (
      <Layout className="blog-component">
        <Helmet>
          <title>{articleSEO ? articleSEO.title : t('blog.titulo_seo')}</title>
          <meta property="description" content={articleSEO ? articleSEO.description : t('blog.descripcion_opengraph')} />
          <meta property="og:description" content={articleSEO ? articleSEO.description : t('blog.descripcion_opengraph')} />
          <meta property="og:title" content={articleSEO ? articleSEO.title : t('blog.titulo_protocolo_opengraph')} />
          <meta property="og:image" content={articleSEO ? articleSEO.cover : t('blog.imagen_open_graph.url')} />
          <meta name="keywords" content={t('blog.keywords')} />
          <meta property="og:url" content={"https://www.lukerchocolate.com" + this.props.match.url} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Luker Chocolate." />
          <meta name="twitter:image:alt" content={articleSEO ? articleSEO.title : t('blog.descripcion_opengraph')} />
          <meta property="fb:app_id" content="your_app_id" />
          <meta property="twitter:image" content={articleSEO ? articleSEO.cover : t('blog.imagen_open_graph.url')} />
          <meta name="twitter:site" content="@Luker_Chocolate" />
        </Helmet>

        {(allArticles?.length > 0 && clients?.length > 0) ?
          <>
            <div className={`blog-component-header blog-component-header--${(article) ? article : category}`} style={{ backgroundImage: (!this.articleLoaded.banner) ? (article) ? `linear-gradient(to bottom, rgba(3, 3, 3, 0.4) 100%, transparent), url(${require(`../../assets/img/blog/${this.articleLoaded.cover}`)})` : '' : `linear-gradient(to bottom, rgba(3, 3, 3, 0.4) 100%, transparent), url(${require(`../../assets/img/${this.articleLoaded.banner}`)})` }}>
              <div className="btn-dist">
                <Link to="/" className="logo"> <img src="/static/media/Lukerlogo.af6f7609.svg" alt="Logo Luker" /></Link>
                {this.articleLoaded.banner ?
                  <Link to={t('routes.our-clients')}>{t('buttons.back')}</Link> :
                  <Link to='/blog'>BLOG</Link>
                }
              </div>
              <FloatLogo btns={[{ url: this.articleLoaded.banner ? t('routes.our-clients') : '/blog', btnText: (this.articleLoaded.banner) ? t('buttons.back').toUpperCase() : 'BLOG' }]} />
              <div style={{ marginTop: (article) ? '5em' : '3em' }}>
                <div className="blog-component-header--search">
                  {category !== t('routes.our-clients').replace("/", "") &&
                    <Search
                      value={searchValue}
                      onChange={(e) => this.searchOnChange(e)}
                      placeholder={t('form.input-search')}
                      onSearch={(value) => this.searchArticle(value)}
                      className={searchOpen && 'blog-component-header--search-open'}
                      style={{ width: 400 }}
                    />}
                  <Select defaultValue={i18n.language} onChange={this._handleChange}  >
                    <Option value="es">ES</Option>
                    <Option value="en">EN</Option>
                  </Select>
                </div>
                <h1 style={{ fontSize: (article) ? '4em' : '5em' }}>{(article) ? this.articleLoaded.title : (category) ? (category === 'innovacion') ? 'innovación' : (category === 'tomando-posicion') ? 'tomando posición' : (category === 'sueno-del-chocolate') ? 'sueño del chocolate' : (category === 'lo-que-no-sabias') ? 'lo que no sabías' : (category === 'take-stand') ? 'Take a stand' : category.replace("/", "").replace(/-/g, " ") : 'Under The Tree'}
                  {this.articleLoaded.flag && <img className="blog-component-header-flag" src={require('../../assets/img/' + this.articleLoaded.flag + "-flag.png")} alt={this.articleLoaded.flag.substr(0, 2)} />} </h1>
              </div>
            </div >
            <div className="blog-component-content">
              {(category !== t('routes.our-clients').replace("/", "")) && <div className={`blog-tabs blog-tabs-${category && 'selected'}`} >
                <Link to={'/blog' + t('routes.take-stand')} className={category === t('routes.take-stand').replace("/", "") ? 'tab-blog-selected' : undefined}>{t('blog.take-stand')}</Link>
                <Link to={'/blog' + t('routes.innovation')} className={category === t('routes.innovation').replace("/", "") ? 'tab-blog-selected' : undefined}>{t('blog.innovation')}</Link>
                <Link to={'/blog' + t('routes.create-shared-value')} className={category === t('routes.create-shared-value').replace("/", "") ? 'tab-blog-selected' : undefined}>{t('blog.create-shared-value')}</Link>
                <Link to={'/blog' + t('routes.chocolate-dream')} className={category === t('routes.chocolate-dream').replace("/", "") ? 'tab-blog-selected' : undefined}>{t('blog.chocolate-dream-journey')}</Link>
                <Link to={'/blog' + t('routes.what-you-didnt-know')} className={category === t('routes.what-you-didnt-know').replace("/", "") ? 'tab-blog-selected' : undefined}>{t('blog.what-did-know')}</Link>
              </div>}
              {(findedArticles.length > 0 && searchValue.length > 0) ?
                <div className="blog-layout-articles-searched-results">
                  <h3>{t('blog.finded') + " " + findedArticles.length + " " + t('blog.articles-for') + ' "' + searchValue + '"'} </h3>
                  <div className="blog-layout-articles">
                    {Object.keys(findedArticles).map(i =>
                      <div className="blog-layout-articles--item" key={i}>
                        <Link onClick={() => this.clearSearch()} to={findedArticles[i].breads[1].href + '/' + findedArticles[i].url} className="blog-layout-latest--article">
                          <img src={require('../../assets/img/blog/' + findedArticles[i].cover)} />
                          <p>{findedArticles[i].date}</p>
                          <h2>{findedArticles[i].title}</h2>
                        </Link>
                      </div>
                    )}
                  </div>
                  <br />
                </div>
                :
                (category) ?
                  (article) ?
                    <Article data={this.articleLoaded} recommended={this.recommendedEntries} />
                    :
                    <TakeStand articles={allArticles.filter(t => t.breads && t.breads.find(e => e.href.includes(category)))} category={category} />
                  :
                  <div className="blog-layout">
                    <div className="blog-layout-latest">
                      <h1>{t('blog.latest-entries')}</h1>
                      {lastArticle?.breads &&
                        <Link to={lastArticle.breads[1].href + '/' + lastArticle.url} className="blog-layout-latest--article">
                          <img src={require('../../assets/img/blog/' + lastArticle.cover)} alt={lastArticle.title} />
                          <p>{lastArticle.date}</p>
                          <h2>{lastArticle.title}</h2>
                        </Link>
                      }
                    </div>
                    <div className="blog-layout-articles">
                      {allArticles?.length > 0 && allArticles.map((data, i) => {
                        return data.breads && (i >= 3 && i <= 6) &&
                          <div className="blog-layout-articles--item" key={i}>
                            <Link to={allArticles[i].breads[1].href + '/' + allArticles[i].url} className="blog-layout-latest--article">
                              <img src={require('../../assets/img/blog/' + allArticles[i].cover)} />
                              <p>{allArticles[i].date}</p>
                              <h2>{allArticles[i].title}</h2>
                            </Link>
                          </div>
                      })}
                    </div>
                    <div className="blog-layout-featured">
                      <h1>{t('blog.featured')}</h1>
                      <div className="blog-layout-featured-item">
                        {allArticles && allArticles.length > 0 && allArticles.map((data, i) => {
                          return data.breads && i <= 4 &&
                            <div className="blog-layout-articles--item" key={i}>
                              <Link to={data.breads[1].href + '/' + data.url} className="blog-layout-latest--article">
                                <p>{data.date}</p>
                                <h2>{data.title} </h2>
                              </Link>
                            </div>
                        }
                        )}
                      </div>
                    </div>
                    <div className="blog-layout-newsletter">
                      <h2>{t('blog.newsletter')}</h2>
                      <p>{t('blog.newsletter-text')}</p>
                      <form onSubmit={this.registerEmailNewsletter}>
                        <input type="email" name="email" placeholder={t('form.give-us-email')} value={emailNewsletter} onChange={this.handleChange} />
                        <input type="submit" value={t('buttons.send')} disabled={newsletterWaiting} />
                      </form>
                    </div>
                  </div>
              }
            </div>
            <Footer />
          </> : <Spin size="large" />
        }
      </Layout >
    );
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.article,
    client: state.client
  }
}

const mapDispatchToProps = {
  getPost: ArticleActions.getPost,
  getAllClients: ClientActions.getAll
};

Blog = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default withNamespaces()(Blog);