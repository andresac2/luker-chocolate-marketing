import React from 'react'
import { FiChevronDown } from 'react-icons/fi'
import { withNamespaces } from 'react-i18next';

class OurFlavour extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openedItem: '0',
      items: [{
        title: 'RELATIONSHIP WITH SMALL FARMERS',
        content: 'At Luker Chocolate, we believe that support for small farmers is essential for our business model. As such, we have consolidated commercial partnerships with over 50 farmers associations, benefiting more than 7,500 Colombian families, thanks to a direct purchase model in which we are committed to pay a fair price and pay a deposit to ensure the purchase of the entire harvest. To add to this, at Granja Luker, we offer technical advice for crop improvement, training in improved agricultural practices, and we offer farmers the opportunity to update their crops with high quality Fino de Aroma varieties. This allows us better quality control in products and supply, guaranteeing our customers the availability of each of our Fino de Aroma chocolates.',
        img: 'our-flavour-1.jpg'
      },
      {
        title: 'VERTICAL INTEGRATION, OWN CROPS, AND TRACEABILITY',
        content: 'In 2010, Luker Chocolate opted to grow its own crops to help the company satisfy its own Cacao Fino de Aroma needs. Without abandoning the relationships established with cocoa associations all over the country, the company set out to promote demonstrative agro industrial projects that would boost large-scale cocoa plantations to drive rural development. In the same year, the company found 550 hectares of land traditionally used for cattle farming in Necoclí, Antioquia. It turned this land into its first agro industrial plantation and the largest agro-productive plantation of varieties of Cacao Fino de Aroma, designed as an agroforestry system (simultaneous and continuous integration of fruit trees and timber-yielding varieties with agricultural crops, which allow greater yields and avoid soil erosion and loss of biodiversity). This project has allowed us to integrate the entire cocoa value chain, from the seed, to the final product, creating greater social and environmental well being in the territories in which we work. Thanks to this, we can control all cocoa processes, especially postharvest. This is how we can guarantee sustainability, transparency, supply, traceability, a superior flavour, and consistency in our products.',
        img: 'cacaoOpen.jpg'
      },
      {
        title: 'QUALITY PROCESS',
        content: 'At Luker Chocolate, we continuously improve our analysis and quality control processes so that we can keep our promise of delivering a chocolate of unique and superior flavour, ensuring a sensory profile that is maintained over time. Our control process starts at our different points of purchase in the producing regions. Every purchased cocoa bean is analysed in terms of its fermentation level, humidity, and impurities. The beans are then taken to the cocoa storehouse in Bogotá, where the process is repeated. Cocoa liquor is produced in the cocoa laboratory, which we then use to validate the sensory profile of each batch of cocoa purchased and ratify that it actually matches the origin from which it has been purchased. During the chocolate manufacturing process, a third quality analysis is carried out by our quality panel. Two sensory quality panel sessions a day are held, where 15 highly qualified panellists analyse every batch of chocolate that is being manufactured. To guarantee flavour standardization, the roasting and preparation processes are 100% automated.',
        img: 'our-flavour-3.jpg'
      }]
    };
  }

  toggleItem(i) {
    (i === this.state.openedItem) ? this.setState({ openedItem: 99 }) : this.setState({ openedItem: i });
  }

  render() {
    const { items, openedItem } = this.state;
    const { t} = this.props;
    const altImg = 'img-example.svg';

    return (
      <div className="our-flavour-component" >
        <h1>{t('value-propose.flavour-title')}</h1>
        <div className="our-flavour-component-cards">
          {Object.keys(items).map(i =>
            <div key={i} className={`our-flavour-component-card our-flavour-component-card--${openedItem !== 99 && 'open'} our-flavour-component-card--${openedItem === i && 'opened'}`}>
              {openedItem !== i && <img src={require('../../../assets/img/' + (items[i].img ? items[i].img : altImg))} alt={items[i].title} key={i} />}
              {(openedItem !== i) ?
                <div className={`our-flavour-component-card--header`}>
                  <p>{items[i].title}</p>
                </div> :
                <div className={`our-flavour-component-card--data`}>
                  <div className="our-flavour-component-card--data-text">
                    <h2>{items[i].title}</h2>
                    <div className="our-flavour-component-card--data-text-content">
                      <p>{items[i].content}</p>
                    </div>
                  </div>
                  <div className="our-flavour-component-card--data-img">
                    <img src={require('../../../assets/img/' + (items[i].img ? items[i].img : altImg))} alt={items[i].title} key={i} />
                  </div>
                </div>
              }
              <FiChevronDown onClick={() => this.toggleItem(i)} className="value-svg" />
            </div>
          )}
        </div>
      </div >
    )
  }
}
export default withNamespaces()(OurFlavour);