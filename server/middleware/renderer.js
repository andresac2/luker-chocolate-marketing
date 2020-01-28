import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

// import our main App component
import App from '../../src/routes';
import { parseArticle } from '../template';

const path = require("path");
const fs = require("fs");

module.exports.renderer = (req, res) => {

  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', async (err, htmlData) => {
    let context = {}
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }

    let serverProps = {
      url: req.params['0'],
      articles: {},
      articlesES: {}
    }

    if (req.params['0'].includes('/blog')) {
      const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/posts?per_page=100');
      const responseEs = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/posts?per_page=100');
      serverProps.articles = await parseArticle(await response.json(), req.params[0], await responseEs.json());
    }

    // render the app as a string
    let html = ReactDOMServer.renderToString(
      <StaticRouter location={req.params['0']} context={context}>
        <App serverProps={serverProps} />
      </StaticRouter>);

    if (context.url) {
      res.redirect(301, context.url);
      return;
    }

    const helmet = Helmet.renderStatic();

    htmlData = htmlData.replace('<metadynamyc/>', `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    `)

    htmlData = htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    
    if(html.includes('404') && html.includes('The page you are looking for doesn’t exist')){
      res.status(404).send(htmlData);
      return
    } 

    return res.send(htmlData);
  });
};