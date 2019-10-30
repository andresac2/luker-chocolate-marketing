import React from 'react';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  headerToggle = () => this.setState({ isOpen: !this.state.isOpen })

  render() {
    const { isOpen } = this.state;
    const { selectTab } = this.props;

    return (
      <nav className="header-component">
        <a href="default.asp" className="selected-tab">INTRODUCCIÓN</a>
        <a href="news.asp">FLOW CACAO</a>
        <a href="contact.asp">SOSTENIBILIDAD</a>
        <a href="about.asp">SOLUCIONES</a>
        <a href="about.asp">CLIENTES</a>
        <a href="about.asp">R&D</a>
        <a href="about.asp">PROPUESTA DE VALOR</a>
      </nav>
    );
  }
};

export default Header;
