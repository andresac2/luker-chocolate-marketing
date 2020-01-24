import React from 'react';
import item1 from '../../../assets/img/stand-itemh.jpg'
import item2 from '../../../assets/img/abaste-cover.jpg'
import item3 from '../../../assets/img/stand-item1.jpg'
import item4 from '../../../assets/img/stand-item2.jpg'
import item5 from '../../../assets/img/stand-item3.jpg'
import item6 from '../../../assets/img/brick-luker.jpg'
import item7 from '../../../assets/img/vista-finca.jpg'
import item8 from '../../../assets/img/the-chocolate-process/finished-products/finished-product-title.jpg'
import item9 from '../../../assets/img/the-chocolate-process/Processing/processing-title.jpg'
import item10 from '../../../assets/img/the-chocolate-process/cacao/cacao-fino-de-aroma-title.jpg'
import item11 from '../../../assets/img/the-chocolate-process/harvesting/harvesting-title.jpg'
import item12 from '../../../assets/img/the-chocolate-process/post-harvesting/post-harvesting-title.jpg'
import item13 from '../../../assets/img/the-chocolate-process/raffinement-conching/raffinement-conching-title.jpg'
import item14 from '../../../assets/img/404-bkg.jpg'
import item15 from '../../../assets/img/consistency-flavour.jpg'
import item16 from '../../../assets/img/customer-bkg.jpg'
import item17 from '../../../assets/img/PAUL LAFAYET_Creme.png'
import item18 from '../../../assets/img/unique-flavour.jpg'
import item19 from '../../../assets/img/serv-maquila-cover.jpg'
import { Link } from 'react-router-dom';
import { withNamespaces } from 'react-i18next';

function TakeStand(props) {
  const lim = 0; //props.articles.length - 1;
  const category = props.category;
  const { t } = props;
  return (
    <div className="take-stand">
      <div className="blog-layout-latest">
        <h1>{t('blog.featured-post')}</h1>
        {
          <div className="blog-layout-latest--article">
            <Link to={'/blog/' + category + '/' + props.articles[lim].url}>
              <img src={require('../../../assets/img/blog/' + props.articles[lim].cover)} alt={props.articles[lim].title} />
              <p>{props.articles[lim].date}</p>
              <h2>{props.articles[lim].title}</h2>
            </Link>
          </div>
        }
      </div>
      <div className="blog-layout-articles">
        {Object.keys(props.articles).map(i =>
          <div className="blog-layout-articles--item" key={i}>
            <Link to={'/blog/' + category + '/' + props.articles[i].url} className="blog-layout-latest--article">
              <img src={require('../../../assets/img/blog/' + props.articles[i].cover)} alt={props.articles[i].title} />
              <p>{props.articles[i].date}</p>
              <h2>{props.articles[i].title} </h2>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
export default withNamespaces()(TakeStand);
