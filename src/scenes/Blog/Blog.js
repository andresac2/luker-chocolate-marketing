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
import FloatLogo from '../../components/layout/float-logo/float-logo';


class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadArticle: '',
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
      content: '<div class="blog-article-content--image-capital"><div class="blog-article-content--img" ><img src="/static/media/Doisy&Dam.fda98bfc.png" alt="Proceso de plantación" /><span></span></div>When it comes to sourcing cocoa, Doisy & Dam only wants the best of the best.For them, it’s very important to understand exactly how the supply chain works and where exactly the totally delish cocoa comes from.They also want to make sure that the chocolate they work with is ethically sourced and has a positive impact on the dedicated farmers who depend on growing great crops.</div><p></p>For their newest creations Crunchy Almond Butter and SNAPS, they wanted to get even deeper in to the heart of tracing the  cocoa, which us why they\'ve decided to use single-origin chocolate from us, not only because grow some of the tastiest cocoa beans in the land but also because we work very hard to improve the local community.<p></p> Delivering superior product quality is of primary importance for Daniel’s Delights, which is supported by fully understanding our supply chain and supporting a ‘Farm to Bar’ supply chain, which is achieved through our partnership.</div>',
      recommended: [{ img: 'pots&co.png', title: '', subtitle: 'POTS & CO', url: '/blog/take-stand/article' }, { img: 'PAUL LAFAYET_Creme.png', title: '', subtitle: 'PAUL LAFAYETTE', url: '/blog/take-stand/article' }, { img: 'lyra_eshop.png', title: '', subtitle: 'LYRA CHOC', url: '/blog/take-stand/article' }]
    }
    const daniels = {
      breads: [{ href: '/blog', name: 'Customers' }],
      title: 'Daniel’s Delights',
      flag: 'uk',
      content: 'Daniel’s Delights is a family owned Chocolatier that was launched in 2007 in Stoke On Trent by our CEO Ken Harrison and his wife Jen at their kitchen table, when Ken, a trained chef, began making Chocolate Favours for Jen to sell at local farmers markets. They are able to produce in excess of 20,000 bars per day as well as small-volume batches of hand-finished chocolate, which makes us quite unique within the UK.<p></p>In 2015 Daniel’s Delights agreed a strategic partnership with Luker Chocolate. In their own words, they see us as a business wholly focused on investing in local rural communities and creating long term sustainable relationships with farmers and growers and moving them away formless sustainable farming practices and into Cacao production. Working tirelessly in rebuilding communities previously blighted by the trade-in coca leaves and through their work throughout Colombia has helped those communities by building schools and developing social enterprise schemes to allow them to become sustainable through the production of Cacao. That’s only a part of what made them choose Luker Chocolate as their provider. They also know that the Cacao we produce is classified by the ICCO as being in the top 8% of the global production in terms of quality and has the Cacao fino de aroma classification.</div>',
      recommended: [{ img: 'pots&co.png', title: '', subtitle: 'POTS & CO', url: '/blog/take-stand/article' }, { img: 'PAUL LAFAYET_Creme.png', title: '', subtitle: 'PAUL LAFAYETTE', url: '/blog/take-stand/article' }, { img: 'lyra_eshop.png', title: '', subtitle: 'LYRA CHOC', url: '/blog/take-stand/article' }]
    }
    const pots = {
      breads: [{ href: '/blog', name: 'Customers' }],
      title: 'Pots & Co',
      flag: 'uk',
      content: 'At Pots & Co they love making timeless classics. Their goal is to work with traditional recipes and elevate them into modern, restaurant-quality puddings that hero the classic ingredients and culinary techniques used to make them.<p></p>All of their base ingredients are sourced with attention and care, which is why at Luker Chocolate get to provide them. There are no additives or taste enhances needed, or allowed in their kitchen. The majority of their products are chocolate-based and the highest quality is required to produce them. <p></p> Since the team at Pots & Co tried Colombian chocolate, they knew the quality and flavour could not be compared to anything else in the world, and thus they decided to make us their provider, ensuring a fantastic flavour and special value.</div>',
      recommended: [{ img: 'pots&co.png', title: '', subtitle: 'POTS & CO', url: '/blog/take-stand/article' }, { img: 'PAUL LAFAYET_Creme.png', title: '', subtitle: 'PAUL LAFAYETTE', url: '/blog/take-stand/article' }, { img: 'lyra_eshop.png', title: '', subtitle: 'LYRA CHOC', url: '/blog/take-stand/article' }]
    }
    const atelier = {
      breads: [{ href: '/blog', name: 'Customers' }],
      title: 'Atelier Rodier',
      flag: 'uk',
      content: '<div class="blog-article-content--img" ><img src="/static/media/Doisy&Dam.fda98bfc.png" alt="Proceso de plantación" /><span></span></div>Santiago Torrijos, owner of Atelier Roder became interested in chocolate, from a very early age. After trying different chocolates from France and Italy, in 2014 he coincidentally tried a homemade-style hot chocolate made by a Colombian chef in a culinary event in the Netherlands. He couldn’t believe that the flavour in the chocolate he was drinking could come from his very own country, while being so far away from the homeland. Since then, all the chocolate sufflés he makes at his restaurant are made with ingredients provided by Luker Chocolate.',
      recommended: [{ img: 'pots&co.png', title: '', subtitle: 'POTS & CO', url: '/blog/take-stand/article' }, { img: 'PAUL LAFAYET_Creme.png', title: '', subtitle: 'PAUL LAFAYETTE', url: '/blog/take-stand/article' }, { img: 'lyra_eshop.png', title: '', subtitle: 'LYRA CHOC', url: '/blog/take-stand/article' }]
    }
    const dengel = {
      breads: [{ href: '/blog', name: 'Customers' }],
      title: 'Dengel Shokolade',
      flag: 'uk',
      content: '<div class="blog-article-content--img" ><img src="/static/media/Doisy&Dam.fda98bfc.png" alt="Proceso de plantación" /><span></span></div>What Dengel Shokolade in Germany likes about our products is that every cocoa bean is closely related to the producers. Dengel Shokolade launched a raw material concept in 2015. This is under the motto "honest and fair direct from the producer". Thus, the raw materials needed for chocolate production (cocoa beans, cane sugar, and milk) are purchased directly from cocoa farmers from Colombia. They produce noble and fine chocolates since 1992. For them, the purchase of Cacao Fino de Aroma directly from Colombia without intermediate trade and at a fair fixed price is unbeatable, allowing us to makes sure that equivalent funds are paid directly to the cocoa farmers.',
      recommended: [{ img: 'pots&co.png', title: '', subtitle: 'POTS & CO', url: '/blog/take-stand/article' }, { img: 'PAUL LAFAYET_Creme.png', title: '', subtitle: 'PAUL LAFAYETTE', url: '/blog/take-stand/article' }, { img: 'lyra_eshop.png', title: '', subtitle: 'LYRA CHOC', url: '/blog/take-stand/article' }]
    }
    const york = {
      breads: [{ href: '/blog', name: 'Customers' }],
      title: 'York Cocoa House',
      flag: 'uk',
      content: '<div class="blog-article-content--img" ><img src="/static/media/Doisy&Dam.fda98bfc.png" alt="Proceso de plantación" /><span></span></div>Sophie Jewett says she fell in love with chocolate at an early age. She made chocolate cakes and fudge for friends and family as a child, eventually melting Christmas chocolates in an attempt to create her own Easter Eggs. Since then, her interest in chocolate grew into an obsession, and so she set out to learn everything possible about chocolate. Every new thing she’s discovered drawn her deeper into the world of chocolate and introduced her to chocolate lovers, chocolate makers, chocolatiers and experts from around the world, including us. <p></p> For her, it’s very important to work with products that involve communities working side-by-side, giving her and other chocolate professionals to tell new stories through a positive experience, which is what we try to accomplish every day at Luker Chocolate.',
      recommended: [{ img: 'pots&co.png', title: '', subtitle: 'POTS & CO', url: '/blog/take-stand/article' }, { img: 'PAUL LAFAYET_Creme.png', title: '', subtitle: 'PAUL LAFAYETTE', url: '/blog/take-stand/article' }, { img: 'lyra_eshop.png', title: '', subtitle: 'LYRA CHOC', url: '/blog/take-stand/article' }]
    }
    const roice = {
      breads: [{ href: '/blog', name: 'Customers' }],
      title: 'ROYCE\'',
      flag: 'uk',
      content: '<div class="blog-article-content--img" ><img src="/static/media/Doisy&Dam.fda98bfc.png" alt="Proceso de plantación" /><span></span></div> was founded in Sapporo, Japan, in 1983. They are able to make chocolate of world- class quality in Hokkaido by having acquired the best techniques and enriching their experience through the years.The fundamental principle of Royce\' has been and will always be the painstaking sourcing of high-quality ingredients, and so, we are the ones that provide those for them.They take pride in having their own farm in Colombia, which we run for them, allowing their customers and consumers to know that the origin of their products is from a great quality source',
      recommended: [{ img: 'pots&co.png', title: '', subtitle: 'POTS & CO', url: '/blog/take-stand/article' }, { img: 'PAUL LAFAYET_Creme.png', title: '', subtitle: 'PAUL LAFAYETTE', url: '/blog/take-stand/article' }, { img: 'lyra_eshop.png', title: '', subtitle: 'LYRA CHOC', url: '/blog/take-stand/article' }]
    }
    const articleSelected = article == 'doisy' ? doisy : article == 'daniels' ? daniels : article == 'pots' ? pots : article == 'atelier' ? atelier : article == 'dengel' ? dengel : article == 'york' ? york : article == 'roice' ? roice : artExample;

    return (
      <Layout className="blog-component">
        <div className={`blog-component-header blog-component-header--${(article) ? article : category}`}>
          <div className="btn-dist">
            <img src={logo} className="logo" alt="Logo Luker" />
            <Link to='/blog'>BLOG</Link>
          </div>
          <FloatLogo btns={[{ url: '/blog', btnText: 'BLOG' }]} />
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
              <Article data={articleSelected} /> : <TakeStand />
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