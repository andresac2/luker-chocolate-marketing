import React from 'react';
import logo from '../../../assets/img/Lukerlogo.svg'
import HelmetComponent from '../../../commons/helmet/helmet';
import { withNamespaces } from 'react-i18next';

class Page404 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    /*setTimeout(() => {
      this.goHome();
    }, 6000)*/
  }

  goHome() {
    this.props.history.push('/');
  }

  render() {
    const { t } = this.props;
    return (
      <div className="component-404">
        <HelmetComponent title="Page not found | 404 " />
        <div className="component-404-content">
          <img src="/static/media/Lukerlogo.af6f7609.svg" className="logo" alt="Logo Luker" />
          <p>{t('errors.error')}</p>
          <p>404</p>
          <p>{t('errors.error-404')}</p>
        </div>
      </div>
    );
  }
};
export default withNamespaces()(Page404);