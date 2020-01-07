import React from 'react';
import { MdClose } from 'react-icons/md';
import ModalDistributors from './distributors/modal-dist';

class Modals extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { visible, modal } = this.props;
    return (
      <div className={`modal-content modal-content-${visible && 'visible'}`}>
        <div className="modal-content-bkg" onClick={() => this.props.showModalDist()}></div>
        <div className="modal-content-modal">
          <MdClose className="btn-x" onClick={() => this.props.showModalDist()} />
          {modal === 'distributors' &&
            <ModalDistributors />
          }
        </div>
      </div>
    );
  }
};
export default Modals;