import React from 'react';
import { Carousel } from 'antd';
import cacao from '../../../assets/img/cacaoOpen.jpg'
import granjeros from '../../../assets/img//granjeroCar.jpg'
import abastecimiento from '../../../assets/img/abastecimiento-car.jpg'
import procesamiento from '../../../assets/img/procesoCar.jpg'
import coberturas from '../../../assets/img/coberturaCar.jpg'
import producto from '../../../assets/img/productoCar.jpg'
import back from '../../../assets/img/back.svg'
import { withNamespaces } from 'react-i18next';

class FlowTabs extends React.Component {

  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this)
    this.state = {
      selectTab: 'cacao',
      statusOpened: true
    };
  }

  tabToggle(tab) {
    this.setState({ selectTab: tab });
  }

  handleCheck(status, aside) {
    if (status && aside === 'rigth') {
      this.setState({ statusOpened: !status })
    } else if (!status && aside == 'left') {
      this.setState({ statusOpened: !status })
    }
  }

  render() {
    const { t } = this.props;
    const { selectTab, statusOpened } = this.state;
    const cacaoImgs = ['cacao-fino-de-aroma.jpg', 'cacao-fino-de-aroma-1.jpg', 'cacao-fino-de-aroma-2.jpg'];
    const finishedImgs = ['finished-product-1.jpg', 'finished-product-2.jpg'];
    const harvestingImgs = ['harvesting-1.jpg', 'harvesting-2.jpg', 'harvesting-3.jpg', 'harvesting-4.jpg'];
    const postharvestingImgs = ['post-harvesting-1.jpg', 'post-harvesting-2.jpg', 'post-harvesting-3.jpg', 'post-harvesting-4.jpg'];
    const processingImgs = ['processing-1.jpg'];
    const raffinementImgs = ['raffinement-conching.jpg'];

    return (
      <div className="flow-tabs">
        <div className={`flow-content-component flow-content-component--${selectTab}`}>
          <div className={`flow-content-component--text ${statusOpened ? 'opened' : 'close'}`} onClick={() => { this.handleCheck(statusOpened, 'left') }} >
            {selectTab === 'cacao' &&
              <div dangerouslySetInnerHTML={{ __html: t('chocolate-process.cocoa-fino-aroma-text') }} />
            }

            {selectTab === 'granjeros' &&
              <div dangerouslySetInnerHTML={{ __html: t('chocolate-process.harvesting-text') }} />
            }

            {selectTab === 'abastecimiento' &&
              <div dangerouslySetInnerHTML={{ __html: t('chocolate-process.post-harvesting-text') }} />
            }

            {selectTab === 'procesamiento' &&
              <div dangerouslySetInnerHTML={{ __html: t('chocolate-process.processing-text') }} />
            }

            {selectTab === 'coberturas' &&
              <div dangerouslySetInnerHTML={{ __html: t('chocolate-process.refinement-coaching-text') }} />
            }

            {selectTab === 'producto' &&
              <div dangerouslySetInnerHTML={{ __html: t('chocolate-process.finished-products-text') }} />
            }
            <div className="arrow-back">
              <img src={back} />
            </div>
          </div>
          <div className={`flow-content-component--slider ${!statusOpened ? 'opened' : 'close'}`} onClick={() => { this.handleCheck(statusOpened, 'rigth') }} >
            <div className="arrow-back">
              <img className="back-rotate" src={back} />
            </div>
            <Carousel autoplay>
              {selectTab === 'cacao' &&
                cacaoImgs.map((item, i) =>
                  <div key={i}>
                    <img src={require('../../../assets/img/the-chocolate-process/cacao/' + item)} alt={selectTab} key={i} />
                  </div>
                )
              }
              {selectTab === 'granjeros' &&
                harvestingImgs.map((item, i) =>
                  <div key={i}>
                    <img src={require('../../../assets/img/the-chocolate-process/harvesting/' + item)} alt={selectTab} key={i} />
                  </div>)
              }
              {selectTab === 'abastecimiento' &&
                postharvestingImgs.map((item, i) =>
                  <div key={i}>
                    <img src={require('../../../assets/img/the-chocolate-process/post-harvesting/' + item)} alt={selectTab} key={i} />
                  </div>)
              }
              {selectTab === 'procesamiento' &&
                processingImgs.map((item, i) =>
                  <div key={i}>
                    <img src={require('../../../assets/img/the-chocolate-process/Processing/' + item)} alt={selectTab} key={i} />
                  </div>)
              }
              {selectTab === 'coberturas' &&
                raffinementImgs.map((item, i) =>
                  <div key={i}>
                    <img src={require('../../../assets/img/the-chocolate-process/raffinement-conching/' + item)} alt={selectTab} key={i} />
                  </div>)
              }
              {selectTab === 'producto' &&
                finishedImgs.map((item, i) =>
                  <div key={i}>
                    <img src={require('../../../assets/img/the-chocolate-process/finished-products/' + item)} alt={selectTab} key={i} />
                  </div>)
              }
            </Carousel>
          </div>
        </div>
        <div className={`flow-tab flow-tab--${selectTab}`}>
          <div onClick={() => this.tabToggle('cacao')} className={`flow-tab-item flow-tab-item--cacao flow-tab-item--${selectTab === 'cacao' && 'active'}`}><span>{t('chocolate-process.cocoa-fino').toUpperCase()}<br /> {t('chocolate-process.cocoa-aroma').toUpperCase()}</span></div>
          <div onClick={() => this.tabToggle('granjeros')} className={`flow-tab-item flow-tab-item--granjeros flow-tab-item--${selectTab === 'granjeros' && 'active'}`}><span>{t('chocolate-process.harvesting').toUpperCase()}</span></div>
          <div onClick={() => this.tabToggle('abastecimiento')} className={`flow-tab-item flow-tab-item--abastecimiento flow-tab-item--${selectTab === 'abastecimiento' && 'active'}`}><span>{t('chocolate-process.post-harvesting').toUpperCase()}</span></div>
          <div onClick={() => this.tabToggle('procesamiento')} className={`flow-tab-item flow-tab-item--procesamiento flow-tab-item--${selectTab === 'procesamiento' && 'active'}`}><span>{t('chocolate-process.processing').toUpperCase()}</span></div>
          <div onClick={() => this.tabToggle('coberturas')} className={`flow-tab-item flow-tab-item--coberturas flow-tab-item--${selectTab === 'coberturas' && 'active'}`}><span>{t('chocolate-process.refinement').toUpperCase()}<br /> {t('chocolate-process.coaching').toUpperCase()}</span></div>
          <div onClick={() => this.tabToggle('producto')} className={`flow-tab-item flow-tab-item--producto flow-tab-item--${selectTab === 'producto' && 'active'}`}><span>{t('chocolate-process.finished').toUpperCase()}<br /> {t('chocolate-process.products').toUpperCase()}</span></div>
        </div>
      </div >
    );
  }
};
export default withNamespaces()(FlowTabs);

