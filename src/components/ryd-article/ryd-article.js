import React from 'react'
import logo from '../../assets/img/LukerlogoDark.svg'
import { Link } from 'react-router-dom';

const RydArticle = props => {
  const { title, subtitle, content, img } = props;
  const altImg = 'img-example.svg';

  return (
    <div className="ryd-article" >
      <div className="btn-dist">
        <Link to="/" className="logo"> <img src={logo} alt="Logo Luker" /></Link>
        <button onClick={() => console.log('hi')}> FIND A DISTRIBUTOR </button>
      </div>
      <div className="ryd-article--text">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <div className="ryd-article--text-content">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
      <div className="ryd-article--img">
        <img src={require('../../assets/img/' + (img ? img : altImg))} alt={title} />
      </div>
    </div >
  )
}

export default RydArticle;