import React from 'react';
import { MdClose } from 'react-icons/md';
import ModalDistributors from './distributors/modal-dist';
import ModalInfoProducts from './info-product/info-product';
import ModalReportDocs from './report-doc/report-doc';


class Modals extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { visible, modal, product, title, subtitle, contentTitle } = this.props;
    return (
      <div className={`modal-content modal-content-${visible && 'visible'}`}>
        <div className="modal-content-bkg" onClick={() => this.props.showModalDist()}></div>
        <div className="modal-content-modal">
          <MdClose className="btn-x" onClick={() => this.props.showModalDist()} />
          {modal === 'distributors' &&
            <ModalDistributors />
          }
          {modal === 'info-product' &&
            <ModalInfoProducts product={product} title={title} subtitle={subtitle} contentTitle={contentTitle} />
          }
          {modal === 'report-doc' &&
            <ModalReportDocs />
          }
        </div>
      </div>
    );
  }
};
export default Modals;