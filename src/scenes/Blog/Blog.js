import React from 'react';
import { Layout, Input, Select } from 'antd';
import Footer from '../../components/layout/footer/footer';
import { Link } from 'react-router-dom';
import { notification } from 'antd';
import item1 from '../../assets/img/doisy-milk.jpg'
import item2 from '../../assets/img/blog-item1.jpg'
import item3 from '../../assets/img/blog-item2.jpg'
import item4 from '../../assets/img/blog-item3.jpg'
import item5 from '../../assets/img/blog-item4.jpg'
import { withNamespaces } from 'react-i18next';
import { Spin } from 'antd';

import logo from '../../assets/img/Lukerlogo.svg'
import TakeStand from '../../components/blog/take-stand/take-stand';
import Article from '../../components/blog/article/article';
import FloatLogo from '../../components/layout/float-logo/float-logo';
import { Helmet } from 'react-helmet';
import i18n from '../../i18n';
import MetaTags from 'react-meta-tags';
import { NewContact } from '../../commons/services/emblueService';
import SelectLanguage from '../../commons/select-lng/select-lng';
import { clients as clientsEn, articles as articlesEn } from '../../commons/data/data-en';
import { clients as clientsEs, articles as articlesEs } from '../../commons/data/data-es';

import { getClients, getPosts, getPostsEs, getClientsEs } from "../../commons/services/api";

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
      latestArticle: [],
      concatArticles: [],
      allArticles: [],
      clients: [],
      isLoading: true
    };
    this.handleChange = this.handleChange.bind(this);
    this.registerEmailNewsletter = this.registerEmailNewsletter.bind(this);
    this.searchArticle = this.searchArticle.bind(this);
    this.getArticles = this.getArticles.bind(this);
    this.getCustomers = this.getCustomers.bind(this);
  }

  //clients = i18n.language === 'en' ? clientsEn : clientsEs;
  //articles = i18n.language === 'en' ? articlesEn : articlesEs;
  articleLoaded = [];
  recommendedEntries = [];

  async getCustomers() {
    //this.setState({ isLoading: true });
    let breads = [{ href: '/', name: '' }]
    let cust = {};
    let customers = [{}];
    if (i18n.language === 'en') {
      getClients().then(data =>
        data.map((e, i) => {
          cust['url'] = e.acf.url;
          cust['cover'] = e.acf.cover || 'banner-cocoa-forest.jpg';
          cust['title'] = e.acf.title;
          cust['banner'] = e.acf.banner;
          cust['flag'] = e.acf.flag;
          cust['content'] = e.acf.content;
          breads[0]['href'] = e.acf.href;
          breads[0]['name'] = e.acf.categoryname || "Nuestros clientes";
          cust['breads'] = breads;
          customers.push(cust);
          cust = {};
          breads = [{}, {}];
        }))
        .then(data =>
          this.setState({ clients: customers })
        )
    } else {
      getClientsEs().then(data =>
        data.map((e, i) => {
          cust['url'] = e.acf.url;
          cust['cover'] = e.acf.cover || 'banner-cocoa-forest.jpg';
          cust['title'] = e.acf.title;
          cust['banner'] = e.acf.banner;
          cust['flag'] = e.acf.flag;
          cust['content'] = e.acf.content;
          breads[0]['href'] = e.acf.href;
          breads[0]['name'] = e.acf.categoryname || "Nuestros clientes";
          cust['breads'] = breads;
          customers.push(cust);
          cust = {};
          breads = [{}, {}];
        }))
        .then(data =>
          this.setState({ clients: customers })
        )
    }
    //console.log(getPages().then(data => console.log(data)));  
  }

  async getArticles() {
    //this.setState({ isLoading: true });
    this.setState({ concatArticles: [] })
    let breads = [{ href: '/blog', name: 'Blog' }, { href: '/blog/take-stand', name: 'Take a stand' }]
    let autor = { name: '', avatar: '', details: '', linkedin: '' }
    //let art = examArt;
    let art = {};
    let arts = [{}];
    if (i18n.language === 'en') {
      getPosts().then(data =>
        data.map((e, i) => {
          art['url'] = e.slug;
          art['fullUrl'] = e.acf.url;
          art['cover'] = e.acf.cover || 'banner-cocoa-forest.jpg';
          art['title'] = e.title.rendered;
          art['description'] = e.content.rendered.substr(0, 100);
          art['date'] = e.acf.date;
          art['content'] = e.content.rendered;
          autor['name'] = e.acf.authorname;
          autor['avatar'] = e.acf.avatar;
          autor['details'] = e.acf.details;
          autor['linkedin'] = e.acf.linkeind;
          breads[0]['href'] = "/blog/";
          breads[0]['name'] = "Blog";
          breads[1]['href'] = "/blog/" + e.acf.categoria.slug;
          breads[1]['name'] = e.acf.categoria.name;
          art['autor'] = autor;
          art['breads'] = breads;
          arts.push(art);
          art = {};
          breads = [{}, {}];
          autor = {};
        })).then(data =>
          this.setState({ allArticles: arts, latestArticle: arts[1], concatArticles: this.state.concatArticles.concat(this.state.allArticles) })
        )
    } else {
      getPostsEs().then(data =>
        data.map((e, i) => {
          art['url'] = e.slug;
          art['fullUrl'] = e.acf.url;
          art['cover'] = e.acf.cover || 'banner-cocoa-forest.jpg';
          art['title'] = e.title.rendered;
          art['description'] = e.content.rendered.substr(0, 100);
          art['date'] = e.acf.date;
          art['content'] = e.content.rendered;
          autor['name'] = e.acf.authorname;
          autor['avatar'] = e.acf.avatar;
          autor['details'] = e.acf.details;
          autor['linkedin'] = e.acf.linkeind;
          breads[0]['href'] = "/blog/";
          breads[0]['name'] = "Blog";
          breads[1]['href'] = "/blog/" + e.acf.categoria.slug;
          breads[1]['name'] = e.acf.categoria.name;
          art['autor'] = autor;
          art['breads'] = breads;
          arts.push(art);
          art = {};
          breads = [{}, {}];
          autor = {};
        })).then(data =>
          this.setState({ allArticles: arts, latestArticle: arts[1], concatArticles: this.state.concatArticles.concat(this.state.allArticles) })
        )
    }
    //console.log(getPages().then(data => console.log(data)));  
  }

  searchToggle() {
    this.setState({ searchOpen: !this.state.searchOpen });
  }

  loadArticle() {
    if (this.props.match && this.props.match.params.article) {
      if (this.props.match.params.category === 'our-clients' || this.props.match.params.category === 'nuestros-clientes') {
        const client = this.state.clients.find(client => client.url === this.props.match.params.article);
        this.articleLoaded = client;
        this.generateRecommendedEntries('clients');
      } else {
        const art = this.state.allArticles.find(art => art.url === this.props.match.params.article);
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
    let recommended = [];
    let array = [];
    let nCategory = (this.props.match.params.category === 'under-the-tree') ? 'take-stand' : this.props.match.params.category;
    if (type === 'article') {
      array = this.state.allArticles.filter(t => t.breads && t.breads.find(e => e.href.includes(nCategory)));
      //array = this.state.allArticles;
    } else {
      array = this.state.clients;
    }
    const fIndex = array.findIndex(art => art.url === this.props.match.params.article);
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
    i18n.changeLanguage(lng);
    if (!this.props.match.params.category)
      this.getArticles();
  };

  searchOnChange(event) {
    const allArticles = this.state.allArticles.slice(1);// articlesEn.concat(articlesEs);
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
          description:
            i18n.t('errors.registered-email')
        });
      } else {
        notification.success({
          message: i18n.t('messages.welcome-community'),
          description:
            i18n.t('messages.newsletter-ok')
        });
        this.setState({ emailNewsletter: '' });
      }
    } else {
      notification.error({
        message: i18n.t('errors.email-send-error'),
        description:
          i18n.t('errors.try_again')
      });
    }
    this.setState({ newsletterWaiting: false });
  };

  componentDidMount() {
    this.getArticles();
    this.getCustomers();
  }

  render() {
    const { searchOpen, emailNewsletter, newsletterWaiting, findedArticles, searchValue, posts, latestArticle, allArticles, clients } = this.state;
    const { Search } = Input;
    const { Option } = Select;
    const { category, article } = this.props.match ? this.props.match.params : {};
    const { t, serverProps } = this.props;

    this.loadArticle();

    let articles
    if (serverProps)
      articles = serverProps.articles;

    return (
      <Layout className="blog-component">
        <Helmet>
          <title>{articles ? articles.title : t('blog.titulo_seo')}</title>
          <meta property="og:title" content={articles ? articles.title : t('blog.titulo_protocolo_opengraph')} />
          <meta property="og:image" content={articles ? articles.cover : t('blog.imagen_open_graph.url')} />
          <meta name="keywords" content={t('blog.keywords')} />
          <meta property="og:url" content={this.props.match.url} />
          <meta property="og:description" content={articles ? articles.description : t('blog.descripcion_opengraph')} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Luker Chocolate." />
          <meta name="twitter:image:alt" content={articles ? articles.title : t('blog.descripcion_opengraph')} />
          <meta property="fb:app_id" content="your_app_id" />
          <meta name="twitter:site" content="@Luker_Chocolate" />
        </Helmet>
        {allArticles.length > 0 ?
          <>
            <div className={`blog-component-header blog-component-header--${(article) ? article : category}`} style={{ backgroundImage: (!this.articleLoaded.banner) ? (article) ? `linear-gradient(to bottom, rgba(3, 3, 3, 0.4) 100%, transparent), url(${require(`../../assets/img/blog/${this.articleLoaded.cover}`)})` : '' : `linear-gradient(to bottom, rgba(3, 3, 3, 0.4) 100%, transparent), url(${require(`../../assets/img/${this.articleLoaded.banner}`)})` }}>
              <div className="btn-dist">
                <Link to="/" className="logo"> <img src={logo} alt="Logo Luker" /></Link>
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
                      onChange={(event) => this.searchOnChange(event)}
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
                <h1 style={{ fontSize: (article) ? '4em' : '5em' }}>{(article) ? this.articleLoaded.title : (category) ? (category === 'innovacion') ? 'innovación' : (category === 'tomando-posicion') ? 'tomando posición' : (category === 'sueno-del-chocolate') ? 'sueño del chocolate' : (category === 'lo-que-no-sabias') ? 'lo que no sabías' : category.replace("/", "").replace(/-/g, " ") : 'Under The Tree'}
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
                </div> :
                (category) ?
                  (article) ? <Article data={this.articleLoaded} recommended={this.recommendedEntries} /> : <TakeStand articles={allArticles.filter(t => t.breads && t.breads.find(e => e.href.includes(category)))} category={category} />
                  :
                  <div className="blog-layout">
                    <div className="blog-layout-latest">
                      <h1>{t('blog.latest-entries')}</h1>
                      {latestArticle.breads && <Link to={latestArticle.breads[1].href + '/' + latestArticle.url} className="blog-layout-latest--article">
                        <img src={require('../../assets/img/blog/' + latestArticle.cover)} alt={latestArticle.title} />
                        <p>{latestArticle.date}</p>
                        <h2>{latestArticle.title}</h2>
                      </Link>}
                    </div>
                    <div className="blog-layout-articles">
                      {allArticles && allArticles.length > 0 && allArticles.map((data, i) => {
                        return data.breads &&
                          i <= 4 && <div className="blog-layout-articles--item" key={i}>
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
                          return data.breads &&
                            i <= 4 && <div className="blog-layout-articles--item" key={i}>
                              <Link to={allArticles[i].breads[1].href + '/' + allArticles[i].url} className="blog-layout-latest--article">
                                <p>{allArticles[i].date}</p>
                                <h2>{allArticles[i].title} </h2>
                              </Link>
                            </div>
                        }
                        )}
                        {/*Object.keys(allArticles).map(i =>
                          i <= 4 && <div className="blog-layout-articles--item" key={i}>
                            <Link to={allArticles[i].breads[1].href + '/' + allArticles[i].url} className="blog-layout-latest--article">
                              <p>{allArticles[i].date}</p>
                              <h2>{allArticles[i].title} </h2>
                            </Link>
                          </div>
                        )*/}
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
export default withNamespaces()(Blog);