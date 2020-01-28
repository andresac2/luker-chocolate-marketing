import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/img/Lukerlogo.svg'
import logoDark from '../../../assets/img/LukerlogoDark.svg'
import Modals from '../../modals/modals';
import { withNamespaces } from 'react-i18next';

class FloatLogo extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      distModalVisible: false,
      actualDist: [],
      distValue: 'co'
    };
    this.showModalDist = this.showModalDist.bind(this)
  }

  showModalDist = () => {
    this.setState({
      distModalVisible: !this.state.distModalVisible,
    });
  };

  render() {
    const { dark, btns, btnText, t } = this.props;
    const { distModalVisible } = this.state;
    return (
      <>
        <div className="float-logo">
          <Link to="/" className="logo">
            <img src='/static/media/Lukerlogo.af6f7609.svg' alt="Logo Luker" />
          </Link>
          {btnText === 'dist' ?
            <button className="float-logo-dist" onClick={() => this.showModalDist(distModalVisible)}>{t('buttons.find-distributor')}</button> :
            (btns[0].btnText === 'dist') ? <button className="float-logo-dist" onClick={() => this.showModalDist(distModalVisible)}> {t('buttons.find-distributor')} </button> :
              <><Link to={btns[0].url}>{btns[0].btnText}</Link>
                {btns[1] && <Link to={btns[1].url}>{btns[1].btnText}</Link>}</>
          }
        </div>
        <Modals visible={distModalVisible} modal={'distributors'} showModalDist={this.showModalDist} />
      </>
    );
  }
};
export default withNamespaces()(FloatLogo);