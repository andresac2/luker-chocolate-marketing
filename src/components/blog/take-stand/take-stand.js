import React from 'react';
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';
import { connect } from 'react-redux';

function TakeStand({ category, t, articles, articleFlux }) {
  const lastArticle = articles[0]
  const listArticles = articles.filter((item, i) =>  i !== 0)

  return (
    <div className="take-stand">
      <div className="blog-layout-latest">
        { lastArticle && <h1>{t('blog.latest-entries')}</h1> }
        { !lastArticle && articles?.length == 0 && <h1>{t('blog.empty')}</h1> }

        { lastArticle &&
          <div className="blog-layout-latest--article">
            <Link to={'/blog/' + category + '/' + lastArticle.url}>
              <img src={lastArticle.cover.includes('http')? lastArticle.cover: require('../../../assets/img/blog/' + lastArticle.cover)} alt={lastArticle.title} />
              <p>{lastArticle.date}</p>
              <h2>{lastArticle.title}</h2>
            </Link>
          </div>
        }
      </div>
      <div className="blog-layout-articles">
        {Object.values(listArticles).map((item, i) =>
          <div className="blog-layout-articles--item" key={i}>
            <Link to={'/blog/' + category + '/' + item.url} className="blog-layout-latest--article">
              <img src={item.cover.includes('http')? item.cover: require('../../../assets/img/blog/' + item.cover)} alt={item.title} />
              <p>{item.date}</p>
              <h2>{item.title} </h2>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    articleFlux: state.article
  }
}

const mapDispatchToProps = {
};

TakeStand = connect(mapStateToProps, mapDispatchToProps)(TakeStand);

export default withNamespaces()(TakeStand);
