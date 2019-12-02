import React from 'react'
import item2 from '../../../assets/img/cut-cacao.png'
import item3 from '../../../assets/img/cacao-store.png'
import item4 from '../../../assets/img/secado-2.png'

const OurSocial = () => {

  return (
    <div className="our-social-component" >
      <h1>WE BELIEVE IN BUSINESSES AS A FORCE OF GOOD</h1>
      <p className="p-border">We serve entrepreneurs and business owners who want to have a positive impact on the world through their businesses. Now more than ever, consumers are looking for sustainable products committed to a cause. All of our initiatives aimed at improving the lives of farmers and communities in the cocoa regions where we work, support our customers’ brands and products. This provides them with a seal of confidence that their final product is sustainable, made by hard-working hand, and with a dream to make their dreams come true.</p>
      <div className="our-social-component-cards">
        <div className="our-social-component-card our-social-component-cards-achieve">
          WHAT DO WE ACHIEVE WITH THIS?
        </div>
        <div className="our-social-component-card">
          <img src={item2} className="logo" alt="Logo Luker" />
          <div className="our-social-component-card-cover"><p>ALIGNING YOUR BUSINESS WITH THE SDG’S</p></div>
        </div>
        <div className="our-social-component-card">
          <img src={item3} className="logo" alt="Logo Luker" />
          <div className="our-social-component-card-cover"><p>IMPLEMENTATION OF CORPORATE SOCIAL RESPONSIBILITY INITIATIVES</p></div>
        </div>
        <div className="our-social-component-card">
          <img src={item4} className="logo" alt="Logo Luker" />
          <div className="our-social-component-card-cover"><p>CONSTRUCTION OF BRAND EQUITY BASED ON PARTICIPATION IN SHARED VALUE INITIATIVES</p></div>
        </div>
      </div>
    </div >
  )
}

export default OurSocial;