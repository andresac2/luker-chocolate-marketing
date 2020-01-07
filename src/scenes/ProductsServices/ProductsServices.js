
import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'

import { Link } from 'react-router-dom';
import Maquila from '../../components/product-services/maquila/maquila';
import Footer from '../../components/layout/footer/footer';
import ProductServices from '../../components/product-services/product-services';
import Ingredients from '../../components/product-services/ingredients/ingredients';
import OurServices from '../../components/product-services/our-services/our-services';
import Modals from '../../components/modals/modals';
import { withNamespaces } from 'react-i18next';

class ProductsServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      distModalVisible: false
    };
    this.showModalDist = this.showModalDist.bind(this)
  }

  showModalDist = () => {
    this.setState({
      distModalVisible: !this.state.distModalVisible,
    });
  };
  render() {
    const { title, item } = this.props.match.params;
    const { distModalVisible } = this.state;
    const { t } = this.props;

    const products = [
      {
        img: 'cocoa-grageas.png',
        name: 'Panning',
        id: 'panning',
        description: 'We use the panning method for making our delicious chocolate covered dragees. Chocolate is slowly poured over dierent centers; can be dried fruits, cereals, coee beans, among other bite-size treats, creating a thin coating over them.'
      },
      {
        img: 'cocoa-dosing.png',
        name: 'Dosing',
        id: 'dosing',
        description: 'Through a pump-driven chocolate depositor,we have the capacity to make chips, drops and chunks. Playing with the dosage we can offer dierent sizes of these products.'
      }, {
        img: 'cocoa-bars.png',
        name: 'Moulding',
        id: 'moulding',
        description: 'We carry seven diﬀerent existing molds. By combining manual and machine production, we can implement very speciﬁc packaging requirements. Below is a selection of our molds and packaging options.'
      }, {
        img: 'cocoa-powder.png',
        name: 'Cocoa Powder',
        id: 'cocoa-powder',
        description: 'Our sugar and cholesterol-free cocoa powder is made with the best quality fine or flavour cocoa beans. It’s perfect to make delicious hot chocolate or recipes with chocolaty combinations. It can also be used as an ingredient to flavor ice cream, cakes, desserts, and ganache.'
      }];
    const ingredients = [
      {
        img: 'milk-atlantico-33.png',
        name: 'CasaLuker Cacao',
        subtitle: 'THE BEST INGREDIENTS',
        id: 'casaluker-cacao',
        description: 'The meticulous selection of ingredients is essential to achieve the unique sensory profile that characterizes our chocolate.We select the best Cacao Fino de Aroma cocoa beans from Colombia, Ecuador, and Peru.We also use 100% natural cocoa butter and vanilla for our couverture with an exquisite and particular flavor, ideal for chocolate products of all kinds.'
      },
      {
        img: 'p-huila-70.png',
        name: 'Luker 1906',
        subtitle: 'Single origin chocolates',
        id: 'casaluker-origins',
        description: 'Luker 1906 has a unique flavour that is given by the pureness of its origins. Made from selected beans from the different Cacao Fino de Aroma cocoa growing regions and countries, its flavour does not only reflect the cocoa variety, but also the richness of the soil and the cocoa harvesting and growing culture of its region. Luker 1906, a treat for the senses.'
      }, {
        img: 'luker-maracas.png',
        name: 'Luker Maracas',
        subtitle: 'Chocolate Dragees',
        id: 'casaluker-maracas',
        description: 'In the same way as that magical seductive instrument that characterises the happy upbeat feel of the tropics with its sweet and varied rhythm, Luker Maracas presents a new range of chocolate-covered dragees. Filled with roasted coffee, roasted cocoa and sweet tropical fruits, these delightful dragees are covered in our finest Fino de Aroma chocolate. Luker Maracas, Tropical Dragees are ideal for decorating desserts and cakes, to include in preparations, as toppings for ice - cream or simply to give that special touch to your recipes.They are also a good accompaniment for coffee and other hot drinks; they can be mixed in with cereals and dried fruit to prepare delicious, healthy snacks.'
      }];

    return (
      <div className="services-component">
        <div className={`services-header services-header--${title} ${(item) && 'services-header--title-short'}`}>
          <div className="btn-dist">
            <Link to="/" className="logo"> <img src={logo} alt="Logo Luker" /></Link>
            <button className="float-logo-dist" onClick={() => this.showModalDist(distModalVisible)}>{t('buttons.find-distributor')}</button>
            {(item) ?
              <Link to={t('routes.products-services') + '/' + title}>{t('buttons.back').toUpperCase()}</Link> :
              <Link to={t('routes.products-services')} style={{ fontSize: '9px' }}>{t('buttons.back-to-products-services').toUpperCase()}</Link>
            }
          </div>
          <h1>{(title === t('routes.finished-chocolate-products').slice(1).split('/').shift()) ? t('products-services.finished-chocolate-products').toUpperCase() : (title === t('routes.ingredients').slice(1).split('/').shift()) ? t('products-services.chocolate').toUpperCase() + ' ' + t('products-services.ingredients').toUpperCase() : t('products-services.our-services').toUpperCase()}</h1>
        </div>
        <div className="services-content">
          {(title === t('routes.our-services').slice(1).split('/').shift()) ? <OurServices /> :
            (item) ? (title === t('routes.finished-chocolate-products').slice(1).split('/').shift()) ? <Maquila product={products[products.findIndex(product => product.id === item)]} /> : <Ingredients product={ingredients[ingredients.findIndex(i => i.id === item)]} />
              : <ProductServices items={(title === t('routes.finished-chocolate-products').slice(1).split('/').shift()) ? products : ingredients} title={(title === t('routes.finished-chocolate-products').slice(1).split('/').shift()) ? t('products-services.branded-chocolate-products').toUpperCase() : t('products-services.our-products').toUpperCase()} page={title} />}
        </div>
        <Footer />
        <Modals visible={distModalVisible} modal={'distributors'} showModalDist={this.showModalDist} />
      </div>
    );
  }
};
export default withNamespaces()(ProductsServices);