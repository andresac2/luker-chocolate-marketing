import React from 'react'
import altImg from '../../../assets/img/img-example.svg'
import back from '../../../assets/img/back.svg'
import WrappedContactUs from '../../layout/contact-us/contact-us';
import { FaInfo } from 'react-icons/fa';

class Ingredients extends React.Component {
  render() {
    const { product } = this.props;
    const altImg = 'img-example.svg';
    const itemsArauca = [{
      img: 'p-arauca.png',
      description: 'ARAUCA 70%'
    },
    {
      img: 'p-tumaco.png',
      description: 'TUMACO 65%'
    },
    {
      img: 'p-peru.png',
      description: 'PERU 72%'
    },
    {
      img: 'p-santander.png',
      description: 'SANTANDER 65%'
    },
    {
      img: 'p-huila.png',
      description: 'HUILA 65%'
    }
    ];

    return (
      <div className="ingredients-component" >
        <div className="ingredients-component--header">
          <h1>{product.subtitle}</h1>
          <h1>{product.name}</h1>
          <img src={require('../../../assets/img/lukerproducts.png')} alt='jaja' />
        </div>
        <div className="ingredients-component--content">
          <h2>UNIQUE ORIGIN</h2>
          <p>CasaLuker 1906, SANTANDER, HUILA, TUMACO and ARAUCA. Four Colombian Origin Chocolates with flavours that reflect the country’s geographic and cultural diversity. Santander cocoa is cultivated in the Andes; Tumaco, in the tropical forests of the Pacific Coast and Huila cocoa is typical of the region’s deep valleys. In Arauca, cocoa grows in wild landscapes between the snow-capped mountains and valleys of the Orinoco. Mountains, forests and valleys: CasaLuker 1906, the chocolate with an inimitable flavour of the land that it grows in.</p>
          <p>{product.description}</p>
        </div>
        <div className="ingredients-component--products">
          {Object.keys(itemsArauca).map(i =>
            <div key={i} className="ingredients-component--products-item">
              <img src={require('../../../assets/img/' + (itemsArauca[i].img ? itemsArauca[i].img : altImg))} alt='jaja' />
              <span>i</span>
              <h2>CasaLuker 1906</h2>
              <p>{itemsArauca[i].description}</p>
            </div>)}

        </div>
        <WrappedContactUs page='ingredients' products={''} />
      </div>
    );
  }
};


export default Ingredients;