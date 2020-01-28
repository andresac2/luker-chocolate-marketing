import React from 'react';
import logo from '../../assets/img/Lukerlogo.svg'
import cacao1 from '../../assets/img/roto-b.png'
import cacao2 from '../../assets/img/roto-c.png'
import cacao3 from '../../assets/img/roto-a.png'

import FlowTabs from '../../components/flow-cacao/flow-tabs/flow-tabs'
import FloatLogo from '../../components/layout/float-logo/float-logo';
import HelmetComponent from '../../commons/helmet/helmet';
import { withNamespaces } from 'react-i18next';

function Flow(props) {

  return (
    <div className="flow-component">
      <HelmetComponent title={props.t('chocolate-process.titulo_seo')} keywords={props.t('chocolate-process.keywords')} titleOg={props.t('chocolate-process.titulo_protocolo_opengraph')} description={props.t('chocolate-process.meta_descripcion')} descriptionOg={props.t('chocolate-process.descripcion_opengraph')} />
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