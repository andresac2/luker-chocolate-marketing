import React from 'react';
import item1 from '../../../assets/img/stand-itemh.png'
import item2 from '../../../assets/img/abaste-cover.png'
import item3 from '../../../assets/img/stand-item1.png'
import item4 from '../../../assets/img/stand-item2.png'
import item5 from '../../../assets/img/stand-item3.png'
import item6 from '../../../assets/img/brick-luker.png'
import item7 from '../../../assets/img/vista-finca.png'
import item8 from '../../../assets/img/the-chocolate-process/finished-products/finished-product-title.jpg'
import item9 from '../../../assets/img/the-chocolate-process/Processing/processing-title.jpg'
import item10 from '../../../assets/img/the-chocolate-process/cacao/cacao-fino-de-aroma-title.jpg'
import item11 from '../../../assets/img/the-chocolate-process/harvesting/harvesting-title.jpg'
import item12 from '../../../assets/img/the-chocolate-process/post-harvesting/post-harvesting-title.jpg'
import item13 from '../../../assets/img/the-chocolate-process/raffinement-conching/raffinement-conching-title.jpg'
import item14 from '../../../assets/img/404-bkg.png'
import item15 from '../../../assets/img/consistency-flavour.png'
import item16 from '../../../assets/img/customer-bkg.png'
import item17 from '../../../assets/img/PAUL LAFAYET_Creme.png'
import item18 from '../../../assets/img/unique-flavour.png'
import item19 from '../../../assets/img/serv-maquila-cover.png'
import { Link } from 'react-router-dom';

import { FaHospitalAlt } from 'react-icons/fa';

function randomNum(limit) {
  return Math.floor(Math.random() * limit)
}
function TakeStand(props) {
  const lim = props.articles.length - 1;
  const category = props.category;
  const imgs = [item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12, item13, item14, item15, item16, item17, item18, item19];
  const limImgs = imgs.length;

  return (
    <div className="take-stand">
      <div className="blog-layout-latest">
        <h1>FEATURED POST</h1>
        {
          <div className="blog-layout-latest--article">
            <Link to={'/blog/' + category + '/' + props.articles[lim].url}>
              <img src={imgs[randomNum(limImgs)]} alt="cacao" />
              <p>{props.articles[lim].date}</p>
              <h2>{props.articles[lim].title}</h2>
            </Link>
          </div>
        }
      </div>
      <div className="blog-layout-articles">
        {Object.keys(props.articles.reverse()).map(i =>
          i !== '0' && <div className="blog-layout-articles--item" key={i}>
            <Link to={'/blog/' + category + '/' + props.articles[i].url} className="blog-layout-latest--article">
              <img src={imgs[randomNum(limImgs)]} />
              <p>{props.articles[i].date}</p>
              <h2>{props.articles[i].title} </h2>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default TakeStand;
