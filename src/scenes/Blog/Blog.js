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
    const artExample = {
      breads: [{ href: '/blog', name: 'Blog' }, { href: '/blog/take-stand', name: 'Take a stand' }],
      title: '"Article title"',
      content: '<p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p> <div class="blog-article-content--img" ><img src=\'/static/media/planting.0dcd8148.png\' alt="Proceso de plantación" /><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span></div ><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>',
      autor: { name: 'AUTHOR', avatar: 'autor-blog.png', details: 'CREDENTIALS', description: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.', linkedin: ['https://www.linkedin.com/company/casa-luker/', 'PROFILE NAME'] },
      recommended: [{ img: 'planting.png', title: 'LOREM IPSUM', subtitle: 'PUBLICATION DETAILS', url: '/blog/take-stand/article' }, { img: 'planting.png', title: 'LOREM IPSUM', subtitle: 'PUBLICATION DETAILS', url: '/blog/take-stand/article' }, { img: 'planting.png', title: 'LOREM IPSUM', subtitle: 'PUBLICATION DETAILS', url: '/blog/take-stand/article' }]
    }
    const doisy = {
      breads: [{ href: '/blog', name: 'Customers' }],
      title: 'Doisy & Dam',
      flag: 'uk',
      content: '<div class="blog-article-content--image-capital"><div class="blog-article-content--img" ><img src="/static/media/Doisy&Dam.fda98bfc.png" alt="Proceso de plantación" /><span>Lorem ipsum dolor sit amet, consetetur sadipscing</span></div><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p></div><div class="blog-article-content--img" ><img src="/static/media/doisy-milk.0e42db9b.png" alt="Proceso de plantación" /><span>DETALLES DEL PRODUCTO</span></div>',
      recommended: [{ img: 'pots&co.png', title: '', subtitle: 'POTS & CO', url: '/blog/take-stand/article' }, { img: 'PAUL LAFAYET_Creme.png', title: '', subtitle: 'PAUL LAFAYETTE', url: '/blog/take-stand/article' }, { img: 'lyra_eshop.png', title: '', subtitle: 'LYRA CHOC', url: '/blog/take-stand/article' }]
    }
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
          <h1>{(article) ? (article === 'article') ? artExample.title : doisy.title : (category) ? 'Take a stand' : 'Headline'} </h1>
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
            (article) ? (article === 'article') ? <Article data={artExample} /> :
              <Article data={doisy} /> : <TakeStand />
            :
            <div className="blog-layout">
              <div className="blog-layout-latest">
                <h1>Latest entries</h1>
                <Link to="/blog/take-stand/article" className="blog-layout-latest--article">
                  <img src={item5} alt="cacao" />
                  <p>PUBLICATION DETAILS</p>
                  <h2>Lorem Ipsum</h2>
                </Link>
              </div>
              <div className="blog-layout-articles">
                <div className="blog-layout-articles--item">
                  <img src={item2} alt="cacao" />
                  <p>PUBLICATION DETAILS</p>
                  <h2>Lorem Ipsum</h2>
                </div>
                <div className="blog-layout-articles--item">
                  <img src={item3} alt="cacao" />
                  <p>PUBLICATION DETAILS</p>
                  <h2>Lorem Ipsum</h2>
                </div>
                <div className="blog-layout-articles--item">
                  <img src={item1} alt="cacao" />
                  <p>PUBLICATION DETAILS</p>
                  <h2>Lorem Ipsum</h2>
                </div>
                <div className="blog-layout-articles--item">
                  <img src={item4} alt="cacao" />
                  <p>PUBLICATION DETAILS</p>
                  <h2>Lorem Ipsum</h2>
                </div>
              </div>
              <div className="blog-layout-featured">
                <h1>Featured</h1>
                <div className="blog-layout-featured-item">
                  {[...Array(5)].map(i => <div key={i}>
                    <p>PUBLICATION DETAILS</p>
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