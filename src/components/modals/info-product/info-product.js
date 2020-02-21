import React from 'react';
import { GiWaterDrop } from "react-icons/gi";
import { FaCheck } from "react-icons/fa";
import { Table } from 'antd';
import i18n from '../../../i18n';

class ModalInfoProducts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {

    const columns = [
      {
        title: 'Enrobing',
        dataIndex: 'enrobing',
        render: enrobing => enrobing ? <FaCheck /> : '',
      },
      {
        title: 'Decorative Figures',
        dataIndex: 'decorativeFigures',
        render: decorativeFigures => decorativeFigures ? <FaCheck /> : ''
      },
      {
        title: 'Moulding',
        dataIndex: 'moulding',
        render: moulding => moulding ? <FaCheck /> : ''
      },
      {
        title: 'Fillings & Ganaches',
        dataIndex: 'fillingsGanaches',
        render: fillingsGanaches => fillingsGanaches ? <FaCheck /> : ''
      },
      {
        title: 'Decorating',
        dataIndex: 'decorating',
        render: decorating => decorating ? <FaCheck /> : ''
      },
      {
        title: 'Desserts',
        dataIndex: 'desserts',
        render: desserts => desserts ? <FaCheck /> : ''
      },
    ];
    const altImg = 'img-example.svg';
    const { title, subtitle, contentTitle, product } = this.props;
    return (
      <div className="info-product">
        <div className="info-product-header">
          <h1>{title}</h1>
          <h1>{subtitle}</h1>
        </div>
        <div className="info-product-content">
          <div className="info-product-contain">
            <div className="info-product-contain-top">
              <h2>{contentTitle}</h2>
              <h3>{product.description}</h3>
              <img src={require('../../../assets/img/' + (product.img ? product.img : altImg))} alt={product.description} />
            </div>
            <div className="info-product-contain-data">
              <div className="info-product-contain-data-cocoa">{i18n.language === 'en' ? 'Cocoa content:' : 'Contenido de cacao:'} {product.cocoaContent} {product.milkContent && <span> {i18n.language === 'en' ? 'Milk content:' : 'Contenido de leche:'} {product.milkContent}</span>}</div>
              <div className="info-product-contain-data-viscosity"><span>{i18n.language === 'en' ? 'Viscosity:' : 'Viscosidad:'}</span>
                {[...Array(product.viscosity)].map((_, i) => <div key={i}>
                  <GiWaterDrop />
                </div>)}
              </div>
              <div className="info-product-contain-data-table">
                <Table columns={columns} dataSource={product.data} pagination={false} bordered />
              </div>
              <div className="info-product-contain-data-very">
                <div className="info-product-contain-data-very-fluid"><span>{i18n.language === 'en' ? 'Very fluid:' : 'Muy fluido:'}</span>
                  {[...Array(product.fluid)].map((_, i) => <div key={i}>
                    <GiWaterDrop />
                  </div>)}
                </div>
                <div className="info-product-contain-data-very-fluid"><span>{i18n.language === 'en' ? 'Very viscous:' : 'Muy viscoso:'}</span>
                  {[...Array(product.viscous)].map((_, i) => <div key={i}>
                    <GiWaterDrop />
                  </div>)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default ModalInfoProducts;