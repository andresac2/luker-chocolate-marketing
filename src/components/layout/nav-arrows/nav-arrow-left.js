import React from 'react';
import back from '../../../assets/img/back.svg'
import { withRouter } from 'react-router-dom';
import i18n from '../../../i18n';

class NavArrowLeft extends React.Component {
  navRoutes = ['/', i18n.t('routes.chocolate-process'), i18n.t('routes.sustainability'), i18n.t('routes.products-services'), i18n.t('routes.our-clients'), i18n.t('routes.ideas-trends'), i18n.t('routes.our-value')];

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
      <div className={`nav-arrow-left`} >
        <div className="nav-arrow-left-content">
          <img src={back} className="arrow" alt="Left arrow" onClick={e => this.goView(e)} />
        </div>
      </div>
    );
  }
};
export default withRouter(NavArrowLeft);