import React from 'react'
import logo from '../../assets/img/LukerlogoDark.svg'
import altImg from '../../assets/img/img-example.svg'

const RydArticle = props => {
  const { title, subtitle, content, img } = props;

  return (
    <div className="ryd-article" >
      <div className="btn-dist">
        <img src={logo} className="logo" alt="Logo Luker" />
        <button onClick={() => console.log('hi')}> DISTRIBUIDORES </button>
      </div>
      <div className="ryd-article--text">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{content}</p>
      </div>
      <div className="ryd-article--img">
        <img src={img ? img : altImg} alt={title} />
      </div>
    </div >
  )
}

export default RydArticle;