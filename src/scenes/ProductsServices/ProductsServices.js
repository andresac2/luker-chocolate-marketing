import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'

import { Link } from 'react-router-dom';
import Maquila from '../../components/product-services/maquila/maquila';
import Footer from '../../components/layout/footer/footer';
import ProductServices from '../../components/product-services/product-services';
import Ingredients from '../../components/product-services/ingredients/ingredients';
import OurServices from '../../components/product-services/our-services/our-services';
import Modals from '../../components/modals/modals';
import i18n from '../../i18n';
import { withNamespaces } from 'react-i18next';

//import { finishedChocolateProducts as finishedChocolateProductsEn, ingredients as ingredientsEn } from '../../commons/data/data-en';
//import { finishedChocolateProducts as finishedChocolateProductsEs, ingredients as ingredientsEs } from '../../commons/data/data-es';
import { ingredients as ingredientsEn } from '../../commons/data/data-en';
import { ingredients as ingredientsEs } from '../../commons/data/data-es';

import { getFinishedChocolateProducts, getFinishedChocolateProductsEs, getIngredients, getIngredientsEs } from '../../commons/services/api';
import { Spin } from 'antd';

class ProductsServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distModalVisible: false,
      products: ''
    };
    this.showModalDist = this.showModalDist.bind(this)
  }

  async getMaquilaItems() {
    let arrItems = [];
    if (i18n.language === 'en') {
      getFinishedChocolateProducts().then(data =>
        data.map((e, i) => {
          arrItems.push(e.acf);
        })).then(data =>
          this.setState({ products: arrItems })
        )
    } else {
      getFinishedChocolateProductsEs().then(data =>
        data.map((e, i) => {
          arrItems.push(e.acf);
        })).then(data =>
          this.setState({ products: arrItems })
        )
    }
  }

  async getIngredientsItems() {
    let arrItems = [];
    if (i18n.language === 'en') {
      getIngredients().then(data =>
        data.map((e, i) => {
          arrItems.push(e.acf);
        })).then(data =>
          this.setState({ ingredients: arrItems })
        )
    } else {
      getIngredientsEs().then(data =>
        data.map((e, i) => {
          arrItems.push(e.acf);
        })).then(data =>
          this.setState({ ingredients: arrItems })
        )
    }
  }

  showModalDist = () => {
    this.setState({
      distModalVisible: !this.state.distModalVisible,
    });
  };

  componentDidMount() {
    //this.getIngredientsItems();
    this.getMaquilaItems();
  }


  render() {
    const { title, item } = this.props.match.params;
    const { distModalVisible, products } = this.state;
    const { t } = this.props;

    //const products = i18n.language === 'en' ? finishedChocolateProductsEn : finishedChocolateProductsEs;
    const ingredients = i18n.language === 'en' ? ingredientsEn : ingredientsEs;

    return (
      <div className="services-component">
        <div className={`services-header services-header--${title} ${(item) && 'services-header--title-short'}`}>
          <div className="btn-dist">
            <Link to="/" className="logo"> <img src="/static/media/Lukerlogo.af6f7609.svg" alt="Logo Luker" /></Link>
            <button className="float-logo-dist" onClick={() => this.showModalDist(distModalVisible)}>{t('buttons.find-distributor')}</button>
            {(item) ?
              <Link to={t('routes.products-services') + '/' + title}>{t('buttons.back').toUpperCase()}</Link> :
              <Link to={t('routes.products-services')} style={{ fontSize: '9px' }}>{t('buttons.back-to-products-services').toUpperCase()}</Link>
            }
          </div>
          <h1>{(title === t('routes.finished-chocolate-products').slice(1).split('/').shift()) ? t('products-services.finished-chocolate-products').toUpperCase() : (title === t('routes.ingredients').slice(1).split('/').shift()) ? t('products-services.chocolate').toUpperCase() + ' ' + t('products-services.ingredients').toUpperCase() : t('products-services.our-services').toUpperCase()}</h1>
        </div>
        {(products.length > 0 && ingredients.length > 0) ? <div className="services-content">
          {(title === t('routes.our-services').slice(1).split('/').shift()) ? <OurServices /> :
            (item) ? (title === t('routes.finished-chocolate-products').slice(1).split('/').shift()) ? <Maquila product={products[products.findIndex(product => product.id === item)]} /> : <Ingredients product={ingredients[ingredients.findIndex(i => i.id === item)]} />
              : <ProductServices items={(title === t('routes.finished-chocolate-products').slice(1).split('/').shift()) ? products : ingredients} title={(title === t('routes.finished-chocolate-products').slice(1).split('/').shift()) ? t('products-services.branded-chocolate-products').toUpperCase() : t('products-services.our-products').toUpperCase()} page={title} />}
        </div> : <Spin size="large" />}
        <Footer />
        <Modals visible={distModalVisible} modal={'distributors'} showModalDist={this.showModalDist} />
      </div>
    );
  }
};
export default withNamespaces()(ProductsServices);