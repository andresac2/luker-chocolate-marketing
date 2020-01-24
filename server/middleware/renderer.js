import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
var i18next = require("i18next");
var middleware = require("i18next-express-middleware");

// import our main App component
import App from '../../src/routes';
import { parseArticle } from '../template';

const path = require("path");
const fs = require("fs");

const writeContentHtml = (res, stream) => {
  return new Promise((resolve, reject) => {
    stream.on('data', (chunk) => res.write(chunk))
      .on('error', (err) => reject(err))
      .on('end', () => resolve());
  })
}

module.exports.renderer = (req, res, url) => {

  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');

  fs.readFile(filePath, 'utf8', async (err, htmlData) => {
    let context = {}
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }

    let serverProps = { articles: {}, articlesES: {} }

    console.log("req", req.params['0'])

    if (req.params['0'].includes('[object Object]')) {
      return res.status(200).end();
    }

    if (req.params['0'].includes('/blog')) {
      const response = await fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/posts?per_page=100');
      const responseEs = await fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/posts?per_page=100');
      serverProps.articles = await parseArticle(await response.json(), req.params[0], await responseEs.json());
    }

    let stream = ReactDOMServer.renderToNodeStream(
      <StaticRouter location={req.params['0']} context={context}>
        <App serverProps={serverProps} />
      </StaticRouter>)

    const helmet = Helmet.renderStatic();

    const finishIndex = htmlData.substring(htmlData.lastIndexOf('<div id="root">') + '<div id="root">'.length)

    htmlData = htmlData.substring(0, htmlData.indexOf('<div id="root">'))
      .replace('<metadynamyc/>', `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    `)

    res.write(htmlData);

    // render the app as a string
    await writeContentHtml(res, stream)

    stream.on('end', () => {
      res.status(200);
      res.end(finishIndex);
    });
  });
};