/*
              {selectTab === 'granjeros' &&
                harvestingImgs.map((item, i) => {
                  <div key={i}>
                    <img src={require('../../../assets/img/the-chocolate-process/harvesting') + item} alt={selectTab} key={i} />
                  </div>
                })
              }
              {selectTab === 'abastecimiento' &&
                postharvestingImgs.map((item, i) => {
                  <div key={i}>
                    <img src={require('../../../assets/img/the-chocolate-process/post-harvesting') + item} alt={selectTab} key={i} />
                  </div>
                })
              }
              {selectTab === 'procesamiento' &&
                processingImgs.map((item, i) => {
                  <div key={i}>
                    <img src={require('../../../assets/img/the-chocolate-process/Processing') + item} alt={selectTab} key={i} />
                  </div>
                })
              }
              {selectTab === 'coberturas' &&
                raffinementImgs.map((item, i) => {
                  <div key={i}>
                    <img src={require('../../../assets/img/the-chocolate-process/raffinement-conching') + item} alt={selectTab} key={i} />
                  </div>
                })
              }
              {selectTab === 'producto' &&
                finishedImgs.map((item, i) => {
                  <div key={i}>
                    <img src={require('../../../assets/img/the-chocolate-process/finished-products') + item} alt={selectTab} key={i} />
                  </div>
                })
              }
*/