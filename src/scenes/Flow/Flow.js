import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import cacao1 from '../../assets/img/roto-b.png'
import cacao2 from '../../assets/img/roto-c.png'
import cacao3 from '../../assets/img/roto-a.png'

import FlowTabs from '../../components/flow-cacao/flow-tabs/flow-tabs'
import FloatLogo from '../../components/layout/float-logo/float-logo';
import HelmetComponent from '../../commons/helmet/helmet';
import { withNamespaces } from 'react-i18next';
import Helmet from 'react-helmet';

function Flow(props) {

  return (
    <div className="flow-component">

      <Helmet>
        <title>{props.t('chocolate-process.titulo_seo')}</title>
        <meta name="description" content={props.t('chocolate-process.meta_descripcion')} />
        <meta property="og:title" content={props.t('chocolate-process.titulo_protocolo_opengraph')} />
        <meta property="og:description" content={props.t('chocolate-process.descripcion_opengraph')} />
        <meta name="keywords" content={props.t('chocolate-process.keywords')} />
        <meta property="og:image" content={props.t('chocolate-process.imagen_open_graph.url')} />
        <meta property="og:url" content={window.location.href} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Luker Chocolate." />
        <meta name="twitter:image:alt" content={props.t('chocolate-process.descripcion_opengraph')} />
        <meta name="twitter:site" content="@Luker_Chocolate" />
        <meta property="twitter:image" content={props.t('chocolate-process.imagen_open_graph.url')} />
      </Helmet>

      <div className="flow-sidebar">
        <div className="cacao-link">
          <div className="cacao-link-content">
            <img src="/static/media/roto-a.ac0d2a9d.png" className="cacao-link-2" alt="Logo Luker" />
            <img src="/static/media/roto-b.57c38cbe.png" className="cacao-link-1" alt="Logo Luker" />
            <img src="/static/media/roto-c.73e83564.png" className="cacao-link-2" alt="Logo Luker" />
          </div>
        </div>
        <FloatLogo btnText='dist' />
      </div>
      <div className="flow-navbar"><FlowTabs tabActive="cacao" /></div>
    </div>
  );
}

export default withNamespaces()(Flow);