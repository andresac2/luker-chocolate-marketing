import React from 'react';
import back from '../../../assets/img/back.svg'
import { withRouter } from 'react-router-dom';

class NavArrowLeft extends React.Component {
  navRoutes = ['/', '/chocolate-process', '/sustainability', '/products-services', '/our-clients', '/ideas-trends', '/value-proposition'];

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goView = (e) => {
    e.preventDefault();
    let nextView = this.navRoutes.indexOf(this.props.history.location.pathname);
    this.props.history.push(this.navRoutes[nextView - 1]);
  };


  render() {
    const { history } = this.props;
    const isHidden = this.navRoutes.includes(history.location.pathname);
    const firstView = this.props.history.location.pathname === '/';

    return (
      isHidden && !firstView &&
      < div className={`nav-arrow-left `} >
        <div className="nav-arrow-left-content">
          <img src={back} className="arrow" alt="Left arrow" onClick={e => this.goView(e)} />
        </div>
      </div >
    );
  }
};
export default withRouter(NavArrowLeft);