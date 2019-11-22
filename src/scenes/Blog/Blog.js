import React from 'react';
import { Layout, Input, Select } from 'antd';
import Footer from '../../components/layout/footer/footer';
import { Link } from 'react-router-dom';
import item1 from '../../assets/img/cacaoOpen.png'
import item2 from '../../assets/img/blog-item1.png'
import item3 from '../../assets/img/blog-item2.png'
import item4 from '../../assets/img/blog-item3.png'
import item5 from '../../assets/img/blog-item4.png'

import logo from '../../assets/img/Lukerlogo.svg'
import TakeStand from '../../components/blog/take-stand/take-stand';
import Article from '../../components/blog/article/article';


class Blog extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      searchOpen: false
    };
  }

  searchToggle() {
    this.setState({ searchOpen: !this.state.searchOpen });
  }

  render() {
    const { Search } = Input;
    const { Option } = Select;
    const { searchOpen } = this.state;
    const { category, article } = this.props.match.params;

    return (
      <Layout className="blog-component">
        <div className={`blog-component-header blog-component-header--${(article) ? article : category}`}>
          <div className="btn-dist">
            <img src={logo} className="logo" alt="Logo Luker" />
            <Link to='/blog'>BLOG</Link>
          </div>
          <div className="blog-component-header--search">
            <Search allowClear
              placeholder="input search text"
              onSearch={value => console.log(value), onClick => this.searchToggle()}
              className={searchOpen && 'blog-component-header--search-open'}
              style={{ width: 400 }}
            />
            <Select defaultValue="es" >
              <Option value="es">ES</Option>
              <Option value="en">EN</Option>
            </Select>
          </div>
          <h1>{(article) ? '"ARTICLE TITLE"' : (category) ? 'Take a stand' : 'Headline'} </h1>
        </div >
        <div className="blog-component-content">
          {!article &&
            <div className={`blog-tabs blog-tabs-${category && 'selected'}`} >
              <Link to='/blog/take-stand' className={category === 'take-stand' && 'tab-blog-selected'}>TAKE A STAND</Link>
              <Link to='/blog'>INNOVATION</Link>
              <Link to='/blog'>CREATE SHARED VALUE</Link>
              <Link to='/blog'>THE CHOCOLATE DREAM JOURNEY</Link>
              <Link to='/blog'>WHAT YOU DIDN’T KNOW</Link>
            </div>
          }
          {(category) ?
            (article) ?
              <Article /> : <TakeStand />
            :
            <div className="blog-layout">
              <div className="blog-layout-latest">
                <h1>Latest entries</h1>
                <Link to="/blog/take-stand/article" className="blog-layout-latest--article">
                  <img src={item5} alt="cacao" />
                  <p>DETALLES DE PUBLICACIÓN</p>
                  <h2>Lorem Ipsum</h2>
                </Link>
              </div>
              <div className="blog-layout-articles">
                <div className="blog-layout-articles--item">
                  <img src={item2} alt="cacao" />
                  <p>DETALLES DE PUBLICACIÓN</p>
                  <h2>Lorem Ipsum</h2>
                </div>
                <div className="blog-layout-articles--item">
                  <img src={item3} alt="cacao" />
                  <p>DETALLES DE PUBLICACIÓN</p>
                  <h2>Lorem Ipsum</h2>
                </div>
                <div className="blog-layout-articles--item">
                  <img src={item1} alt="cacao" />
                  <p>DETALLES DE PUBLICACIÓN</p>
                  <h2>Lorem Ipsum</h2>
                </div>
                <div className="blog-layout-articles--item">
                  <img src={item4} alt="cacao" />
                  <p>DETALLES DE PUBLICACIÓN</p>
                  <h2>Lorem Ipsum</h2>
                </div>
              </div>
              <div className="blog-layout-featured">
                <h1>Featured</h1>
                <div className="blog-layout-featured-item">
                  {[...Array(5)].map(i => <div key={i}>
                    <p>DETALLES DE PUBLICACIÓN</p>
                    <h2>Lorem Ipsum</h2>
                  </div>)}
                </div>
              </div>
              <div className="blog-layout-newsletter">
                <h2>NEWSLETTER</h2>
                <p>Join our monthly newsletter and don’t miss a bean!</p>
                <form action="/" >
                  <input type="text" name="email" placeholder="Give us your email!" />
                  <input type="submit" value="Send" />
                </form>
              </div>
            </div>
          }
        </div>
        <Footer />
      </Layout >
    );
  }
}

export default Blog;           