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
    const { setCollapsed } = this.props;

    return (
      <div className="">
        <h1>holaaa</h1>
      </div>
    );
  }
};

export default Header;
