import React from 'react'
import logo from '../../assets/img/LukerlogoDark.svg'
import { Link } from 'react-router-dom';
import i18n from '../../i18n';

const RydArticle = props => {
  const { title, subtitle, content, img, backRyd } = props;
  const altImg = 'img-example.svg';

  return (
    <div className="ryd-article" >
      {console.log(i18n.language)}
      <div className="btn-dist">
        <Link to="/" className="logo"> <img src="/static/media/LukerlogoDark.dd2dafc7.svg" alt="Logo Luker" /></Link>
        <button onClick={backRyd}>{i18n.language === 'en' ? 'Back to Ideas & trends' : 'Volver a Ideas y tendencias'}</button>
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