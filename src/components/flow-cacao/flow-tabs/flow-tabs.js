import React from 'react';
import { Carousel } from 'antd';
import cacao from '../../../assets/img/cacaoOpen.png'
import granjeros from '../../../assets/img//granjeroCar.png'
import abastecimiento from '../../../assets/img/abastecimiento-car.png'
import procesamiento from '../../../assets/img/procesoCar.png'
import coberturas from '../../../assets/img/coberturaCar.png'
import producto from '../../../assets/img/productoCar.png'
import back from '../../../assets/img/back.svg'

class FlowTabs extends React.Component {

  constructor(props) {
    super(props);
    this.handleCheck = this.handleCheck.bind(this)
    this.state = {
      selectTab: 'cacao',
      statusOpened: false
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
    const { selectTab, statusOpened } = this.state;

    return (
      <div className="flow-tabs">
        <div className={`flow-content-component flow-content-component--${selectTab}`}>
          <div className={`flow-content-component--text ${statusOpened ? 'opened' : 'close'}`} onClick={() => { this.handleCheck(statusOpened, 'left') }} >
            {selectTab === 'cacao' &&
              <div>
                <p>The denomination fine or flavour cocoa or Cacao Fino de Aroma is a classification of the International Cocoa Organization (ICCO) that describes our cocoa as unique in the world for its exquisite fruity and flowery aromas and flavour with nutty malt notes. Our cocoa of origin will guarantee that your products are top quality and differentiated from other chocolates on the market. <strong>We only work with Cacao Fino de Aroma.</strong></p>
                <p><strong>ONLY ABOUT 8% OF THE WORLD’S COCOA IS CONSIDERED CACAO FINO DE AROMA - 76% OF CACAO FINO DE AROMA IS PRODUCED IN COLOMBIA, ECUADOR, PERÚ, AND VENEZUELA</strong></p>
              </div>
            }

            {selectTab === 'granjeros' &&
              <div>
                <p>The cocoa harvest is a critical stage to achieve a good fermentation process that achieves the flavor characteristics of chocolate. The quality of the cocoa obtained depends on good harvest management. The cocoa harvest consists of the cut of the ripe cocoa pods that are identified by the change of color in the shell. The ripe pods are collected at different points in the cocoa area, and then the shell is broken in one place to remove the cocoa in drool.</p>
                <p>Growing cocoa is a hard task. 90% of the world’s cocoa is grown on small family farms by about 6 million farmers who earn their living from growing and selling cocoa beans. Cocoa trees grow in tropical environments, within 10 degrees of latitude from the equator. The ideal climate for growing cocoa is hot, rainy, and tropical, with lush vegetation to provide shade for the cocoa trees. Cocoa trees are grafted to guarantee good cocoa characteristics.</p>
              </div>
            }

            {selectTab === 'abastecimiento' &&
              <div>
                <p>Once the cocoa has been harvested and classified, it is ready for the next stage. This begins with fermentation, which occurs when sugars and starches break down into acids or alcohol. Cocoa beans with its pulp are placed in wooden boxes where the fermentation process takes place. This is a key stage in the production of many types of food and beverages, including coffee, alcohol, and cocoa.</p>
                <p>After the fermentation process, the grains are ready for drying. This is another crucial step in order to improve the taste of cocoa. The beans are exposed to sunlight in order to reduce the water content and eliminate some acids naturally present in cocoa. (complementar con bullets de sostenibilidad)</p>
              </div>
            }

            {selectTab === 'procesamiento' &&
              <div>
                <p>Once the cocoa beans are packed, they’re ready to be transported to the processing plant. Cocoa beans from different parts of the country are taken to our factory where the chocolate-making process begins.</p>
                <p>First, we start by cleaning the cocoa beans in order to eliminate impurities from the field. Once cleaned, the beans are put through a winnowing machine that removes their shell. Then, the inside of the cocoa bean is broken into small pieces called cocoa nibs.</p>
                <p>The cocoa nibs are then roasted at 110 °C - 140 °C (230 °F -  284 °F), enhancing the real flavours and scents of cocoa and eliminating the most volatile acids. After the roasting, the cocoa nibs are taken through milling in order to create the cocoa mass. This mass is then pressed using a hydraulic press, which extracts the well-known cocoa butter, used to manufacture other chocolates. The solid residue left is called pressed cake, which is then pulverized in order to make cocoa powder.</p>
                <p>Finally, the mixture is tempered and put into moulds or dosified in chocolate discs. The cocoa mass, cocoa butter, and cocoa powder are packed and sold separately as by-products.</p>
              </div>
            }

            {selectTab === 'coberturas' &&
              <div>
                <p>After all the pressing and separating, the cocoa mass and butter are mixed together in order to make chocolate. Milk is added to the mixture only when making milk chocolate. The mixture then undergoes a refining process in order to improve the texture of the chocolate and it is later placed in a conch, where the product is homogenized.</p>
                <p>With the refining process, the total refining of the cocoa particles is generated by spraying it with a smaller dimension than that of the taste buds. Once refined, we continue with the shell, one of the most important processes in the production of chocolate. In it, the acid flavors are eliminated and the cocoa paste is refined, which contributes to its final quality.</p>
                <p>During these processes, the exact oxygenation and creaminess characteristics are provided while cocoa butter is added, which requires several hours to guarantee its texture while the natural acidity of the chocolate is extracted.</p>
              </div>
            }

            {selectTab === 'producto' &&
              <div>
                <p>From the first idea to the final product, we help you make the chocolate product you want to share with the world a reality. If you have a clear idea of the product or if it’s during its definition stages, we can take care of everything from formulation and conceptualization to packaging design and manufacturing, so that you only take care of its distribution and sale.</p>
                <p>The formulation process starts by choosing one of our Cacao Fino de Aroma chocolates to develop your product. This helps us shape the characteristics and the sensory profile of the chocolate you want to create.</p>
                <p>We also guide you in the conceptualization and development of the image for the packaging of your chocolate product. We advise you on the appropriate materials to use according to your specific needs.</p>
                <p>Finally, by using the technology and ingredients at our disposal, we fabricate the chocolate goodness that’s going to delight your customers and buyers. </p>
              </div>
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
              {[...Array(4)].map((_, i) => {
                return <div key={i}>
                  {selectTab === 'cacao' && <img src={cacao} alt={selectTab} key={1} />}
                  {selectTab === 'granjeros' && <img src={granjeros} alt={selectTab} key={2} />}
                  {selectTab === 'abastecimiento' && <img src={abastecimiento} alt={selectTab} key={3} />}
                  {selectTab === 'procesamiento' && <img src={procesamiento} alt={selectTab} key={4} />}
                  {selectTab === 'coberturas' && <img src={coberturas} alt={selectTab} key={5} />}
                  {selectTab === 'producto' && <img src={producto} alt={selectTab} key={6} />}
                </div>
              })}
            </Carousel>
          </div>
        </div>
        <div className={`flow-tab flow-tab--${selectTab}`}>
          <div onClick={() => this.tabToggle('cacao')} className={`flow-tab-item flow-tab-item--cacao flow-tab-item--${selectTab === 'cacao' && 'active'}`}><span>CACAO FINO DE <br></br> AROMA</span></div>
          <div onClick={() => this.tabToggle('granjeros')} className={`flow-tab-item flow-tab-item--granjeros flow-tab-item--${selectTab === 'granjeros' && 'active'}`}><span>HARVESTING</span></div>
          <div onClick={() => this.tabToggle('abastecimiento')} className={`flow-tab-item flow-tab-item--abastecimiento flow-tab-item--${selectTab === 'abastecimiento' && 'active'}`}><span>POST-HARVESTING</span></div>
          <div onClick={() => this.tabToggle('procesamiento')} className={`flow-tab-item flow-tab-item--procesamiento flow-tab-item--${selectTab === 'procesamiento' && 'active'}`}><span>PROCESSING</span></div>
          <div onClick={() => this.tabToggle('coberturas')} className={`flow-tab-item flow-tab-item--coberturas flow-tab-item--${selectTab === 'coberturas' && 'active'}`}><span>REFINEMENT AND <br></br> CONCHING</span></div>
          <div onClick={() => this.tabToggle('producto')} className={`flow-tab-item flow-tab-item--producto flow-tab-item--${selectTab === 'producto' && 'active'}`}><span>FINISHED PRODUCTS </span></div>
        </div>
        <div></div>
      </div >
    );
  }
};

export default FlowTabs;
