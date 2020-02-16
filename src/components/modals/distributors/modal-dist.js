import React from 'react';
import { Select } from 'antd';
import { withNamespaces } from 'react-i18next';
import { getDistributors } from '../../../commons/services/api';
import { countries as dataCountries } from '../../../commons/data/data-en';
import { countries as paises } from '../../../commons/data/data-es';
import i18n from '../../../i18n';

class ModalDistributors extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      actualDist: [],
      distributors: [],
      distValue: 'co',
      distSelected: 0
    };
    this.getDist = this.getDist.bind(this);
  }

  async getDist() {
    let dists = [];
    getDistributors().then(data =>
      data.map((e) => {
        dists.push(e.acf)
      })).then(() =>
        this.setState({ distributors: dists, actualDist: dists.filter(e => e.country.includes(this.state.distValue)) })
      )
  }

  handleChange = (value) => {
    this.setState({
      distValue: value
    }, () => {
      this.selectDistributorCountry();
    })
  }

  selectDist = (value) => {
    this.setState({ distSelected: value })
  }

  selectDistributorCountry() {
    let arr = this.state.distributors.filter(e => e.country.includes(this.state.distValue));
    this.setState({ actualDist: arr });
  }

  componentDidMount() {
    this.getDist();
    //this.selectDistributorCountry();
  }

  render() {
    const { distValue, actualDist, distSelected, distributors } = this.state;
    const { t } = this.props;
    const { Option } = Select;

    let countries = i18n.language === 'en' ? dataCountries : paises;

    return (
      <div className="modal-dist">
        <div className="modal-dist-list">
          <div className="modal-dist-list-header">
            <h2>{t('modals.modal-dist-title')}</h2>
            <Select size='small' defaultValue="co" style={{ width: 150 }} value={distValue} onChange={this.handleChange}>
              {Object.keys(countries).map(i =>
                <Option key={i} value={countries[i].abrev} key={i}>{countries[i].name}</Option>
              )}
            </Select>
          </div>
          <div className="modal-dist-list-cards">
            {distributors.length > 0 && Object.keys(actualDist).map(i =>
              <div key={i} className={`modal-dist-list-cards-card modal-dist-list-cards-card--${i == distSelected && 'active'}`} onClick={() => this.selectDist(i)}>
                <h2>{actualDist[i].company}</h2>
                <p><span>{i18n.language === 'en' ? 'Address:' : 'Dirección:'} </span>{actualDist[i].address}</p>
                <p><span>{t('form.phone-number')}: </span>{actualDist[i].phone}</p>
                <p><span>Web: </span><a href={'https://' + actualDist[i].web} target='_blank'>{actualDist[i].web}</a> </p>
                <p><span>E-mail: </span> {actualDist[i].email}</p>
              </div>
            )}
          </div>
          }</div>
        <div className="modal-dist-map">
          {actualDist.length > 0 &&
            <iframe src={actualDist[distSelected].urlmap} width="100%" height="100%" style={{ border: 0 }} ></iframe>
          }
        </div>
      </div>
    );
  }
};

export default withNamespaces()(ModalDistributors);