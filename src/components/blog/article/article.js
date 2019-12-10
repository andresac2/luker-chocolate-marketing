import React from 'react';
import { Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaPrint, FaInstagram } from 'react-icons/fa';

import Comments from '../comments/comments';


class Article extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { data } = this.props;
    const altImg = 'img-example.svg';

    return (
      <div className="blog-article">
        <div className="blog-article-title-resp">{data.title}</div>
        <div className="blog-article-bread">
          <Breadcrumb>
            {data.breads &&
              Object.keys(data.breads).map(i =>
                <Breadcrumb.Item href={data.breads[i].href} key={i}>
                  {(data.breads[i].name === 'Blog') ? <Icon type="home" /> : data.breads[i].name}
                </Breadcrumb.Item>
              )
            }
            <Breadcrumb.Item>
              <span>{data.title}</span>
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="blog-article-bread--social">
            <a href="https://www.facebook.com/LukerChocolate/" target="_blank" ><FaFacebookF /></a>
            <a href="https://www.instagram.com/lukerchocolate/" target="_blank" ><FaInstagram /></a>
            <a href="https://www.linkedin.com/company/lukerchocolate/" target="_blank" ><FaLinkedinIn /></a>
            <a href="" target="_blank" ><FaPrint /></a>
          </div>
        </div>
        <div className="blog-article-content" dangerouslySetInnerHTML={{ __html: data.content }} />
        {data.autor && <div className="blog-article-autor">
          <img src={data.autor.avatar} alt={data.autor.name} />
          <div className="blog-article-autor--data">
            <h2>{data.autor.name}</h2>
            <span>{data.autor.details}</span>
            <p>{data.autor.description}</p>
            <a href={data.autor.linkedin[0]} target="_blank" ><FaLinkedinIn /> {data.autor.linkedin[1]}</a>
          </div>
        </div>}
        {data.recommended &&
          <div className="blog-article-entries">
            <h2>{data.flag ? 'YOU MAY ALSO LIKE' : 'RECOMMENDED ENTRIES'}</h2>
            <div className="blog-article-entries--list">
              {Object.keys(data.recommended).map(i =>
                <Link key={i} to={data.recommended[i].url}>
                  <img src={require('../../../assets/img/' + (data.recommended[i].img ? data.recommended[i].img : altImg))} alt={data.recommended[i].title} />
                  <p>{data.recommended[i].subtitle}</p>
                  <h2>{data.recommended[i].title}</h2>
                </Link>
              )}
            </div>
          </div>
        }
        {!data.flag &&
          <div className="blog-article-comments">
            <Comments />
          </div>
        }
      </div>
    );
  }
}
export default Article;