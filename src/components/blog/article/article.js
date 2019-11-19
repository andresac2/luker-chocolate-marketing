import React from 'react';
import { Breadcrumb, Icon } from 'antd';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaPrint } from 'react-icons/fa';

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
      <div className="blog-article-content">ezsxdrctfvygbuhnijmok,</div>
      <div className="blog-article-autor"></div>
      <div className="blog-article-entries"></div>
      <div className="blog-article-comments"></div>
    </div>
  );
}

export default Article;