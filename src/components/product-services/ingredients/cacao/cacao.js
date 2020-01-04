import React from 'react'
import WrappedContactSide from '../../../layout/contact-side/contact-side';

class IngredientCacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideFormContact: true,
      itemsHeader: [{
        id: 'itemsMilk',
        img: 'LUKER-CACAO-HELICONIA-41.png',
        title: 'Milk Chocolate',
        items: [{
          id: 1,
          img: 'milk-atlantico-33.png',
          description: ['ATLÁNTICO 33.5%', 'MILK 28%'],
          selected: false
        },
        {
          id: 2,
          img: 'milk-mulata-37.png',
          description: ['MULATA SUGAR FREE 37%', 'MILK 23%'],
          selected: false
        },
        {
          id: 3,
          img: 'milk-clarodeluna-37.png',
          description: ['CLARO DE LUNA 37%', 'MILK 10%'],
          selected: false
        },
        {
          id: 4,
          img: 'milk-noche-40.png',
          description: ['NOCHE 40%', 'MILK 13%'],
          selected: false
        },
        {
          id: 5,
          img: 'milk-heliconia-41.png',
          description: ['HELICONIA 41%', 'MILK 19%'],
          selected: false
        },
        {
          id: 6,
          img: 'milk-caribe-45.png',
          description: ['CARIBE 45%', 'MILK 20%'],
          selected: false
        }
        ]
      },
      {
        id: 'itemsDark',
        img: 'LUKER-CACAO-PALENQUE70.png',
        title: 'Dark Chocolate',
        items: [
          {
            id: 1,
            img: 'LUKER-CACAO-VALLE50.png',
            description: ['VALLE 50%'],
            selected: false
          },
          {
            id: 2,
            img: 'p-sombra-54.png',
            description: ['SOMBRA 54%'],
            selected: false
          },
          {
            id: 3,
            img: 'luker-cumbre-58.png',
            description: ['CUMBRE 58%'],
            selected: false
          },
          {
            id: 4,
            img: 'LUKER-CACAO-MACONDO-60.png',
            description: ['MACONDO 60%'],
            selected: false
          },
          {
            id: 5,
            img: 'LUKER-CACAO-MARANTA 61.png',
            description: ['MARANTA 61%'],
            selected: false
          },
          {
            id: 6,
            img: 'LUKER-CACAO-PALENQUE70.png',
            description: ['PALENQUE 70%'],
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
          img: 'white-glaciar.png',
          description: ['GLACIAR 35%', 'MILK 18%'],
          selected: false
        },
        {
          id: 2,
          img: 'white-nevado.png',
          description: ['NEVADO 35%', 'MILK 24%'],
          selected: false
        },
        {
          id: 3,
          img: 'white-sierra.png',
          description: ['SIERRA 45%', 'MILK 16%'],
          selected: false
        }
        ]
      }],
      itemsSelected: [],
      itemsShowed: [],
    };
    this.handleSetProductSelected = this.handleSetProductSelected.bind(this);
    this.handleShowFormContact = this.handleShowFormContact.bind(this)
  }

  componentDidMount() {
    this.changeItems(this.state.itemsHeader[1].items, this.state.itemsHeader[1].id);
  }
  handleShowFormContact(action) {
    this.setState({ hideFormContact: !action })
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

  handleSetProductSelected(value) {
    this.selectProduct(value);
  }

  render() {
    const { data } = this.props;
    const { itemsSelected, itemsShowed, itemsHeader, hideFormContact } = this.state;
    const altImg = 'img-example.svg';
    return (
      <div className={`cacao-component ${hideFormContact && 'cacao-component--hide-form'} `}>
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
          <p className="cacao-component--content-specifications">Available in: 2,5 bag or 20kg box<br /> Shelf life: Dark 24 months, Milk 18 months & White 14 months.</p>
        </div>
        <div className="cacao-component-tabs">
          <button className={`cacao-component-tabs-btn-next`} disabled={itemsSelected.length <= 0} onClick={() => this.handleShowFormContact(true)}>{(itemsSelected.length <= 0) ? 'Choose your favorite products' : 'Next'}</button>
          <div className="cacao-component-tabs-header">
            {Object.keys(itemsHeader).map(i =>
              <div key={i} onClick={() => this.changeItems(itemsHeader[i].items, itemsHeader[i].id)}>{itemsHeader[i].title}</div>
            )}
          </div>
          <div className="cacao-component-tabs-products">
            {
              Object.keys(itemsShowed).map(i =>
                <div key={i} className={`cacao-component-tabs-products-item cacao-component-tabs-products-item-${itemsShowed[i].selected && 'active'}`} onClick={() => this.selectProduct(itemsShowed[i])}>
                  <img src={require('../../../../assets/img/' + (itemsShowed[i].img ? itemsShowed[i].img : altImg))} alt={itemsShowed[i].description[0]} />
                  <span>i</span>
                  <h2>CASALUKER CACAO</h2>
                  <p>{itemsShowed[i].description[0]}</p>
                  <p>{itemsShowed[i].description[1]}</p>
                </div>)}
          </div>
        </div>
        <WrappedContactSide page='cacao' products={itemsSelected} handleSetProductSelected={this.handleSetProductSelected} handleShowFormContact={this.handleShowFormContact} />
      </div>
    );
  }
};
export default IngredientCacao;