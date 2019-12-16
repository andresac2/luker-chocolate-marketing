
import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'

import { Link } from 'react-router-dom';
import Maquila from '../../components/product-services/maquila/maquila';
import Footer from '../../components/layout/footer/footer';
import ProductServices from '../../components/product-services/product-services';
import Ingredients from '../../components/product-services/ingredients/ingredients';
import OurServices from '../../components/product-services/our-services/our-services';
import Modals from '../../components/modals/modals';

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
            <button className="float-logo-dist" onClick={() => this.showModalDist(distModalVisible)}> FIND A DISTRIBUTOR </button>
            {(item) ?
              <Link to={'/products-services/' + title}>BACK</Link> :
              <Link to="/products-services" style={{ fontSize: '9px' }}>BACK TO PRODUCTS & SERVICES</Link>
            }
          </div>
          <h1>{(title === 'finished-chocolate-products') ? 'FINISHED CHOCOLATE PRODUCTS' : (title === 'ingredients') ? 'CHOCOLATE INGREDIENTS' : 'OUR SERVICES'}</h1>
        </div>
        <div className="services-content">
          {(title === 'our-services') ? <OurServices /> :
            (item) ? (title === 'finished-chocolate-products') ? <Maquila product={products[products.findIndex(product => product.id === item)]} /> : <Ingredients product={ingredients[ingredients.findIndex(i => i.id === item)]} />
              : <ProductServices items={(title === 'finished-chocolate-products') ? products : ingredients} title={(title === 'finished-chocolate-products') ? 'BRANDED CHOCOLATE PRODUCTS' : 'OUR PRODUCTS'} page={title} />}
        </div>
        <Footer />
        <Modals visible={distModalVisible} modal={'distributors'} showModalDist={this.showModalDist} />
      </div>
    );
  }
};


export default ProductsServices;