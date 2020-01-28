import React from 'react'
import item2 from '../../../assets/img/cut-cacao.jpg'
import item3 from '../../../assets/img/cacao-store.jpg'
import item4 from '../../../assets/img/secado-2.jpg'
import { withNamespaces } from 'react-i18next';

const OurSocial = (props) => {
  const { t } = props;

  const item2 = '/static/media/cut-cacao.5c8243b0.jpg'
  const item3 = '/static/media/cacao-store.f951491e.jpg'
  const item4 = '/static/media/secado-2.7430d41c.jpg'

  return (
    <div className="our-social-component" >
      <h1>{t('value-propose.social-title')}</h1>
      <p className="p-border">{t('value-propose.social-text')}</p>
      <div className="our-social-component-cards">
        <div className="our-social-component-card our-social-component-cards-achieve">
          {t('value-propose.achieve-this')}
        </div>
        <div className="our-social-component-card">
          <img src={item2} className="logo" alt="Logo Luker" />
          <div className="our-social-component-card-cover"><p>{t('value-propose.aligning-sdgs')}</p></div>
        </div>
        <div className="our-social-component-card">
          <img src={item3} className="logo" alt="Logo Luker" />
          <div className="our-social-component-card-cover"><p>{t('value-propose.implementation-social-responsabilities')}</p></div>
        </div>
        <div className="our-social-component-card">
          <img src={item4} className="logo" alt="Logo Luker" />
          <div className="our-social-component-card-cover"><p>{t('value-propose.construction-brand')}</p></div>
        </div>
      </div>
    </div >
  )
}
export default withNamespaces()(OurSocial);