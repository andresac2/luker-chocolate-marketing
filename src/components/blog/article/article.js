import React from 'react';
import { Breadcrumb, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPrint } from 'react-icons/fa';

import plant from '../../../assets/img/planting.png'
import autorPic from '../../../assets/img/autor-blog.png'


function Article() {
  return (
    <div className="blog-article">
      <div className="blog-article-bread">
        <Breadcrumb>
          <Breadcrumb.Item href="/blog">
            <Icon type="home" />
          </Breadcrumb.Item>
          <Breadcrumb.Item href="/blog/take-stand">
            <Icon type="book" />
            <span>Take a stand</span>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <Icon type="read" />
            <span>Article</span>
          </Breadcrumb.Item>
        </Breadcrumb>
        <div className="blog-article-bread--social">
          <a href="https://www.facebook.com/casalukeroficial" target="_blank" ><FaFacebookF /></a>
          <a href="https://twitter.com/CasaLuker_" target="_blank" ><FaTwitter /></a>
          <a href="https://www.linkedin.com/company/casa-luker/" target="_blank" ><FaLinkedinIn /></a>
          <a href="" target="_blank" ><FaPrint /></a>
        </div>
      </div>
      <div className="blog-article-content">
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        <div className="blog-article-content--img">
          <img src={plant} alt="Proceso de plantación" />
          <span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr</span>
        </div>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="blog-article-autor">
        <img src={autorPic} alt="Autor" />
        <div className="blog-article-autor--data">
          <h2>NOMBRE APELLIDO</h2>
          <span>DETALLES PROFESIONALES</span>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.</p>
          <a href="https://www.linkedin.com/company/casa-luker/" target="_blank" ><FaLinkedinIn /> Nombre del perfil</a>
        </div>
      </div>
      <div className="blog-article-entries">
        <h2>RECOMMENDED ENTRIES</h2>
        <div className="blog-article-entries--list">
          <Link to="/blog/take-stand/article">
            <img src={plant} alt="cacao" />
            <p>DETALLES DE PUBLICACIÓN</p>
            <h2>Lorem Ipsum</h2>
          </Link>
          <Link to="/blog/take-stand/article">
            <img src={plant} alt="cacao" />
            <p>DETALLES DE PUBLICACIÓN</p>
            <h2>Lorem Ipsum</h2>
          </Link>
          <Link to="/blog/take-stand/article">
            <img src={plant} alt="cacao" />
            <p>DETALLES DE PUBLICACIÓN</p>
            <h2>Lorem Ipsum</h2>
          </Link>
        </div>
      </div>
      <div className="blog-article-comments"></div>
    </div>
  );
}

export default Article;