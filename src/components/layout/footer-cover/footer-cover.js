import React from 'react';
import { FiChevronUp } from 'react-icons/fi'
import { withRouter, Link } from 'react-router-dom';

class FooterCover extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectTab: this.props.location.pathname,
      isOpen: false
    };
  }
  footerToggle = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { isOpen, selectTab } = this.state;

    return (
      !selectTab.slice(1).includes('services') &&
      <div className={`footer-cover ${isOpen && 'footer-cover-open'}`}>
        <FiChevronUp onClick={this.footerToggle} />
        <nav className={`footer-cover-nav footer-cover-${selectTab.slice(1)}`}>
          <Link to="/blog"><span>BLOG</span></Link>
          {selectTab !== '/' && <Link to="/"><span>CREA TU CHOCOLATE</span></Link>}
          <Link to="/"><span>MÁS INFORMACIÓN</span></Link>
          <Link to="/"><span>ESCRÍBENOS</span></Link>
        </nav>
      </div>
    );
  }
};

export default withRouter(FooterCover);
