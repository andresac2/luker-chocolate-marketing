import React from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import altImg from '../../assets/img/img-example.svg'
import back from '../../assets/img/back.svg'
import { withNamespaces } from 'react-i18next';

class ProductServices extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: ''
    };
  }

  selectProduct(n) {
    this.setState({ selectedProduct: n });
  }

  reorderItems(items, moveFromIndex, moveToIndex) {
    const movingItem = items[moveFromIndex];
    items.splice(moveFromIndex, 1);
    items.splice(moveToIndex, 0, movingItem);
    this.setState({ products: items });
  }
  render() {
    const { selectedProduct } = this.state;
    const { items, title, page, t } = this.props;
    const limit = items.length - 1;
    const logoSedex = t('home.logo-sedex') !== false ? t('home.logo-sedex') : "https://www.back.lukerchocolate.com/wp-content/uploads/2020/01/Sedex-Member.png";
    const logoGmo = t('home.logo-gmo') !== false ? t('home.logo-gmo') : "https://www.back.lukerchocolate.com/wp-content/uploads/2020/01/Non-GMO.png";
    const logoKosher = t('home.logo-kosher') !== false ? t('home.logo-kosher') : "https://www.back.lukerchocolate.com/wp-content/uploads/2020/01/OU-Kosher.png";

    return (
      <div className={`product-services-component product-services-component--${page}`} >
        {!selectedProduct && <><h2 className="product-services-component-title"> {title}</h2>
          <div className="product-carrousel">
            <img className="btn-next-img" src="/static/media/back.9ae9d2c8.svg" alt='left' onClick={() => this.reorderItems(items, 0, limit)} />
            {
              Object.keys(items).map(i =>
                <div key={i} className={`carr-item carr-item--${i == 1 && 'active'} carr-item--${items[i].id}`} onClick={() => this.reorderItems(items, (i === '0') ? limit : 0, (i === '0') ? 0 : limit)}>
                  <div className={`carr-item-img`}>
                    <img src={(items[i].img ? items[i].img : altImg)} alt={items[i].name} />
                  </div>
                  <div className={`carr-item-data`}>
                    <p>{items[i].subtitle}</p>
                    <h2>{items[i].name}</h2>
                  </div>
                </div>
              )
            }
            <img className="btn-next-img btn-next-img--right" src="/static/media/back.9ae9d2c8.svg" alt='right' onClick={() => this.reorderItems(items, limit, 0)} />
          </div>
          <div className="description">
            {items[1].description}
          </div>
          <Link className="btn-tobuy" to={t('routes.products-services') + "/" + page + "/" + items[1].id}>{(page === 'maquila') ? t('buttons.find-out-more').toUpperCase() : t('buttons.get-it-here').toUpperCase()}</Link>
          <div className={`product-services-component--footer product-services-component--footer--${items[1].id}`}>
            <p/>
            <div className="product-services-component-certificates">
              <a href="https://www.sedexglobal.com/" target="_blank"> <img src={logoSedex} alt="Logo sedex" /> </a>
              <a href="https://www.nongmoproject.org/find-non-gmo/verified-products/?brand_id=10589" target="_blank"> <img src={logoGmo} alt="Logo gmo" /> </a>
              <a href="https://oukosher.org/product-search/#s=LUKER&dpm%5Bm%5D=false&dpm%5Bd%5D=false&dpm%5Bp%5D=false&prod%5Bpas_yisroel%5D=false&prod%5Bcholov_yisroel%5D=false&prod%5Byoshon%5D=false&prod%5Bgluten_free%5D=false&passover=false" target="_blank"> <img src={logoKosher} alt="Logo kosher" /> </a>
            </div>
            <span className="product-pending-certificates">{t("products-services.pending_certification")}</span>
          </div>
          </>
        }
        <div className="btn-back-sticky">
          <Link to={t('routes.products-services')} >{t('buttons.back-to-products-services').toUpperCase()}</Link>
        </div>
      </div >
    );
  }
};

const mapStateToProps = (state) => {
  return {
    components: state.components
  }
}

const mapDispatchToProps = {
};

ProductServices = connect(mapStateToProps, mapDispatchToProps)(ProductServices);

export default withNamespaces()(ProductServices);