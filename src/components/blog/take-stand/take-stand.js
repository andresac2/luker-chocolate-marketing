import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

function TakeStand({ category, t, articles }) {
  
  const lim = 0; //props.articles.length - 1;
  return (
    <div className="take-stand">
      <div className="blog-layout-latest">
        { articles?.length > 0 && <h1>{t('blog.featured-post')}</h1> }
        { articles?.length == 0 && <h1>{t('blog.empty')}</h1> }

        { articles?.length > 0 &&
          <div className="blog-layout-latest--article">
            <Link to={'/blog/' + category + '/' + articles[lim].url}>
              <img src={require('../../../assets/img/blog/' + articles[lim].cover)} alt={articles[lim].title} />
              <p>{articles[lim].date}</p>
              <h2>{articles[lim].title}</h2>
            </Link>
          </div>
        }
      </div>
      <div className="blog-layout-articles">
        {Object.values(articles).map((item, i) =>
          <div className="blog-layout-articles--item" key={i}>
            <Link to={'/blog/' + category + '/' + item.url} className="blog-layout-latest--article">
              <img src={require('../../../assets/img/blog/' + item.cover)} alt={item.title} />
              <p>{item.date}</p>
              <h2>{item.title} </h2>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default withNamespaces()(TakeStand);
