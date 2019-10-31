import React from 'react';
import { FiChevronUp } from 'react-icons/fi'

class FooterCover extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  footerToggle = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { isOpen } = this.state;

    return (
      <div className={`footer-cover ${isOpen && 'footer-cover-open'}`}>
        <FiChevronUp onClick={this.footerToggle} />
        <nav>
          <a onClick={() => console.log('hi')} className=""><span>BLOG</span></a>
          <a onClick={() => console.log('hi')} className=""><span>MÁS INFORMACIÓN</span></a>
          <a onClick={() => console.log('hi')} className=""><span>ESCRÍBENOS</span></a>
        </nav>
      </div>
    );
  }
};

export default FooterCover;
