import React, { useState } from 'react';
import { Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaPrint, FaTwitter } from 'react-icons/fa';
import Comments from '../comments/comments';
import { Helmet } from 'react-helmet';
import { withNamespaces } from 'react-i18next';

const Article = (props) => {

  const [firstItem, setFirstItem] = useState(0)

  const carrAction = (fi) => {
    if (fi === 'l' && firstItem !== 0)
      setFirstItem(firstItem - 2);
    if (fi === 'r' && firstItem + 1 < recommended.length - 1)
      setFirstItem(firstItem + 2);
    if (!isNaN(fi))
      setFirstItem(fi * 2);
  }

  const { data, recommended, t } = props;
  const { autor } = data
  const altImg = 'img-example.svg';
  const fullUrl = data.fullUrl;

  return (
    <div className="blog-article">
      <Helmet>
        <title>{data.title?.charAt(0).toUpperCase() + data.title?.slice(1).toLowerCase()}</title>
        <meta name="description" content={data.meta_descripcion} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.meta_descripcion} />
        <meta property="og:image" content={data.image_open_graph?.url} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:site_name" content="Luker Chocolate." />
        <meta name="twitter:title" content={data.title} />
        <meta name="twitter:description" content={data.meta_descripcion} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image:alt" content={data.flag ? "Our clients" : (data.breads ? data.breads[0]?.href : '')} />
        <meta name="twitter:site" content="@Luker_Chocolate" />
        <meta property="twitter:image" content={data.image_open_graph?.url} />
        <meta property="fb:app_id" content="your_app_id" />
      </Helmet>

      {window && !window.location.href.includes('sustainability') &&
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
      {autor &&
        <div className="blog-article-autor">
          <figure>
            <img src={autor.avatar} alt={autor.name} />
          </figure>
          <div className="blog-article-autor--data">
            <h2>{autor.name}</h2>
            <span>{autor.details}</span>
            {/*<p>{data.autor.description}</p>*/}
            <a href={autor.linkedin} target="_blank">
              {autor.linkedin?.includes('linkedin') && <FaLinkedinIn />}
              {autor.name}
            </a>
          </div>
        </div>}

      {recommended?.length > 0 && data.flag && 
        <div className="entries-recommend">
          <h2 className="title-recommend">{data.flag ? t('blog.other-clients') : t('blog.recommended-entries')}</h2>
          <div className="entries-recommend-model">
            <div className="entries-recommend-contain-carr">
              <div className="entries-recommend-contain-carr--items" >
                { recommended.length > 3 && 
                  <img className={`btn-next-img btn-next-img-left btn-next-img${firstItem < 1 && '-disabled'}`} src="/static/media/back.9ae9d2c8.svg" alt='left' onClick={() => carrAction('l')} />
                }
                {Object.values(recommended).map((item, i) =>
                  <Link key={i} to={item.url} className={`card-image ${firstItem > i + 1 && 'item-action--l'}`}>
                    {!item.cover?.includes('http') && <img src={require('../../../assets/img/' + (data.flag ? '' : 'blog/') + (item.cover ? item.cover : altImg))} alt={item.title} />}
                    {item.cover?.includes('http') && <img src={item.cover} alt={item.title} />}
                    <h2>{item.title}</h2>
                  </Link>
                )}
                { recommended.length > 3 && 
                  <img className={`btn-next-img btn-next-img${firstItem >= 2 && '-disabled'}`} src="/static/media/back.9ae9d2c8.svg" alt='right' onClick={() => carrAction('r')} />
                }
              </div>
            </div>
          </div>
        </div>
      }

      {recommended?.length > 0 && !data.flag &&
        <div className="blog-article-entries">
          <h2>{data.flag ? t('blog.other-clients') : t('blog.recommended-entries')}</h2>
          <div className="blog-article-entries--list">
            {Object.values(recommended).map((item, i) =>
              <Link key={i} to={item.url}>
                {!item.cover?.includes('http') && <img src={require('../../../assets/img/' + (data.flag ? '' : 'blog/') + (item.cover ? item.cover : altImg))} alt={item.title} />}
                {item.cover?.includes('http') && <img src={item.cover} alt={item.title} />}
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

export default withNamespaces()(Article);
