import React from 'react';
import back from '../../../assets/img/back.svg'
import { withRouter } from 'react-router-dom';
import i18n from '../../../i18n';

class NavArrowRight extends React.Component {
  navRoutes = ['/', i18n.t('routes.chocolate-process'), i18n.t('routes.sustainability'), i18n.t('routes.products-services'), i18n.t('routes.our-clients'), i18n.t('routes.ideas-trends'), i18n.t('routes.our-value')];

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goView = (e) => {
    e.preventDefault();
    let nextView = this.navRoutes.indexOf(this.props.history.location.pathname);
    this.props.history.push(this.navRoutes[nextView + 1]);
  };


  render() {
    const { history } = this.props;
    const isHidden = this.navRoutes.includes(history.location.pathname);
    const lastView = this.navRoutes.indexOf(this.props.history.location.pathname) === this.navRoutes.length - 1;

    return (
      isHidden && !lastView &&
      <div className={`nav-arrow-right nav-arrow-right-${this.props.history.location.pathname === '/' && 'visible'} `} >
        <div className="nav-arrow-right-content">
          <img src="/static/media/back.9ae9d2c8.svg" className="arrow" alt="Right arrow" onClick={e => this.goView(e)} />
        </div>
      </div >
    );
  }
};
export default withRouter(NavArrowRight);