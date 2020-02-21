import React from 'react';
import { Spin } from 'antd';
import { withNamespaces } from 'react-i18next';
import Article from '../../blog/article/article';

class ModalArticle extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { item, visible } = this.props;
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