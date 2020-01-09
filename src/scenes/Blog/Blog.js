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

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false,
      emailNewsletter: '',
      findedArticles: [],
      searchValue: '',
      newsletterWaiting: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.registerEmailNewsletter = this.registerEmailNewsletter.bind(this);
    this.searchArticle = this.searchArticle.bind(this);
  }
  clients = i18n.language === 'en' ? clientsEn : clientsEs;
  articles = i18n.language === 'en' ? articlesEn : articlesEs;
  articleLoaded = [];
  recommendedEntries = [];

  searchToggle() {
    this.setState({ searchOpen: !this.state.searchOpen });
  }

  loadArticle() {
    if (this.props.match.params.article) {
      if (this.props.match.params.category === i18n.t('routes.our-clients').replace("/", "")) {
        const client = clientsEn.find(client => client.url === this.props.match.params.article || clientsEs.find(client => client.url === this.props.match.params.article))
        this.articleLoaded = client;
        this.generateRecommendedEntries('clients');
      } else {
        const art = articlesEn.find(art => art.url === this.props.match.params.article) || articlesEs.find(art => art.url === this.props.match.params.article);
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
      array = this.articles.filter(t => t.breads.find(e => e.href.includes(nCategory)));
      //array = this.articles;
    } else {
      array = this.clients;
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

  searchOnChange(event) {
    console.log(event.target.value)
    const allArticles = articlesEn.concat(articlesEs);
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
    console.log(data);
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

  render() {
    const { Search } = Input;
    const { Option } = Select;
    const { searchOpen, emailNewsletter, newsletterWaiting, findedArticles, searchValue } = this.state;
    const { category, article } = this.props.match.params;
    const { t } = this.props;
    const latestArticle = this.articles[0];
    const allArticles = articlesEn.concat(articlesEs);
    const imgs = [item2, item3, item4, item5];
    this.loadArticle();

    return (
      <Layout className="blog-component">
        <MetaTags>
          <title>Blog | Under The Tree</title>
          <meta property="og:title" content="Blog | Under The Tree" />
          <meta property="og:image" content='https://www.lukerchocolate.com/static/media/blog-header.8847659a.jpg' />
          <meta property="og:url" content={window.location.href} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Luker Chocolate." />
          <meta name="twitter:image:alt" content="Blog | Under The Tree" />
          <meta property="fb:app_id" content="your_app_id" />
          <meta name="twitter:site" content="@Luker_Chocolate" />
        </MetaTags>
        {/*        <Helmet>
          <title>Blog | Under The Tree</title>
          <meta property="og:title" content="Blog | Under The Tree" />
          <meta property="og:image" content='https://www.lukerchocolate.com/static/media/blog-header.8847659a.jpg' />
          <meta property="og:url" content={window.location.href} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Luker Chocolate." />
          <meta name="twitter:image:alt" content="Blog | Under The Tree" />
          <meta property="fb:app_id" content="your_app_id" />
          <meta name="twitter:site" content="@Luker_Chocolate" />
</Helmet>*/}
        <div className={`blog-component-header blog-component-header--${(article) ? article : category}`} style={{ backgroundImage: category !== t('routes.our-clients').replace("/", "") ? (article) ? `linear-gradient(to bottom, rgba(3, 3, 3, 0.4) 100%, transparent), url(${require(`../../assets/img/blog/${this.articleLoaded.cover}`)})` : '' : `linear-gradient(to bottom, rgba(3, 3, 3, 0.4) 100%, transparent), url(${require(`../../assets/img/${this.articleLoaded.banner}`)})` }}>
          <div className="btn-dist">
            <Link to="/" className="logo"> <img src={logo} alt="Logo Luker" /></Link>
            {category === t('routes.our-clients').replace("/", "") ?
              <Link to={t('routes.our-clients')}>{t('buttons.back')}</Link> :
              <Link to='/blog'>BLOG</Link>
            }
          </div>
          <FloatLogo btns={[{ url: category === t('routes.our-clients').replace("/", "") ? t('routes.our-clients') : '/blog', btnText: category === t('routes.our-clients').replace("/", "") ? t('buttons.back').toUpperCase() : 'BLOG' }]} />
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
              <SelectLanguage />
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
              (article) ? <Article data={this.articleLoaded} recommended={this.recommendedEntries} /> : <TakeStand articles={allArticles.filter(t => t.breads.find(e => e.href.includes(category)))} category={category} />
              :
              <div className="blog-layout">
                <div className="blog-layout-latest">
                  <h1>{t('blog.latest-entries')}</h1>
                  <Link to={latestArticle.breads[1].href + '/' + latestArticle.url} className="blog-layout-latest--article">
                    <img src={require('../../assets/img/blog/' + latestArticle.cover)} alt={latestArticle.title} />
                    <p>{latestArticle.date}</p>
                    <h2>{latestArticle.title}</h2>
                  </Link>
                </div>
                <div className="blog-layout-articles">
                  {Object.keys(this.articles).map(i =>
                    i <= 3 && <div className="blog-layout-articles--item" key={i}>
                      <Link to={this.articles[i].breads[1].href + '/' + this.articles[i].url} className="blog-layout-latest--article">
                        <img src={require('../../assets/img/blog/' + this.articles[i].cover)} />
                        <p>{this.articles[i].date}</p>
                        <h2>{this.articles[i].title}</h2>
                      </Link>
                    </div>
                  )}
                </div>
                <div className="blog-layout-featured">
                  <h1>{t('blog.featured')}</h1>
                  <div className="blog-layout-featured-item">
                    {Object.keys(this.articles).map(i =>
                      i <= 4 && <div className="blog-layout-articles--item" key={i}>
                        <Link to={this.articles[i].breads[1].href + '/' + this.articles[i].url} className="blog-layout-latest--article">
                          <p>{this.articles[i].date}</p>
                          <h2>{this.articles[i].title} </h2>
                        </Link>
                      </div>
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
      </Layout >
    );
  }
}
export default withNamespaces()(Blog);