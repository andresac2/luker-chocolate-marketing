import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//import doisy from '../../assets/img/Doisy&Dam.jpg'
//import royce from '../../assets/img/royce.jpg'
//import fifthDim from '../../assets/img/5thdimensions.jpg'
//import laceys from '../../assets/img/Lacy\'s New.png'
//import lyra from '../../assets/img/lyra_eshop.jpg'
//import paul from '../../assets/img/PAUL LAFAYET_Creme.png'
//import pots from '../../assets/img/pots&co.jpg'
//import dengel from '../../assets/img/dengel.jpg'
//import york from '../../assets/img/york.jpg'

//import frFlag from '../../assets/img/fr-flag.png'
//import usFlag from '../../assets/img/us-flag.png'
//import dkFlag from '../../assets/img/dk-flag.png'
//import ukFlag from '../../assets/img/uk-flag.png'
//import jpFlag from '../../assets/img/jp-flag.png'
import FloatLogo from '../../components/layout/float-logo/float-logo';
import HelmetComponent from '../../commons/helmet/helmet';
import { withNamespaces } from 'react-i18next';
import { getClients, getClientsEs } from "../../commons/services/api";
import i18n from '../../i18n';

function Customer(props) {
  const { t } = props;
  const doisy = '/static/media/Doisy&Dam.c8f44fc8.jpg'
  const royce = '/static/media/royce.45faf6d0.jpg'
  const pots = '/static/media/pots&co.02821b2d.jpg'
  const york = '/static/media/york.a1887e7a.jpg'
  const usFlag = 'data:image/png;base64,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'
  const ukFlag = 'data:image/png;base64,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'
  const jpFlag = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJwAAABbCAMAAACxixxzAAAAkFBMVEXc3NwAAADb29u8vLz///+7AC3+/f39+PnAFT3DIUa+CzTtvcjfi57QUm7twMrbfJHHLFDUYXu+DTf57O/46ez13OHxzdXuw83rtcDehZnMQWC/EDnfiJvNRmX89ff78vX78/T35urknq3km6vcgJXadYvSW3bJN1nJNlfFJkvx0NfkoK7VZH7OSGby0Nfln65n0atTAAAAAWJLR0QAiAUdSAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAAd0SU1FB+MMHwAwM/EYPqEAAAGvSURBVGje7drbjoIwEAZgL5ikpVDOZ70Q8YCK+/5vt67ZbJYLV2jTMlnnfwDzxSDtzO/KQZwV4QhHOMIRjnCEIxzhCIcdl4ldEPmbut74UbATGRpcWgYb7sKvuHwIyhQBrgiOI9gP8BgUC+PKiMHTsKhcECeiBv5McxUL4bYdh5fh3XYJnPBhUnxhH9eGMDFhaxvnMZgc5tnFVS7MiFvZxHmzbHedZw/XMpgZ1trCiRBmJxR2cKkPCvFTK7g1KGVtA5f3arg+t4Dbg2L25nFnrorjZ+O4CpRTmcYltTquTgzjZKOOa6RhnAca8QzjDjq4g1lcctLBnRKjuIzr4HhmFJczHRzLjeKKWAcXF0ZxUg8n3/ebQ/3Mof61on7PoT4hcJ+tqG8lqO9zOjfhufOXwgzRq9r623tPX04eqtlCG3Mr6okf967EkSpbJunYwTmX+fu5C202lXbCa8cmDvU2/f7cTe8hPqjBGWdbTem+qkW6r68X3vVlayg1Pv4f962PSfZJUx0v31Q/ztqyG/ho2I750KHo+L/nWaz/jjAWwhGOcIQjHOEIRzjCEc5YPgHsbfkeo5mNWwAAAABJRU5ErkJggg=='

  const [clients, setClients] = useState([]);

  let breads = [{ href: '/', name: '' }]
  let cust = {};
  let customers = [{}];

  if (i18n.language === 'en') {
    getClients().then(data =>
      data.map((e, i) => {
        cust['url'] = e.acf.url;
        cust['cover'] = e.acf.cover || 'banner-cocoa-forest.jpg';
        cust['title'] = e.acf.title;
        cust['banner'] = e.acf.banner;
        cust['flag'] = e.acf.flag;
        cust['content'] = e.acf.content;
        breads[0]['href'] = e.acf.href;
        breads[0]['name'] = e.acf.categoryname || "Nuestros clientes";
        cust['breads'] = breads;
        customers.push(cust);
        cust = {};
        breads = [{}, {}];
      }))
      .then(data =>
        setClients(customers)
      )
  } else {
    getClientsEs().then(data =>
      data.map((e, i) => {
        cust['url'] = e.acf.url;
        cust['cover'] = e.acf.cover || 'banner-cocoa-forest.jpg';
        cust['title'] = e.acf.title;
        cust['banner'] = e.acf.banner;
        cust['flag'] = e.acf.flag;
        cust['content'] = e.acf.content;
        breads[0]['href'] = e.acf.href;
        breads[0]['name'] = e.acf.categoryname || "Nuestros clientes";
        cust['breads'] = breads;
        customers.push(cust);
        cust = {};
        breads = [{}, {}];
      }))
      .then(data =>
        setClients(customers)
      )
  }
  return (
    <div className='customer-component'>
      <HelmetComponent title={t('our-clients.titulo_seo')} keywords={t('our-clients.keywords')} titleOg={t('our-clients.titulo_protocolo_opengraph')} description={t('our-clients.meta_descripcion')} descriptionOg={t('our-clients.descripcion_opengraph')} cover={t('our-clients.imagen_open_graph.url')} url={'our-clients'} />
      {/*clients.map((client, i) =>
        <Link to={'/blog' + t('routes.our-clients') + '/pots-co'}>
          <img src={pots} alt="Pots&co" />
          <h2>POTS & CO</h2>
          <img src={ukFlag} alt="United kingdom flag" className="flag-badge" />
        </Link>
      )*/
      }
      <div className="customer-component--header">
        <h1>{t('header.our-clients').toUpperCase()}</h1>
        <FloatLogo btnText='dist' />
      </div>
      <div className="customer-component--content">
        <Link to={'/blog' + t('routes.our-clients') + '/pots-co'}>
          <img src={pots} alt="Pots&co" />
          <h2>POTS & CO</h2>
          <img src={ukFlag} alt="United kingdom flag" className="flag-badge" />
        </Link>
        <Link to={'/blog' + t('routes.our-clients') + '/doisy-dam'}>
          <img src={doisy} alt="Doisy & Dam" />
          <h2>DOISY & DAM</h2>
          <img src={ukFlag} alt="United kingdom flag" className="flag-badge" />
        </Link>
        <Link to={'/blog' + t('routes.our-clients') + '/royce'}>
          <img src={royce} alt="Royce" />
          <h2>ROYCE'</h2>
          <img src={jpFlag} alt="Japan flag" className="flag-badge" />
        </Link>
        <Link to={'/blog' + t('routes.our-clients') + '/york-cocoa-house'}>
          <img src={york} alt="York Cocoa House" />
          <h2>YORK COCOA HOUSE</h2>
          <img src={usFlag} alt="United states flag" className="flag-badge" />
        </Link>
      </div>
    </div>
  );
}

export default withNamespaces()(Customer);