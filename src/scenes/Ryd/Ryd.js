import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import RydArticle from '../../components/ryd-article/ryd-article';
import FloatLogo from '../../components/layout/float-logo/float-logo';

class Ryd extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectTab: ''
    };
  }

  tabToggle(tab) {
    (tab === this.state.selectTab) ? this.setState({ selectTab: '' }) : this.setState({ selectTab: tab });
  }

  render() {
    const { selectTab } = this.state;

    return (
      <div className="ryd-component">
        {!selectTab &&
          <FloatLogo btnText='dist' />}
        <div className={`ryd-tab ryd-tab--${selectTab}`}>
          <div onClick={() => this.tabToggle('experience')} className={`ryd-tab-item ryd-tab-item--experience ryd-tab-item--${selectTab === 'experience' && 'active'} ryd-tab-item--${selectTab !== '' && 'resp-hide'} `}><span>EXPERIENCE MORE</span>
            {selectTab === 'experience' && <RydArticle title="EXPERIENCE MORE" subtitle="A SENSORIAL TASTING EXPERIENCE" img="can-tin-pack.png" content="<p>We are seeking to build unique value-added experiences for chocolate lovers, excited to discover new ways to live. They are people looking for authentic ways to maximize the positive impact on communities and their lifestyle especially if these products are personalized and suits their individual tastes.</p> <p>In this edition, we have decided to create a product that will not only allow our chocolate lovers to immerse themselves in a multi-sensory experience of cacao origins, but that will give them the chance to learn the traditional secrets of “cooking” in these pots by using three different chocolates from amazing regions. This chocolate tasting set is developed as the ultimate sharing experience to enjoy at home with friends and stimulate the senses through the interaction with unique tastes, aromas, and textures right from the origin.</p>" />}
          </div>
          <div onClick={() => this.tabToggle('ethical')} className={`ryd-tab-item ryd-tab-item--ethical ryd-tab-item--${selectTab === 'ethical' && 'active'} ryd-tab-item--${selectTab !== '' && 'resp-hide'} `}><span>ETHICAL LIVING</span>
            {selectTab === 'ethical' && <RydArticle title="ETHICAL LIVING" subtitle="PURPOSE DRIVEN CHOCOLATE NIBS" img="chocolate-nibs.png" content="<p>As millennials are increasingly willing to contribute to the greater good through consumption, they are willing to follow brands that respect their suppliers, and that help the communities and the environment. These empowered consumers demand transparency from the brands throughout the supply chain. As such, we have embraced the fact that our ethical approach will exceed the concern for supervising our supplier’s actions.</p> <p>We have created a long-term vision in which our goal is to build a world around chocolate in which people help each other, success is measured by smiles, and dreams are made to come true. We decided to call this vision: THE CHOCOLATE DREAM.</p><p>We humanize the chain with the understanding that we work with farmers and not with farms; we produce chocolate with people, not with machines; and we understand that our clients are passionate entrepreneurs, not logos or factories. This in-depth perspective has opened up the opportunity to contribute to improving the conditions of the farmers we work with and the associations they belong to. As part of this, we have launched the first chocolate Nibs produced in HUILA, which, located in the Colombian massif and surrounded by the Magdalena River, produces one of the best Fino de Aroma Cocoas in the world.</p><p> To pay the farmers back for their hard work, we launched FARMERS OF HUILA chocolate nibs which contributes 5% of the product’s sale price to improve the conditions of the farmers involved with the region’s cocoa growers association. As a final note on the region, Huila has been our key partner –for many years- n bringing the best purpose driven chocolates to the world.</p>" />}
          </div>
          <div onClick={() => this.tabToggle('premium')} className={`ryd-tab-item ryd-tab-item--premium ryd-tab-item--${selectTab === 'premium' && 'active'} ryd-tab-item--${selectTab !== '' && 'resp-hide'} `}><span>PREMIUMIZATION</span>
            {selectTab === 'premium' && <RydArticle title="PREMIUMIZATION" subtitle="NATIVE CHOCOLATES" img="premiumization.png" content="<p>Luker Chocolate’s single origin products are manufactured using high-quality ingredients grown in exotic origins, which combine a tropical climate, the warmth of our farmers, and an enriching and inspiring cultural history. Our 85% and 53% NATIVE CHOCOLATE DRAGEES express a different approach to developing a product that by far exceeds the definition of single origin. We have brought together the unique floral and fruity notes of Fino de Aroma Cacaos of the Urabá region and by immersing ourselves in their culture, we have discovered a treasure in indigenous communities.</p><p>Their use of graphic expressions for spiritual and physical protection is a means of cultural language whereby they represent the meaning of nature and their thoughts in labyrinthic shapes. This deep local and cultural understanding inspired us to launch NATIVE CHOCOLATES, whose high quality and exotic ingredients combined with a packaging that expresses the community’s beliefs, place them in a high-end premium category.</p>" />}
          </div>
          <div onClick={() => this.tabToggle('healthy')} className={`ryd-tab-item ryd-tab-item--healthy ryd-tab-item--${selectTab === 'healthy' && 'active'} ryd-tab-item--${selectTab !== '' && 'resp-hide'} `}><span>HEALTHY LIVING</span>
            {selectTab === 'healthy' && <RydArticle title="HEALTHY LIVING" subtitle="DAILY WELLNESS CHOCOLATES" img="grageashighfiber.png" content="<p>As young adults are living highly demanding daily routines that allow them very little spare time to spend on their health, they have started looking for functional alternatives that prevent aging processes in a natural but effective manner. This is why we have developed our DAILY WELLNESS CHOCOLATES to support those seeking to find options for a healthy lifestyle.</p><p> Our chocolate covered dragees combine the natural benefits of super foods such as cranberry, quinoa, and cacao with our latest development of unique ingredients that will revolutionize the market of functional products. Through a unique production method, in the process of being patented, Luker Chocolate gives birth to VITALCAO. A new range of chocolates with functional characteristics.</p><p>In this edition, we have designed a high antioxidant daily healthy snack with a HIGH content of flavanols, flavonoids, and polyphenols.</p><p>They are packaged in 200 g ready to go resealable bag, just perfect for consumption on the go or to keep close at the office. This, along with its clean image and bright colours, complement the perception of functional wellness products that not only contribute to people’s health commitments, but that also understand their hectic daily routines.</p>" />}
          </div>
        </div>
      </div>
    );
  }
}

export default Ryd;