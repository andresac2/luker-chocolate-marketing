import React from 'react';
import item1 from '../../../assets/img/stand-itemh.png'
import item2 from '../../../assets/img/abaste-cover.png'
import item3 from '../../../assets/img/stand-item1.png'
import item4 from '../../../assets/img/stand-item2.png'
import item5 from '../../../assets/img/stand-item3.png'
import item6 from '../../../assets/img/brick-luker.png'
import item7 from '../../../assets/img/vista-finca.png'

function TakeStand() {
  return (
    <div className="take-stand">
      <div className="blog-layout-latest">
        <h1>FEATURED POST</h1>
        <div className="blog-layout-latest--article">
          <img src={item1} alt="cacao" />
          <p>PUBLICATION DETAILS</p>
          <h2>Lorem Ipsum</h2>
        </div>
      </div>
      <div className="blog-layout-articles">

        <div className="blog-layout-articles--item">
          <img src={item2} alt="cacao" />
          <p>PUBLICATION DETAILS</p>
          <h2>Lorem Ipsum</h2>
        </div>
        <div className="blog-layout-articles--item">
          <img src={item3} alt="cacao" />
          <p>PUBLICATION DETAILS</p>
          <h2>Lorem Ipsum</h2>
        </div>
        <div className="blog-layout-articles--item">
          <img src={item4} alt="cacao" />
          <p>PUBLICATION DETAILS</p>
          <h2>Lorem Ipsum</h2>
        </div>
        <div className="blog-layout-articles--item">
          <img src={item5} alt="cacao" />
          <p>PUBLICATION DETAILS</p>
          <h2>Lorem Ipsum</h2>
        </div>
        <div className="blog-layout-articles--item">
          <img src={item6} alt="cacao" />
          <p>PUBLICATION DETAILS</p>
          <h2>Lorem Ipsum</h2>
        </div>
        <div className="blog-layout-articles--item">
          <img src={item7} alt="cacao" />
          <p>PUBLICATION DETAILS</p>
          <h2>Lorem Ipsum</h2>
        </div>
      </div>
    </div>
  );
}

export default TakeStand;
