import React from 'react'
import WrappedContactSide from '../../../layout/contact-side/contact-side';
import Modals from '../../../modals/modals';
import { withNamespaces } from 'react-i18next';

class IngredientCacao extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideFormContact: true,
      openProducts: false,
      infoProductsVisible: false,
      productSelected: [],
      itemsHeader: [{
        id: 'itemsMilk',
        img: 'LUKER-CACAO-HELICONIA-41.png',
        title: 'Milk Chocolate',
        items: [{
          id: 1,
          img: 'milk-atlantico-33.png',
          description: 'ATLÁNTICO',
          cocoaContent: '33.5%',
          milkContent: '28%',
          viscosity: 3,
          fluid: 5,
          viscous: 1,
          data: [{
            key: 1,
            enrobing: false,
            decorativeFigures: true,
            moulding: true,
            fillingsGanaches: true,
            decorating: true,
            desserts: true
          }],
          selected: false
        },
        {
          id: 2,
          img: 'milk-mulata-37.png',
          description: 'MULATA SUGAR FREE',
          cocoaContent: '37%',
          milkContent: '23%',
          viscosity: 3,
          fluid: 5,
          viscous: 1,
          data: [{
            key: 1,
            enrobing: true,
            decorativeFigures: true,
            moulding: true,
            fillingsGanaches: true,
            decorating: true,
            desserts: true
          }],
          selected: false
        },
        {
          id: 3,
          img: 'milk-clarodeluna-37.png',
          description: 'CLARO DE LUNA',
          cocoaContent: '37%',
          milkContent: '10%',
          viscosity: 3,
          fluid: 5,
          viscous: 1,
          data: [{
            key: 1,
            enrobing: false,
            decorativeFigures: true,
            moulding: true,
            fillingsGanaches: true,
            decorating: true,
            desserts: true
          }],
          selected: false
        },
        {
          id: 4,
          img: 'milk-noche-40.png',
          description: 'NOCHE',
          cocoaContent: '40%',
          milkContent: '13%',
          viscosity: 4,
          fluid: 5,
          viscous: 1,
          data: [{
            key: 1,
            enrobing: true,
            decorativeFigures: true,
            moulding: true,
            fillingsGanaches: true,
            decorating: true,
            desserts: true
          }],
          selected: false
        },
        {
          id: 5,
          img: 'milk-heliconia-41.png',
          description: 'HELICONIA',
          cocoaContent: '41%',
          milkContent: '19%',
          viscosity: 4,
          fluid: 5,
          viscous: 1,
          data: [{
            key: 1,
            enrobing: true,
            decorativeFigures: true,
            moulding: true,
            fillingsGanaches: true,
            decorating: true,
            desserts: true
          }],
          selected: false
        },
        {
          id: 6,
          img: 'milk-caribe-45.png',
          description: 'CARIBE',
          cocoaContent: '45%',
          milkContent: '20%',
          viscosity: 4,
          fluid: 5,
          viscous: 1,
          data: [{
            key: 1,
            enrobing: true,
            decorativeFigures: true,
            moulding: true,
            fillingsGanaches: true,
            decorating: true,
            desserts: true
          }],
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
            description: 'VALLE',
            cocoaContent: '50%',
            viscosity: 3,
            fluid: 5,
            viscous: 1,
            data: [{
              key: 1,
              enrobing: true,
              decorativeFigures: true,
              moulding: true,
              fillingsGanaches: true,
              decorating: true,
              desserts: true
            }],
            selected: false
          },
          {
            id: 2,
            img: 'p-sombra-54.png',
            description: 'SOMBRA',
            cocoaContent: '54%',
            viscosity: 3,
            fluid: 5,
            viscous: 1,
            data: [{
              key: 1,
              enrobing: true,
              decorativeFigures: true,
              moulding: true,
              fillingsGanaches: true,
              decorating: true,
              desserts: true
            }],
            selected: false
          },
          {
            id: 3,
            img: 'luker-cumbre-58.png',
            description: 'CUMBRE',
            cocoaContent: '58%',
            viscosity: 3,
            fluid: 5,
            viscous: 1,
            data: [{
              key: 1,
              enrobing: false,
              decorativeFigures: true,
              moulding: true,
              fillingsGanaches: true,
              decorating: true,
              desserts: true
            }],
            selected: false
          },
          {
            id: 4,
            img: 'LUKER-CACAO-MACONDO-60.png',
            description: 'MACONDO',
            cocoaContent: '60%',
            viscosity: 3,
            fluid: 5,
            viscous: 1,
            data: [{
              key: 1,
              enrobing: false,
              decorativeFigures: true,
              moulding: true,
              fillingsGanaches: true,
              decorating: true,
              desserts: true
            }],
            selected: false
          },
          {
            id: 5,
            img: 'LUKER-CACAO-MARANTA 61.png',
            description: 'MARANTA',
            cocoaContent: '61%',
            viscosity: 4,
            fluid: 5,
            viscous: 1,
            data: [{
              key: 1,
              enrobing: true,
              decorativeFigures: false,
              moulding: true,
              fillingsGanaches: false,
              decorating: true,
              desserts: true
            }],
            selected: false
          },
          {
            id: 6,
            img: 'LUKER-CACAO-PALENQUE70.png',
            description: 'PALENQUE',
            cocoaContent: '70%',
            viscosity: 4,
            fluid: 5,
            viscous: 1,
            data: [{
              key: 1,
              enrobing: true,
              decorativeFigures: false,
              moulding: true,
              fillingsGanaches: true,
              decorating: true,
              desserts: true
            }],
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
          description: 'GLACIAR',
          cocoaContent: '35%',
          milkContent: '18%',
          viscosity: 3,
          fluid: 5,
          viscous: 1,
          data: [{
            key: 1,
            enrobing: false,
            decorativeFigures: true,
            moulding: true,
            fillingsGanaches: true,
            decorating: true,
            desserts: true
          }],
          selected: false
        },
        {
          id: 2,
          img: 'white-nevado.png',
          description: 'NEVADO',
          cocoaContent: '35%',
          milkContent: '24%',
          viscosity: 3,
          fluid: 5,
          viscous: 1,
          data: [{
            key: 1,
            enrobing: true,
            decorativeFigures: true,
            moulding: true,
            fillingsGanaches: true,
            decorating: true,
            desserts: true
          }],
          selected: false
        },
        {
          id: 3,
          img: 'white-sierra.png',
          description: 'SIERRA',
          cocoaContent: '45%',
          milkContent: '16%',
          viscosity: 4,
          fluid: 5,
          viscous: 1,
          data: [{
            key: 1,
            enrobing: false,
            decorativeFigures: false,
            moulding: true,
            fillingsGanaches: false,
            decorating: true,
            desserts: false
          }],
          selected: false
        }
        ]
      }],
      itemsSelected: [],
      itemsShowed: [],
    };
    this.handleSetProductSelected = this.handleSetProductSelected.bind(this);
    this.handleShowFormContact = this.handleShowFormContact.bind(this)
    this.showModalDist = this.showModalDist.bind(this)
  }
  showModalDist = (product) => {
    this.setState({
      infoProductsVisible: !this.state.infoProductsVisible,
    });
    if (product) {
      console.log("prod: ", product);
      this.setState({
        productSelected: product,
      });
    }
  };
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
    const { data, t } = this.props;
    const { itemsSelected, itemsShowed, itemsHeader, hideFormContact, infoProductsVisible, productSelected } = this.state;
    const altImg = 'img-example.svg';
    return (
      <div className={`cacao-component ${hideFormContact && 'cacao-component--hide-form'} `}>
        <div className="cacao-component--header">
          <h1>{t('products-services.the-best')}</h1>
          <h1>{t('products-services.ingredients')}</h1>
          <div className="cacao-component--header-img">
            {Object.keys(itemsHeader).map(i =>
              <img src={require('../../../../assets/img/' + (itemsHeader[i].img ? itemsHeader[i].img : altImg))} alt={itemsHeader[i].title} key={i} />
            )}
          </div>
        </div>
        <div className="cacao-component--content">
          <p>{data.description}</p>
          <p className="cacao-component--content-specifications">{t('products-services.available-in')} {t('products-services.bag-box-cacao')}<br /> {t('products-services.shelf-life-cacao')}</p>
        </div>
        <div className="cacao-component-tabs">
          <button className={`cacao-component-tabs-btn-next`} disabled={itemsSelected.length <= 0} onClick={() => this.handleShowFormContact(true)}>{(itemsSelected.length <= 0) ? t('buttons.choose-product') : t('buttons.next')}</button>
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
                  <span onClick={() => this.showModalDist(itemsShowed[i])}>i</span>
                  <h2>{t('products-services.casaluker-cacao')}</h2>
                  <p>{itemsShowed[i].description} {itemsShowed[i].cocoaContent}</p>
                  {itemsShowed[i].milkContent && <p>{t('products-services.milk')} {itemsShowed[i].milkContent}</p>}
                </div>)}
          </div>
        </div>
        <Modals visible={infoProductsVisible} modal={'info-product'} showModalDist={this.showModalDist} product={productSelected} title={t('products-services.the-best').toUpperCase() + ' ' + t('products-services.ingredients').toUpperCase()} subtitle={itemsHeader[1].title.toUpperCase()} contentTitle={t('products-services.casaluker-cacao')} />
        <WrappedContactSide page='cacao' products={itemsSelected} handleSetProductSelected={this.handleSetProductSelected} handleShowFormContact={this.handleShowFormContact} />
      </div>
    );
  }
};
export default withNamespaces()(IngredientCacao);