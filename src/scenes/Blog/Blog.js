import React from 'react';
import { Layout, Input, Select } from 'antd';
import Footer from '../../components/layout/footer/footer';
import { Link } from 'react-router-dom';
import { notification } from 'antd';
import { withNamespaces } from 'react-i18next';
import { Spin } from 'antd';
import { connect } from 'react-redux';

import { termsConditions } from "../../commons/data/data-en";
import { privacyPolicy } from "../../commons/data/data-en";
import { termsConditions as termsConditionsEs } from "../../commons/data/data-es";
import { privacyPolicy as privacyPolicyEs } from "../../commons/data/data-es";

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

const categoriesLanguagesBeetwen = {
  languages: {
    es: ['un-viaje-al-sueno-de-chocolate', 'innovacion', 'creando-valor-compartido', 'lo-que-no-sabias', 'tomando-posicion'],
    en: ['the-chocolate-dream-journey', 'innovation', 'creating-shared-value', 'what-you-didnt-know', 'take-stand']
  },

  'the-chocolate-dream-journey': 'un-viaje-al-sueno-de-chocolate',
  'un-viaje-al-sueno-de-chocolate': 'the-chocolate-dream-journey',

  'innovation': 'innovacion',
  'innovacion': 'innovation',

  'creating-shared-value': 'creando-valor-compartido',
  'creando-valor-compartido': 'creating-shared-value',

  'what-you-didnt-know': 'lo-que-no-sabias',
  'lo-que-no-sabias': 'what-you-didnt-know',

  'take-stand': 'tomando-posicion',
  'tomando-posicion': 'take-stand'
}

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
    const articleEsBeetwen = categoriesLanguagesBeetwen.languages.es.includes(this.props.match.params.category)

    //No se valida en ingles, ya que por default es en
    if (articleEsBeetwen) {
      i18n.changeLanguage('es');
      this.setState({ lngSelect: 'es' })
      this.props.getPost('es')
    } else {
      this.props.getPost(i18n.language)
    }

    this.props.getCategories(i18n.language)
    this.props.getAllClients(i18n.language)
  }

  componentDidUpdate() {
    if (this.state.lngSelect !== i18n.language) {
      this.setState({ lngSelect: i18n.language })
      this.props.getPost(i18n.language)
      this.props.getCategories(i18n.language)
    }
  }

  searchToggle() {
    this.setState({ searchOpen: !this.state.searchOpen });
  }

  loadArticle() {
    const { match } = this.props
    const { articles, articlesFixeds } = this.props.article
    const { clients } = this.props.client

    if (articles && match?.params.article) {
      let article, client;

      if (clients && (match.params.category === 'our-clients' || match.params.category === 'nuestros-clientes'))
        client = clients.find(client => client.url === match.params.article);
      else {

        article = articles.find(art => art.url === match.params.article);

        if (articlesFixeds && !article)
          article = articlesFixeds.find(art => art.url === match.params.article);
      }

      if (!article && !client) {
        this.props.history.push('/blog')
        return
      }

      this.articleLoaded = client || article;

      this.generateRecommendedEntries(article ? 'article' : 'clients');
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
    this.recommendedEntries = this.recommendedEntries.filter(item => item.url !== 'york-cocoa-house')
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

    if (!match.params.article) {
      const beetwen = categoriesLanguagesBeetwen[match.params.category]
      if (beetwen)
        this.props.history.push(`/blog/${beetwen}`)
      else
        this.props.history.push('/blog')
    }
  };

  searchOnChange(event) {
    const { article: { articles } } = this.props
    const allArticles = articles.slice(0, -1);// articlesEn.concat(articlesEs);
    const searched = allArticles.filter(t => t.title.toLowerCase().includes(event.target.value.toLowerCase()));
    this.setState({ findedArticles: searched });
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
  }

  renderBanner = () => {
    const { t } = this.props
    const { articlesFixeds, lastArticle } = this.props.article
    const articleBanner = articlesFixeds ? articlesFixeds[0] : lastArticle

    return <div className="blog-layout-latest">
      <h1>{articleBanner.title}</h1>
      {articleBanner.breads &&
        <Link to={articleBanner.breads[1].href + '/' + articleBanner.url} className="blog-layout-latest--article">
          {!articleBanner.cover.includes('http') && <img src={require('../../assets/img/blog/' + articleBanner.cover)} alt={articleBanner.title} />}
          {articleBanner.cover.includes('http') && <img src={articleBanner.cover} alt={articleBanner.title} />}
          <p>{articleBanner.date}</p>
          <h2>{t('blog.latest-entries')}</h2>
        </Link>
      }
    </div>
  }

  render() {
    const { t, serverProps } = this.props
    const { articles: allArticles, categories } = this.props.article
    const { clients } = this.props.client
    const { searchOpen, emailNewsletter, newsletterWaiting, findedArticles, searchValue } = this.state;
    const { category, article } = this.props.match ? this.props.match.params : {};
    const clientArticle = article && clients && clients.find(client => client.url === article)
    let categorieSelected;

    if (categories)
      categorieSelected = categories.find(item => item.slug === category)

    this.loadArticle();

    let articleSEO
    if (serverProps)
      articleSEO = serverProps.articles;
    console.log(articleSEO);
    console.log("articleLoaded", this.articleLoaded);
    
    
    const imageOG = articleSEO?.imagen_open_graph?.url || this.articleLoaded?.imagen_open_graph || articleSEO?.cover || t('blog.imagen_open_graph.url')
    
    return (
      <Layout className="blog-component">
        <Helmet>
          <title>{articleSEO ? articleSEO.title : t('blog.titulo_seo')}</title>
          <meta name="keywords" content={t('blog.keywords')} />
          <meta property="description" content={articleSEO?.meta_descripcion || t('blog.descripcion_opengraph')} />
          <meta property="og:type" content="website"/>
          <meta property="og:description" content={articleSEO?.meta_descripcion || t('blog.descripcion_opengraph')} />
          <meta property="og:image" content={imageOG} />
          <meta property="og:title" content={articleSEO?.title || t('blog.titulo_protocolo_opengraph')} />
          <meta property="og:site_name" content="Luker Chocolate." />
          <meta property="og:url" content={"https://www.lukerchocolate.com" + this.props.match.url} />
          <meta property="fb:app_id" content="your_app_id" />
          <meta property="twitter:image" content={imageOG} />
          <meta name="twitter:title" content={articleSEO?.title || t('blog.titulo_protocolo_opengraph')} />
          <meta name="twitter:description" content={articleSEO?.meta_descripcion || t('blog.descripcion_opengraph')} />
          <meta name="twitter:image:alt" content={articleSEO?.title || t('blog.descripcion_opengraph')} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@Luker_Chocolate" />
        </Helmet>

        {allArticles?.length > 0 && clients?.length > 0 && this.articleLoaded ?
          <>
            <div
              className={`blog-component-header blog-component-header--${article ? article : category}`}
              style={{
                backgroundImage:
                  !this.articleLoaded || this.articleLoaded === [] || !article ? '' :
                    !this.articleLoaded.banner ?
                      !this.articleLoaded.cover?.includes('http') ?
                        `linear-gradient(to bottom, rgba(3, 3, 3, 0.4) 100%, transparent), url(${require(`../../assets/img/blog/${this.articleLoaded.cover}`)})` :
                        `linear-gradient(to bottom, rgba(3, 3, 3, 0.4) 100%, transparent), url(${this.articleLoaded.cover})` :
                      `linear-gradient(to bottom, rgba(3, 3, 3, 0.4) 100%, transparent), url(${require(`../../assets/img/${this.articleLoaded.banner}`)})`
              }}>

              <div className="btn-dist">
                <Link to="/" className="logo"> <img src="/static/media/Lukerlogo.af6f7609.svg" alt="Logo Luker" /></Link>
                {this.articleLoaded?.banner ?
                  <Link to={t('routes.our-clients')}>{t('buttons.back-to-our-clients')}</Link> :
                  <Link to='/blog'>BLOG</Link>
                }
              </div>
              <FloatLogo btns={[{ url: this.articleLoaded?.banner ? t('routes.our-clients') : '/blog', btnText: (this.articleLoaded.banner) ? t('buttons.back-to-our-clients').toUpperCase() : 'BLOG' }]} />
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
                <h1 style={{ fontSize: (article) ? '3.7em' : '5em' }}>
                  {article && this.articleLoaded.title}
                  {!article && categorieSelected && categorieSelected.name}
                  {!article && !categorieSelected && 'UNDER THE TREE'}
                  {this.articleLoaded.flag && (category === 'our-clients' || category === 'nuestros-clientes')  &&
                    <img className="blog-component-header-flag" src={require('../../assets/img/' + this.articleLoaded.flag + "-flag.png")} alt={this.articleLoaded.flag.substr(0, 2)} />
                  }
                </h1>
              </div>
              {(category === 'our-clients' || category === 'nuestros-clientes') && clientArticle &&
                <div className="container-button-visit">
                  <a className="button-visit" target="_blank" href={clientArticle.visitUrl}>{t('buttons.visit-their-website')}</a>
                </div>
              }
            </div>

            <div className="blog-component-content">
              {(category !== t('routes.our-clients').replace("/", "")) &&
                <div className={`blog-tabs blog-tabs-${category && 'selected'}`}>
                  {categories.map(categorie =>
                    <Link
                      key={categorie.slug}
                      to={`/blog/${categorie.slug}`}
                      className={category == categorie.slug ? 'tab-blog-selected' : undefined}
                      style={{ 'display': 'flex', 'alignItems': 'center' }}
                    >
                      {categorie.name.toUpperCase()}
                    </Link>
                  )}
                </div>
              }
              {(findedArticles.length > 0 && searchValue.length > 0) ?
                <div className="blog-layout-articles-searched-results">
                  <h3>{t('blog.finded') + " " + findedArticles.length + " " + t('blog.articles-for') + ' "' + searchValue + '"'} </h3>
                  <div className="blog-layout-articles">
                    {Object.keys(findedArticles).map(i =>
                      <div className="blog-layout-articles--item" key={i}>
                        <Link onClick={() => this.clearSearch()} to={findedArticles[i].breads[1].href + '/' + findedArticles[i].url} className="blog-layout-latest--article">
                          {!findedArticles[i].cover.includes('http') && <img src={require('../../assets/img/blog/' + findedArticles[i].cover)} />}
                          {findedArticles[i].cover.includes('http') && <img src={findedArticles[i].cover} />}
                          <p>{findedArticles[i].date}</p>
                          <h2>{findedArticles[i].title}</h2>
                        </Link>
                      </div>
                    )}
                  </div>
                  <br />
                </div>
                :
                category ?
                  this.articleLoaded && this.articleLoaded !== [] && article ?
                    <Article data={this.articleLoaded} recommended={this.recommendedEntries} />
                    :
                    <TakeStand articles={allArticles.filter(t => t.breads && t.breads.find(e => e.href.includes(category)))} category={category} />
                  :
                  <div className="blog-layout">
                    {this.renderBanner()}
                    <div className="blog-layout-articles">
                      {allArticles?.length > 0 && allArticles.map((data, i) => {
                        return data.breads && i < 4 &&
                          <div className="blog-layout-articles--item" key={i}>
                            <Link to={allArticles[i].breads[1].href + '/' + allArticles[i].url} className="blog-layout-latest--article">
                              {!allArticles[i].cover.includes('http') && <img src={require('../../assets/img/blog/' + allArticles[i].cover)} />}
                              {allArticles[i].cover.includes('http') && <img src={allArticles[i].cover} />}
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

                        <div className="terms-and-conditions">
                          <input type="checkbox" required/>
                          <div>{i18n.t('messages.click_accept')}&nbsp;
                          <a href={i18n.language === 'en' ? termsConditions : termsConditionsEs} target="_blank">{t('messages.terms_and_conditions')}</a>&nbsp;
                          {i18n.t('messages.and')}&nbsp;
                          <a href={i18n.language === 'en' ? privacyPolicy : privacyPolicyEs} target="_blank">{t('messages.privacy_policy')}</a>
                          </div>
                        </div>
                        
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
  getCategories: ArticleActions.getCategories,
  getAllClients: ClientActions.getAll,
};

Blog = connect(mapStateToProps, mapDispatchToProps)(Blog);

export default withNamespaces()(Blog);