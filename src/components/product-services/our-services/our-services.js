import React from 'react'
import ContactSide from '../../layout/contact-side/contact-side';
import { ReactComponent as Back } from "../../../assets/img/back.svg"
import { Link } from 'react-router-dom';

class OurServices extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dpSelected: 0,
      designProcess: ['ANALYSING THE MAIN TRENDS OF THE GLOBAL CHOCOLATE MARKET', 'UNDERSTANDING THE TARGET CONSUMER', 'PRODUCT BENCHMARKING WITHIN THE TARGET CATEGORY', 'CREATING PROTOTYPE PRODUCT PROPOSALS ACCORDING TO OUR FINDINGS AND GUIDANCE UNTIL WE DEFINE THE FINAL PRODUCT', 'CONCEPTUALIZATION OF THE END PRODUCT']
    }
  }

  carrAction(direction) {
    let n = 0;
    if (direction === 'l' && this.state.dpSelected !== 0) {
      n = -1;
    }
    if (direction === 'r' && this.state.dpSelected !== this.state.designProcess.length - 1) {
      n = 1;
    }
    this.setState({ dpSelected: this.state.dpSelected + n });
  };

  render() {

    const altImg = 'img-example.svg';
    const { dpSelected, designProcess } = this.state;
    const items = [{
      img: 'our-product-2.png',
      title: 'FORMULATION',
    },
    {
      img: 'product-cover.png',
      title: 'PACKAGING DESIGN',
    },
    {
      img: 'productoCar.png',
      title: 'MANUFACTURING',
    }];

    return (
      <div className="our-services-component" >
        <h2>This is how it Works</h2>
        <div className="our-services-component-process">
          {Object.keys(items).map(i =>
            <div key={i} className={`card-image`}>
              <img src={require('../../../assets/img/' + (items[i].img ? items[i].img : altImg))} alt={items[i].title} />
              <p>{items[i].title}</p>
            </div>)}
        </div>
        <div className="our-services-component--header">
          <h1>FULL INNOVATION AND DESIGN</h1>
          <h1>PROCESS CONSULTANCY PACK</h1>
          <p>We can guide you in your product innovation <br /> and design process by:</p>
        </div>
        <div className="our-services-component-contain-carr">
          <Back className={`btn-next-img btn-next-img-left ${dpSelected === 0 && 'btn-inactive'}`} onClick={() => this.carrAction('l')} />
          <div className="our-services-component-contain-carr--items" >
            <p>{designProcess[dpSelected]}</p>
          </div>
          <Back className={`btn-next-img ${dpSelected === designProcess.length - 1 && 'btn-inactive'}`} onClick={() => this.carrAction('r')} />
        </div>
        <div className="btn-back-sticky">
          <Link to="/solution">BACK TO SOLUTIONS</Link>
        </div>
        <ContactSide page='service' products={[]} />
      </div >
    );
  }
};


export default OurServices;