import React from 'react';
import item1 from '../../../assets/img/stand-itemh.png'
import item2 from '../../../assets/img/abaste-cover.png'
import item3 from '../../../assets/img/stand-item1.png'
import item4 from '../../../assets/img/stand-item2.png'
import item5 from '../../../assets/img/stand-item3.png'
import item6 from '../../../assets/img/brick-luker.png'
import item7 from '../../../assets/img/vista-finca.png'
import { Link } from 'react-router-dom';

import { FaHospitalAlt } from 'react-icons/fa';


function randomArticle(limit) {
  return Math.floor(Math.random() * limit)
}
function TakeStand(props) {
  const lim = props.articles.length;
  return (
    <div className="take-stand">
      <div className="blog-layout-latest">
        <h1>FEATURED POST</h1>
        {
          <div className="blog-layout-latest--article">
            <Link to={'/blog/take-stand' + props.articles[7].url}>
              <img src={item1} alt="cacao" />
              <p>{props.articles[7].date}</p>
              <h2>{props.articles[7].title}</h2>
            </Link>
          </div>
        }
      </div>
      <div className="blog-layout-articles">
        <div className="blog-layout-articles--item">
          <Link to={'/blog/take-stand' + props.articles[randomArticle(lim)].url}>
            <img src={item2} alt="cacao" />
            <p>{props.articles[randomArticle(lim)].date}</p>
            <h2>{props.articles[randomArticle(lim)].title}</h2>
          </Link>
        </div>
        <div className="blog-layout-articles--item">
          <Link to={'/blog/take-stand/' + props.articles[randomArticle(lim)].url}>
            <img src={item3} alt="cacao" />
            <p>{props.articles[randomArticle(lim)].date}</p>
            <h2>{props.articles[randomArticle(lim)].title}</h2>
          </Link>
        </div>
        <div className="blog-layout-articles--item">
          <Link to={'/blog/take-stand/' + props.articles[randomArticle(lim)].url}>
            <img src={item4} alt="cacao" />
            <p>{props.articles[randomArticle(lim)].date}</p>
            <h2>{props.articles[randomArticle(lim)].title}</h2>
          </Link>
        </div>
        <div className="blog-layout-articles--item">
          <Link to={'/blog/take-stand/' + props.articles[randomArticle(lim)].url}>
            <img src={item5} alt="cacao" />
            <p>{props.articles[randomArticle(lim)].date}</p>
            <h2>{props.articles[randomArticle(lim)].title}</h2>
          </Link>
        </div>
        <div className="blog-layout-articles--item">
          <Link to={'/blog/take-stand/' + props.articles[randomArticle(lim)].url}>
            <img src={item6} alt="cacao" />
            <p>{props.articles[randomArticle(lim)].date}</p>
            <h2>{props.articles[randomArticle(lim)].title}</h2>
          </Link>
        </div>
        <div className="blog-layout-articles--item">
          <Link to={'/blog/take-stand/' + props.articles[randomArticle(lim)].url}>
            <img src={item7} alt="cacao" />
            <p>{props.articles[randomArticle(lim)].date}</p>
            <h2>{props.articles[randomArticle(lim)].title}</h2>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TakeStand;
