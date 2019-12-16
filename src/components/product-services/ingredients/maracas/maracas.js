import React from 'react'
import WrappedContactSide from '../../../layout/contact-side/contact-side';

class IngredientDragees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hideFormContact: true,
      items: [{
        id: 1,
        img: 'chocolate-ingredients/maracas/chocolate-covered-physalis.jpg',
        description: 'dark chocolate Covered Physalis',
        available: 'Available in: 1 kg bag or 20 kg box',
        content: 'This tropical fruit is covered in dark chocolate creating the ideal balance between the fruit’s acidic flavour and the chocolate’s fruit and floral notes. Ideal for decorating cakes and desserts or on its own as a snack',
        selected: false
      },
      {
        id: 2,
        img: 'chocolate-ingredients/maracas/chocolate-covered-espresso-beans.jpg',
        description: 'dark chocolate covered espresso beans',
        available: 'Available in: 1 kg bag or 15 kg box',
        content: 'The perfect combination. The best Colombian coffee beans, covered in generous layers of Fino de Aroma chocolate. Their shine and oval shape makes them different to other brands of chocolate-covered coffee beans. Ideal to go with coffee, as a snack, to include in your recipes or for decoration.',
        selected: false
      },
      {
        id: 3,
        img: 'chocolate-ingredients/maracas/chocolate-covered-nib-clusters.jpg',
        description: 'dark chocolate covered nibs clusters',
        available: 'Available in: 1 kg bag or 15 kg box',
        content: 'Small chunks of roasted Fino de Aroma cocoa covered in dark chocolate making for a delicious crunchy chocoaltey snack. Ideal as a snack and for including in recipes.',
        selected: false
      },
      {
        id: 4,
        img: 'chocolate-ingredients/maracas/chocolate-covered-instant-coffee.jpg',
        description: 'dark chocolate covered instant coffee',
        available: 'Available in: 1kg bag or 10 kg box',
        content: 'The explosive flavour of coffee produces the perfect balance in this dragee. This unique flavour will dieffrentiate your products and surprise whoever tries them. Ideal for decorating cakes, desserts and ice- cream.',
        selected: false
      },
      {
        id: 5,
        img: 'chocolate-ingredients/maracas/chocolate-covered-nibs.jpg',
        description: 'dark chocolate covered nibs',
        available: 'Available in: 1 kg bag or 10 kg box',
        content: 'Small chunks of the best Fino de Aroma cocoa, roasted and covered in dark chocolate. Ideal for decorating cakes and desserts or on its own as a snack.',
        selected: false
      }
      ]
    };
    this.handleSetProductSelected = this.handleSetProductSelected.bind(this);
    this.handleShowFormContact = this.handleShowFormContact.bind(this)
  }

  productToggle(id, selected) {
    this.setState({
      items: this.state.items.map(el => (el.id === id ? { ...el, selected } : el))
    });
  };

  handleSetProductSelected(value) {
    this.productToggle(value.id, false);
  }
  handleShowFormContact(action) {
    this.setState({ hideFormContact: !action })
  }

  render() {
    const { items, hideFormContact } = this.state;
    const altImg = 'img-example.svg';

    return (
      <div className={`dragees-component ${hideFormContact && 'dragees-component--hide-form'} `}>
        <div className="dragees-component--header">
          <h1>CHOCOLATE DRAGEES MADE</h1>
          <h1>WITH 100% CACAO FINO DE AROMA</h1>
        </div>
        <div className="dragees-component--content">
          <p>In the same way as that magical seductive instrument that characterises the happy upbeat feel of the tropics with its sweet and varied rhythm, CasaLuker Maracas presents a new range of chocolate-covered dragees. Filled with roasted coffee, roasted cocoa and sweet tropical fruits, these delightful dragees are covered in our finest Fino de Aroma chocolate.</p>
          <p>CasaLuker Maracas, Tropical Dragees are ideal for decorating desserts and cakes, to include in preparations, as toppings for ice-cream or simply to give that special touch to your recipes. They are also a good accompaniment for coffee and other hot drinks; they can be mixed in with cereals and dried fruit to prepare delicious, healthy snacks.</p>
        </div>
        <button className={`dragees-component--products-btn-next`} disabled={items.filter(item => item.selected).length <= 0} onClick={() => this.handleShowFormContact(true)}> Next</button>
        <div className="dragees-component--products">
          {Object.keys(items).map(i =>
            <div key={i} className={`dragees-component--products-item dragees-component--products-item-${items[i].selected && 'active'}`} onClick={() => this.productToggle(items[i].id, !items[i].selected)}>
              <div className="dragees-component--products-item-img">
                <div className="dragees-component--products-item-img-container">
                  <img src={require('../../../../assets/img/' + (items[i].img ? items[i].img : altImg))} alt={items[i].description} />
                </div>
              </div>
              <div className="dragees-component--products-item-data">
                <h2>{items[i].description}</h2>
                <p>{items[i].content}</p>
                <span>{items[i].available}</span>
              </div>
            </div>)}
        </div>
        <WrappedContactSide page='maracas' products={items} handleSetProductSelected={this.handleSetProductSelected} handleShowFormContact={this.handleShowFormContact} />
      </div>
    );
  }
};


export default IngredientDragees;