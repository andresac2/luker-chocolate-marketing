import React from 'react'
import WrappedContactUs from '../../../layout/contact-us/contact-us';

class IngredientCacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsSelected: [],
      itemsDark: [{
        id: 1,
        img: 'luker-cumbre-58.png',
        description: 'CUMBRE 58%',
        selected: false
      },
      {
        id: 2,
        img: 'LUKER-CACAO-VALLE50.png',
        description: 'VALLE 50%',
        selected: false
      },
      {
        id: 3,
        img: 'LUKER-CACAO-MACONDO-60.png',
        description: 'MACONDO 60%',
        selected: false
      },
      {
        id: 4,
        img: 'LUKER-CACAO-MARANTA 61.png',
        description: 'MARANTA 61%',
        selected: false
      },
      {
        id: 5,
        img: 'LUKER-CACAO-MISTERIO58.png',
        description: 'MISTERIO 50%',
        selected: false
      },
      {
        id: 6,
        img: 'LUKER-CACAO-PALENQUE70.png',
        description: 'PALENQUE 70%',
        selected: false
      },
      {
        id: 7,
        img: 'LUKER-CACAO-SELVA46.png',
        description: 'SELVA 46%',
        selected: false
      },
      {
        id: 8,
        img: 'LUKER-CACAO-SOMBRA54.png',
        description: 'SOMBRA 54%',
        selected: false
      }
      ]
    };
  }

  productToggle(id, selected) {
    this.setState({
      itemsDark: this.state.itemsDark.map(el => (el.id === id ? { ...el, selected } : el))
    });
  };

  render() {
    const { data } = this.props;
    const { itemsDark, itemsSelected } = this.state;
    const altImg = 'img-example.svg';

    return (
      <div className="cacao-component" >
        <div className="ingredients-component--header">
          <h1>the best</h1>
          <h1>ingredients</h1>
          <div className="cacao-component--header-img">
            <img src={require('../../../../assets/img/LUKER-CACAO-HELICONIA-41.png')} alt='milk chocolate' />
            <img src={require('../../../../assets/img/LUKER-CACAO-PALENQUE70.png')} alt='dark chocolate' />
            <img src={require('../../../../assets/img/LUKER-CACAO-PARAMO.png')} alt='white chocolate' />
          </div>
        </div>
        <div className="ingredients-component--content">
          <p>{data.description}</p>
        </div>
        <div className="ingredients-component--products">
          {Object.keys(itemsDark).map(i =>
            <div key={i} className={`ingredients-component--products-item ingredients-component--products-item-${itemsDark[i].selected && 'active'}`} onClick={() => this.productToggle(itemsDark[i].id, !itemsDark[i].selected)}>
              <img src={require('../../../../assets/img/' + (itemsDark[i].img ? itemsDark[i].img : altImg))} alt='jaja' />
              <span>i</span>
              <h2>CasaLuker 1906</h2>
              <p>{itemsDark[i].description}</p>
            </div>)}
        </div>
        <WrappedContactUs page='ingredients' products={itemsDark} />
      </div>
    );
  }
};


export default IngredientCacao;