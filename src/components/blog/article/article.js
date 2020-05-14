import React from 'react';
import { Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaPrint, FaTwitter } from 'react-icons/fa';
import Comments from '../comments/comments';
import { Helmet } from 'react-helmet';
import { withNamespaces } from 'react-i18next';


class Article extends React.Component {
  render() {
    const { data, recommended, t } = this.props;
    const altImg = 'img-example.svg';
    const fullUrl = data.fullUrl;

    return (
      <div className="blog-article">
        <Helmet>
          <title>{data.title.charAt(0).toUpperCase() + data.title.slice(1).toLowerCase()}</title>
          <meta name="description" content={data.flag ? "Our clients" : data.breads[0].href} />
          <meta property="og:title" content={data.title} />
          <meta property="og:description" content={(data.flag) ? 'Our clients' : data.breads[0].href} />
          {!data.cover.includes('http') && <meta property="og:image" content={require(`../../../assets/img/${data.flag ? '' : 'blog/'}${data.cover ? data.cover : 'img-example.svg'}`)} />}
          {data.cover.includes('http') && <meta property="og:image" content={data.cover} />}
          <meta property="og:url" content={fullUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Luker Chocolate." />
          <meta name="twitter:image:alt" content={data.flag ? "Our clients" : data.breads[0].href} />
          <meta property="fb:app_id" content="your_app_id" />
          <meta name="twitter:site" content="@Luker_Chocolate" />
          {!data.cover.includes('http') && <meta property="twitter:image" content={require(`../../../assets/img/${data.flag ? '' : 'blog/'}${data.cover ? data.cover : 'img-example.svg'}`)} />}
          {data.cover.includes('http') && <meta property="twitter:image" content={data.cover} />}
        </Helmet>

        {this.window && !this.window.location.href.includes('sustainability') &&
          <div className="blog-article-title-resp">{data.title}</div>
        }
        <div className="blog-article-bread">
          <Breadcrumb>
            {data.breads && Object.values(data.breads).map((item, i) =>
              <Breadcrumb.Item href={item.href} key={i}>
                {(item.name === 'Blog') ? <Icon type="home" /> : item.name}
              </Breadcrumb.Item>
            )}
            <Breadcrumb.Item>
              <span>{data.title}</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="blog-article-bread--social">
            <a href={'https://www.facebook.com/sharer/sharer.php?u=' + fullUrl} target="_blank" ><FaFacebookF /></a>
            <a href={'https://twitter.com/share?text=I\'m reading &url=' + fullUrl + '&hashtags=#Cacao'} target="_blank" ><FaTwitter /></a>
            <a href={'https://www.linkedin.com/shareArticle?mini=true&url=' + fullUrl} target="_blank" ><FaLinkedinIn /></a>
            <a href="" target="_blank" style={{ display: 'none' }} ><FaPrint /></a>
          </div>
        </div>
        <article className="blog-article-content" dangerouslySetInnerHTML={{ __html: data.content }} />
        {data.autor && <div className="blog-article-autor">
          <img src={data.autor.avatar} alt={data.autor.name} />
          <div className="blog-article-autor--data">
            <h2>{data.autor.name}</h2>
            <span>{data.autor.details}</span>
            {/*<p>{data.autor.description}</p>*/}
            <a href={data.autor.linkedin} target="_blank" ><FaLinkedinIn /> {data.autor.name}</a>
          </div>
        </div>}
        {recommended?.length > 0 &&
          <div className="blog-article-entries">
            <h2>{data.flag ? t('blog.other-clients') : t('blog.recommended-entries')}</h2>
            <div className="blog-article-entries--list">
              {Object.values(recommended).map((item, i) =>
                <Link key={i} to={item.url}>
                  { !item.cover.includes('http') && <img src={require('../../../assets/img/' + (data.flag ? '' : 'blog/') + (item.cover ? item.cover : altImg))} alt={item.title} /> }
                  { item.cover.includes('http') && <img src={item.cover} alt={item.title} /> }
                  <p>{item.date}</p>
                  <h2>{item.title}</h2>
                </Link>
              )}
            </div>
          </div>
        }
        {!data.flag &&
          <div className="blog-article-comments">
            <Comments />
          </div>
        }
      </div>
    );
  }
}
export default withNamespaces()(Article);
