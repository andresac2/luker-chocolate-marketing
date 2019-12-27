import React from 'react';
import logo from '../../../assets/img/Lukerlogo.svg'
import HelmetComponent from '../../../commons/helmet/helmet';

class Page404 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.goHome();
    }, 6000)
  }

  goHome() {
    this.props.history.push('/');
  }

  render() {
    return (
      <div className="component-404">
        <HelmetComponent title="Page not found | 404 " />
        <div className="component-404-content">
          <img src={logo} className="logo" alt="Logo Luker" />
          <p>Error</p>
          <p>404</p>
          <p>The page you are looking for doesn’t exist</p>
        </div>
      </div>
    );
  }
};
export default Page404;