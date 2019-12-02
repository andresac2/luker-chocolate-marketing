import React from 'react'
import item1 from '../../../assets/img/our-product-1.png'
import item2 from '../../../assets/img/our-product-2.png'
import item3 from '../../../assets/img/our-product-3.png'
import item4 from '../../../assets/img/our-product-4.png'
class OurProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '0',
      items: [{
        title: 'PACKAGING',
        content: 'This team is responsible for developing the primary and secondary packaging ensuring that they suit the requirements of our customers and their products. They are always innovating bearing in mind safety as the most important element.',
        img: 'our-product-1.png'
      },
      {
        title: 'R&D',
        content: 'This department is responsible for our agricultural and scientific research to promote Colombian cocoa-culture, always researching the genetic and origin properties of the different varieties of Cacao Fino de Aroma found in the country. On the other hand, they design and develop the best chocolate formulas, satisfying the needs of our clients. They are pure in their maximum expression: they comply with the highest quality standards under our strategic company guidelines',
        img: 'our-product-2.png'
      },
      {
        title: 'MARKETING',
        content: 'The team that believes that doing things with passion makes a difference. They design and execute marketing strategies and research the latest market trends to help our clients standout from their competitors.',
        img: 'our-product-3.png'
      },
      {
        title: 'DESIGN HUB',
        content: 'They develop products for their target market with an approach to strategic planning based on local trends, highlighting the most important messages and creating emotional relationships between customers and your brand. Their goal: Sell while supplies last.',
        img: 'our-product-4.png'
      }]
    };
  }

  toggleItem(i) {
    (i === this.state.selectedItem) ? this.setState({ selectedItem: 0 }) : this.setState({ selectedItem: i });
  }

  render() {
    const { items, selectedItem } = this.state;
    const altImg = 'img-example.svg';

    return (
      <div className="our-product-component" >
        <h1>GET AN INTEGRATED PRODUCT, DESIGN, AND PACKAGING SOLUTION</h1>
        <p className="p-flavour p-flavour-border">We work with multidisciplinary teams that allow us to advise you throughout product development, from the idea to its manufacture. We invite you to meet the team that makes your dreams come true.</p>
        <div className="our-product-component-cards">
          {Object.keys(items).map(i =>
            <div key={i} className={`our-product-component-card our-product-component-card-${selectedItem === i && 'active'}`} onClick={() => this.toggleItem(i)}>
              <img src={require('../../../assets/img/' + (items[i].img ? items[i].img : altImg))} alt={items[i].title} />
              <div className="our-product-component-card-cover"><p>{items[i].title}</p></div>
            </div>
          )}
        </div>
        <p className="p-flavour">{items[selectedItem].content}</p>
      </div >
    )
  }
}

export default OurProduct;