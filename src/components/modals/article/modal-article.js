import React from 'react';
import { Select, Spin } from 'antd';
import { withNamespaces } from 'react-i18next';
import { getDistributors } from '../../../commons/services/api';
import { countries as dataCountries } from '../../../commons/data/data-en';
import { countries as paises } from '../../../commons/data/data-es';
import i18n from '../../../i18n';
import Article from '../../blog/article/article';
import { MdClose } from 'react-icons/md';

class ModalArticle extends React.Component {

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
    const { t, item, visible } = this.props;
    const { Option } = Select;

    let countries = i18n.language === 'en' ? dataCountries : paises;
    console.log("item", item.length);
    return (
      <>
        {item ?
          <div className="modal-article">
            <div className="modal-article-header" style={{ backgroundImage: `url(${item.img}` }}>
              <h1>{item.title}</h1>
              <div className="modal-article-header-badges">
                {(item.badges).map((badge, i) =>
                  <div key={i} className={`modal-badge`}>
                    <img src={badge} alt={item.title} />
                  </div>)}
              </div>
            </div>
            {visible && <Article data={item} />}
          </div> : <Spin size="large" />
        }
      </>
    );
  }
};

export default withNamespaces()(ModalArticle);