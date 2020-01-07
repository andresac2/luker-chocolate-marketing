import React from 'react'
import altImg from '../../assets/img/img-example.svg'
import back from '../../assets/img/back.svg'

class ImgCarrousel extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      images: ['luker-huila.png', 'luker-colombia.png', 'luker-santander.png']
    };
  }
  reorderItems(items, moveFromIndex, moveToIndex) {

    const movingItem = items[moveFromIndex];
    items.splice(moveFromIndex, 1);
    items.splice(moveToIndex, 0, movingItem);
    this.setState({ images: items });
  }
  render() {
    const { images } = this.state;

    return (
      <div className="img-carrousel" >
        <img className="btn-next-img" src={back} alt='left' onClick={() => this.reorderItems(images, 0, 2)} />
        {
          this.state.images.map((img, i) => <img key={i} className={`carr-item carr-item--${i === 1 && 'active'}`} src={require('../../assets/img/' + (img ? img : altImg))} alt='jaja' />)
        }
        <img className="btn-next-img btn-next-img--right " src={back} alt='right' onClick={() => this.reorderItems(images, 2, 0)} />
      </div >
    );
  }
};


export default ImgCarrousel;