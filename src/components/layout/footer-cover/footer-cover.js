import React from 'react';
import { FiChevronUp } from 'react-icons/fi'
import { withRouter, Link } from 'react-router-dom';
import { Select } from 'antd';
import { MdClose } from 'react-icons/md';

class FooterCover extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectTab: this.props.location.pathname,
      distModalVisible: false,
      isOpen: false
    };
  }
  footerToggle = () => this.setState({ isOpen: !this.state.isOpen })

  showModalDist = () => {
    this.setState({
      distModalVisible: !this.state.distModalVisible,
    });
  };

  render() {
    const { isOpen, selectTab, distModalVisible } = this.state;
    const { Option } = Select;

    return (
      !selectTab.slice(1).includes('services') &&
      <div>
        <div className={`footer-cover ${isOpen && 'footer-cover-open'}`}>
          <FiChevronUp onClick={this.footerToggle} />
          <nav className={`footer-cover-nav footer-cover-${selectTab.slice(1)}`}>
            <Link to="/blog"><span>BLOG</span></Link>
            {selectTab !== '/' && <Link to="/"><span>CREA TU CHOCOLATE</span></Link>}
            <Link to="/asd"><span>MÁS INFORMACIÓN</span></Link>
            <Link to="/contact-us"><span>ESCRÍBENOS</span></Link>
          </nav>
        </div>
        <button className="btn-dist-footer" onClick={() => this.showModalDist()}> DISTRIBUIDORES </button>
        <div className={`modal-dist modal-dist-${distModalVisible && 'visible'}`}>
          <div className="modal-dist-bkg" onClick={() => this.showModalDist()}></div>
          <div className="modal-dist-modal">
            <MdClose className="btn-x" onClick={() => this.showModalDist()} />
            <div className="modal-dist-modal-dist">
              <div className="modal-dist-modal-dist-header">
                <h2>Distributors</h2>
                <Select size='small' defaultValue="ca" style={{ width: 150 }} >
                  <Option value="ca">Canadá</Option>
                  <Option value="uk">Inglaterra</Option>
                  <Option value="co">Colombia</Option>
                </Select>
              </div>
              <div className="modal-dist-modal-dist-cards">
                <div className={`modal-dist-modal-dist-cards-card modal-dist-modal-dist-cards-card--active`}>
                  <h2>CHOCOLATE ALIMENTS</h2>
                  <p><span>Address:</span> Vancouver, Columbia Británica</p>
                  <p><span>Phone:</span> 778 895 6549</p>
                  <p><span>Web:</span> http://chocolatealiments.com/</p>
                  <p><span>E-mail:</span> @chocolatealiments.ca</p>
                </div>
                <div className={`modal-dist-modal-dist-cards-card`}>
                  <h2>Distributors</h2>
                  <p><span>Address:</span> Vancouver, Columbia Británica</p>
                  <p><span>Phone:</span> 778 895 6549</p>
                  <p><span>Web:</span> http://chocolatealiments.com/</p>
                  <p><span>E-mail:</span> @chocolatealiments.ca</p>
                </div>
              </div>
            </div>
            <div className="modal-dist-modal-map">
              <img src={require('../../../assets/img/map-dist.png')} alt='map distirbuidores' />
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default withRouter(FooterCover);
