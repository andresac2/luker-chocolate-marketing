import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

// import our main App component
import App from '../../src/routes';

const path = require("path");
const fs = require("fs");

module.exports.renderer = (req, res, url) => {

  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
  fs.readFile(filePath, 'utf8', async (err, htmlData) => {
    let context = {}
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }

    let serverProps = {
      url: req.params['0'] 
    }

    if(req.params['0'].includes('/blog')){
      serverProps.articles = []
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
    // inject the rendered app into our html and send it
    return res.send(htmlData);
  });
}