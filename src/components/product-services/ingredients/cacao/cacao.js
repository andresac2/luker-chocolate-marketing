import React from 'react'
import WrappedContactUs from '../../../layout/contact-us/contact-us';

class IngredientCacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemsHeader: [{
        id: 'itemsMilk',
        img: 'LUKER-CACAO-HELICONIA-41.png',
        title: 'Milk Chocolate',
        items: [{
          id: 1,
          img: 'LUKER-CACAO-HELICONIA-41.png',
          description: 'CUMBRE 58%',
          selected: false
        },
        {
          id: 2,
          img: 'LUKER-CACAO-HELICONIA-41.png',
          description: 'VALLE 50%',
          selected: false
        },
        {
          id: 3,
          img: 'LUKER-CACAO-HELICONIA-41.png',
          description: 'MACONDO 60%',
          selected: false
        },
        {
          id: 4,
          img: 'LUKER-CACAO-HELICONIA-41.png',
          description: 'MARANTA 61%',
          selected: false
        },
        {
          id: 5,
          img: 'LUKER-CACAO-HELICONIA-41.png',
          description: 'MISTERIO 50%',
          selected: false
        },
        {
          id: 6,
          img: 'LUKER-CACAO-HELICONIA-41.png',
          description: 'PALENQUE 70%',
          selected: false
        },
        {
          id: 7,
          img: 'LUKER-CACAO-HELICONIA-41.png',
          description: 'SELVA 46%',
          selected: false
        },
        {
          id: 8,
          img: 'LUKER-CACAO-HELICONIA-41.png',
          description: 'SOMBRA 54%',
          selected: false
        }
        ]
      },
      {
        id: 'itemsDark',
        img: 'LUKER-CACAO-PALENQUE70.png',
        title: 'Dark Chocolate',
        items: [{
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
        }
        ]
      },
      {
        id: 'itemsWhite',
        img: 'LUKER-CACAO-PARAMO.png',
        title: 'White Chocolate',
        items: [{
          id: 1,
          img: 'LUKER-CACAO-PARAMO.png',
          description: 'CUMBRE 58%',
          selected: false
        },
        {
          id: 2,
          img: 'LUKER-CACAO-PARAMO.png',
          description: 'VALLE 50%',
          selected: false
        },
        {
          id: 3,
          img: 'LUKER-CACAO-PARAMO.png',
          description: 'MACONDO 60%',
          selected: false
        }
        ]
      }],
      itemsSelected: [],
      itemsShowed: [],
    };
    this.handleSetProductSelected = this.handleSetProductSelected.bind(this);
  }

  componentDidMount() {
    this.changeItems(this.state.itemsHeader[1].items, this.state.itemsHeader[1].id);
  }

  selectProduct(product) {
    console.log(product)
    product.selected = !product.selected;
    if (this.state.itemsSelected.indexOf(product) < 0) {
      this.setState((state) => ({
        itemsSelected: state.itemsSelected.concat([product])
      }))
    } else {
      let array = [...this.state.itemsSelected]; // make a separate copy of the array
      let index = array.indexOf(product)
      if (index !== -1) {
        array.splice(index, 1);
        this.setState({ itemsSelected: array });
      }
    }
  };

  reorderItems(items, moveFromIndex, moveToIndex) {
    const movingItem = items[moveFromIndex];
    items.splice(moveFromIndex, 1);
    items.splice(moveToIndex, 0, movingItem);
    this.setState({ itemsHeader: items });
  }

  changeItems(item, name) {
    const itemSelected = this.state.itemsHeader.findIndex(i => i.id === name);
    this.setState({ itemsShowed: item });
    this.reorderItems(this.state.itemsHeader, 1, itemSelected);
  };

  handleSetProductSelected(value, cacao) {
    console.log(value);
    this.selectProduct(value);
  }

  render() {
    const { data } = this.props;
    const { itemsSelected, itemsShowed, itemsHeader } = this.state;
    const altImg = 'img-example.svg';
    return (
      <div className="cacao-component" >
        <div className="cacao-component--header">
          <h1>the best</h1>
          <h1>ingredients</h1>
          <div className="cacao-component--header-img">
            {Object.keys(itemsHeader).map(i =>
              <img src={require('../../../../assets/img/' + (itemsHeader[i].img ? itemsHeader[i].img : altImg))} alt={itemsHeader[i].title} key={i} />
            )}
          </div>
        </div>
        <div className="cacao-component--content">
          <p>{data.description}</p>
        </div>
        <div className="cacao-component-tabs">
          <div className="cacao-component-tabs-header">
            {Object.keys(itemsHeader).map(i =>
              <div key={i} onClick={() => this.changeItems(itemsHeader[i].items, itemsHeader[i].id)}>{itemsHeader[i].title}</div>
            )}
          </div>
          <div className="cacao-component-tabs-products">
            {
              Object.keys(itemsShowed).map(i =>
                <div key={i} className={`cacao-component-tabs-products-item cacao-component-tabs-products-item-${itemsShowed[i].selected && 'active'}`} onClick={() => this.selectProduct(itemsShowed[i])}>
                  <img src={require('../../../../assets/img/' + (itemsShowed[i].img ? itemsShowed[i].img : altImg))} alt='jaja' />
                  <span>i</span>
                  <h2>CasaLuker 1906</h2>
                  <p>{itemsShowed[i].description}</p>
                </div>)}
          </div>
        </div>
        <WrappedContactUs page='cacao' products={itemsSelected} handleSetProductSelected={this.handleSetProductSelected} />
      </div>
    );
  }
};


export default IngredientCacao;