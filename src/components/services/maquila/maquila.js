import React from 'react'
import logo from '../../../assets/img/LukerlogoDark.svg'
import altImg from '../../../assets/img/img-example.svg'
import back from '../../../assets/img/back.svg'

class Maquila extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: ['luker-huila.png', 'luker-colombia.png', 'luker-santander.png']
    };
  }

  itemToggle(tab) {
    (tab === this.state.selectTab) ? this.setState({ selectTab: '' }) : this.setState({ selectTab: tab });
  }

  reorderItems(items, moveFromIndex, moveToIndex) {

    const movingItem = items[moveFromIndex];
    items.splice(moveFromIndex, 1);
    items.splice(moveToIndex, 0, movingItem);
    this.setState({ images: items });
  }
  render() {
    const { images } = this.state;
    const { subtitle, content, img } = this.props;

    return (
      <div className="maquila-component" >
        <img className="btn-next-img" src={back} alt='left' onClick={() => this.reorderItems(images, 0, 2)} />
        {
          this.state.images.map((img, i) => <img key={i} className={`carr-item carr-item--${i === 1 && 'active'}`} src={require('../../../assets/img/' + (img ? img : altImg))} alt='jaja' />)
        }
        <img className="btn-next-img btn-next-img--right " src={back} alt='right' onClick={() => this.reorderItems(images, 2, 0)} />
      </div >
    );
  }
};


export default Maquila;