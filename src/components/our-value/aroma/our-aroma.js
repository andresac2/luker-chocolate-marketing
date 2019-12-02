import React from 'react'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'

class OurAroma extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 0,
      items: ['ONLY ABOUT 8% OF THE WORLD’S COCOA IS CONSIDERED CACAO FINO DE AROMA', '76% of Cacao Fino de Aroma is produces in Colombia, Ecuador, Peru, and Venezuela.']
    };
  }
  carrAction(direction) {
    let n = 0;
    if (direction === 'l' && this.state.selectedItem !== 0) {
      n = -1;
    }
    if (direction === 'r' && this.state.selectedItem !== this.state.selectedItem.length - 1) {
      n = 1;
    }
    this.setState({ selectedItem: this.state.selectedItem + n });
  };
  render() {
    const { items, selectedItem } = this.state;
    return (
      <div className="our-aroma-component" >
        <h1>WHAT DOES CACAO FINO DE AROMA MEAN?</h1>
        <p>The denomination fine or flavour cocoa or Cacao Fino de Aroma is a classification of the International Cocoa Organization (ICCO) that describes our cocoa as unique in the world for its exquisite fruity and flowery aromas and flavour with nutty malt notes. Our cocoa of origin will guarantee that your products are top quality and differentiated from other chocolates on the market.</p>
        <div className="our-aroma-component--separator">
          <FiChevronLeft className={`our-aroma-component--separator-btn ${selectedItem === 0 && 'btn-inactive'}`} onClick={() => this.carrAction('l')} />
          <FiChevronRight className={`our-aroma-component--separator-btn our-aroma-component--separator-btn--right ${selectedItem === items.length - 1 && 'btn-inactive'}`} onClick={() => this.carrAction('r')} />
          <h2>
            {items[selectedItem]}
          </h2>
        </div>
        <p>Cacao Fino de Aroma comes from Criollo and Trinitarian varieties. Trinitarian cocoas –highly sought after around the world– are aromatic and mild in flavour. The Trinitario variety is a cross between the Criollo and Forastero. Forastero cocoa is the most common in the world; it is resistant to climate changes and has an acidic astringent flavour. It is the main variety grown in Africa.<br />The special scent and flavour of cocoa do not only stem from the type of cocoa –Forastero, Trinitarian or Criollo– but also from soil composition, climatic conditions, and primarily, the work of the cocoa artisan– the cocoa grower. <br />The four fundamental factors that ensure the special chocolate scent and flavour are fermentation, drying, roasting, and conching. Fermentation and drying are undertaken by farmers on the farms; and –the final touch that defines the organoleptic profile of each product– roasting and conching take place in the production plant.</p>
      </div >
    )
  }
}

export default OurAroma;