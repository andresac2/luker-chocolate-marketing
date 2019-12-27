import React from 'react';
import { Breadcrumb, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaPrint, FaInstagram, FaTwitter } from 'react-icons/fa';
import Comments from '../comments/comments';
import { Helmet } from 'react-helmet';

class Article extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { data, recommended } = this.props;
    const altImg = 'img-example.svg';
    const fullUrl = window.location.href;
    return (
      <div className="blog-article">
        <Helmet>
          <title>{data.title}</title>
          <meta name="description" content={data.flag ? "Our clients" : data.breads[0].href} />
          <meta property="og:title" content={data.title} />
          <meta property="og:description" content={(data.flag) ? 'Our clients' : data.breads[0].href} />
          <meta property="og:image" content={"https://www.lukerchocolate.com" + require(`../../../assets/img/${data.flag ? '' : 'blog/'}${data.cover ? data.cover : 'img-example.svg'}`)} />
          <meta property="og:url" content={fullUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Luker Chocolate." />
          <meta name="twitter:image:alt" content="Luker Chocolate | Cacao Fino de Aroma" />
          <meta property="fb:app_id" content="your_app_id" />
          <meta name="twitter:site" content="@Luker_Chocolate" />
        </Helmet>
        {!window.location.href.includes('sustainability') && <div className="blog-article-title-resp">{data.title}</div>}
        <div className="blog-article-bread">
          <Breadcrumb>
            {data.breads &&
              Object.keys(data.breads).map(i =>
                <Breadcrumb.Item href={data.breads[i].href} key={i}>
                  {(data.breads[i].name === 'Blog') ? <Icon type="home" /> : data.breads[i].name}
                </Breadcrumb.Item>
              )
            }
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
            <a href={data.autor.linkedin[0]} target="_blank" ><FaLinkedinIn /> {data.autor.linkedin[1]}</a>
          </div>
        </div>}
        {recommended && recommended.length > 0 &&
          <div className="blog-article-entries">
            <h2>{data.flag ? 'OTHER CLIENTS' : 'RECOMMENDED ENTRIES'}</h2>
            <div className="blog-article-entries--list">
              {Object.keys(recommended).map(i =>
                <Link key={i} to={recommended[i].url}>
                  <img src={require('../../../assets/img/' + (data.flag ? '' : 'blog/') + (recommended[i].cover ? recommended[i].cover : altImg))} alt={recommended[i].title} />
                  <p>{recommended[i].date}</p>
                  <h2>{recommended[i].title}</h2>
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
export default Article;