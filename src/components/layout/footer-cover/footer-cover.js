import React from 'react';
import { FiChevronUp } from 'react-icons/fi'
import { withRouter, Link } from 'react-router-dom';
import { Select } from 'antd';
import { MdClose } from 'react-icons/md';
import Footer from '../footer/footer';

class FooterCover extends React.Component {
  hideView = ['/services', '/blog'];//VIstas en las que se oculta el footer
  darkIcon = ['/services', '/blog'];//VIstas en las que se muestra modo oscuro

  constructor(props) {
    super(props);
    this.state = {
      distModalVisible: false,
      moreInfoVisible: false,
      isOpen: false
    };
    this.handleShowMoreInfo = this.handleShowMoreInfo.bind(this);

  }
  footerToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
    setTimeout(() => {
      this.setState({ isOpen: false });
    }, 60000)
  }

  showModalDist = () => {
    this.setState({
      distModalVisible: !this.state.distModalVisible,
    });
  };

  handleShowMoreInfo = (e) => {
    e.preventDefault();
    this.setState({
      moreInfoVisible: !this.state.moreInfoVisible,
    });
  };

  render() {
    const { history } = this.props;
    const { isOpen, distModalVisible, moreInfoVisible } = this.state;
    const { Option } = Select;
    const selectTab = history.location.pathname;

    const isFooterHidden = this.hideView.some(function (v) { return history.location.pathname.includes(v); });

    return (
      !isFooterHidden &&
      <div>
        <div className={`footer-cover ${isOpen && 'footer-cover-open'}`}>
          <div className="footer-cover-bkg" onClick={this.footerToggle}></div>
          <FiChevronUp onClick={this.footerToggle} />
          <nav className={`footer-cover-nav footer-cover-${selectTab.slice(1)}`}>
            <Link to="/blog"><span>BLOG</span></Link>
            {selectTab !== '/' && <Link to="/"><span>CREATE YOUR OWN CHOCOLATE</span></Link>}
            <Link to='' onClick={e => { this.handleShowMoreInfo(e); this.footerToggle(); }}><span>MORE INFO</span></Link>
            <Link to="/contact-us"><span>CONTACT US</span></Link>
          </nav>
        </div>
        <button className="btn-dist-footer" onClick={() => this.showModalDist()}> FIND A DISTRIBUTOR </button>
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
        {moreInfoVisible && <Footer mode='vertical' handleShowMoreInfo={this.handleShowMoreInfo} />}
      </div>
    );
  }
};

export default withRouter(FooterCover);
