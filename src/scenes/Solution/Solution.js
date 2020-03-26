import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/Lukerlogo.svg'
import FloatLogo from '../../components/layout/float-logo/float-logo';
import HelmetComponent from '../../commons/helmet/helmet';
import { withNamespaces } from 'react-i18next';
import Helmet from 'react-helmet';

function Solution(props) {
  const { t } = props;
  return (
    <div className='solution-component'>
      <Helmet>
        <title>{t('products-services.titulo_seo')}</title>
        <meta name="description" content={t('products-services.meta_descripcion')} />
        <meta property="og:title" content={t('products-services.titulo_protocolo_opengraph')} />
        <meta property="og:description" content={t('products-services.descripcion_opengraph')} />
        <meta name="keywords" content={t('products-services.keywords')} />
        <meta property="og:image" content={t('products-services.imagen_open_graph.url')} />
        <meta property="og:url" content={'https://www.lukerchocolate.com/products-services'} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:site_name" content="Luker Chocolate." />
        <meta name="twitter:image:alt" content={t('products-services.descripcion_opengraph')} />
        <meta name="twitter:site" content="@Luker_Chocolate" />
        <meta property="twitter:image" content={t('products-services.imagen_open_graph.url')} />
      </Helmet>

      <FloatLogo btnText='dist' />
      <Link to={t('routes.products-services') + t('routes.ingredients')} className="solution-component--ingredient">
        <div className="header-btn">
          {t('products-services.ingredients')}
        </div>
      </Link>
      <Link to={t('routes.products-services') + t('routes.finished-chocolate-products')} className="solution-component--maquila">
        <div className="header-btn">
          {t('products-services.finished-chocolate-products')}
        </div>
      </Link>
      <Link to={t('routes.products-services') + t('routes.our-services')} className="solution-component--service">
        <div className="header-btn">
          {t('products-services.our-services')}
        </div>
      </Link>
    </div>
  );
}

export default withNamespaces()(Solution);