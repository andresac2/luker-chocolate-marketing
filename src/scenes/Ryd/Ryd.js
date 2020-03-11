import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import RydArticle from '../../components/ryd-article/ryd-article';
import FloatLogo from '../../components/layout/float-logo/float-logo';
import HelmetComponent from '../../commons/helmet/helmet';
import { withNamespaces } from 'react-i18next';
import Helmet from 'react-helmet';

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
    const { t } = this.props;
    const { selectTab } = this.state;

    return (
      <div className="ryd-component">
        <Helmet>
          <title>{t('ryd.titulo_seo')}</title>
          <meta name="description" content={t('ryd.meta_descripcion')} />
          <meta property="og:title" content={t('ryd.titulo_protocolo_opengraph')} />
          <meta property="og:description" content={t('ryd.descripcion_opengraph')} />
          <meta name="keywords" content={t('ryd.keywords')} />
          <meta property="og:image" content={t('ryd.imagen_open_graph.url')} />
          <meta property="og:url" content={window.location.href} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:site_name" content="Luker Chocolate." />
          <meta name="twitter:image:alt" content={t('ryd.descripcion_opengraph')} />
          <meta name="twitter:site" content="@Luker_Chocolate" />
          <meta property="twitter:image" content={t('ryd.imagen_open_graph.url')} />
        </Helmet>

        {!selectTab &&
          <FloatLogo btnText='dist' />}
        <div className={`ryd-tab ryd-tab--${selectTab}`}>
          <div onClick={() => this.tabToggle('experience')} className={`ryd-tab-item ryd-tab-item--experience ryd-tab-item--${selectTab === 'experience' && 'active'} ryd-tab-item--${selectTab !== '' && 'resp-hide'} `}><span>{t('ryd.experience-title')}</span>
            {selectTab === 'experience' && <RydArticle title={t('ryd.experience-title')} subtitle={t('ryd.experience-subtitle')} img="premiumization-prod.png" content={t('ryd.experience-content')} />}
          </div>
          <div onClick={() => this.tabToggle('ethical')} className={`ryd-tab-item ryd-tab-item--ethical ryd-tab-item--${selectTab === 'ethical' && 'active'} ryd-tab-item--${selectTab !== '' && 'resp-hide'} `}><span>{t('ryd.ethical-title')}</span>
            {selectTab === 'ethical' && <RydArticle title={t('ryd.ethical-title')} subtitle={t('ryd.ethical-subtitle')} img="chocolate-nibs.png" content={t('ryd.ethical-content')} />}
          </div>
          <div onClick={() => this.tabToggle('premium')} className={`ryd-tab-item ryd-tab-item--premium ryd-tab-item--${selectTab === 'premium' && 'active'} ryd-tab-item--${selectTab !== '' && 'resp-hide'} `}><span>{t('ryd.premiumisation-title')}</span>
            {selectTab === 'premium' && <RydArticle title={t('ryd.premiumisation-title')} subtitle={t('ryd.premiumisation-subtitle')} img="experience-more-prod.png" content={t('ryd.premiumisation-content')} />}
          </div>
          <div onClick={() => this.tabToggle('healthy')} className={`ryd-tab-item ryd-tab-item--healthy ryd-tab-item--${selectTab === 'healthy' && 'active'} ryd-tab-item--${selectTab !== '' && 'resp-hide'} `}><span>{t('ryd.healthy-title')}</span>
            {selectTab === 'healthy' && <RydArticle title={t('ryd.healthy-title')} subtitle={t('ryd.healthy-subtitle')} img="healthy-living-prod.png" content={t('ryd.healthy-content')} />}
          </div>
        </div>
      </div>
    );
  }
}

export default withNamespaces()(Ryd);