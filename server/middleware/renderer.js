import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

// import our main App component
import App from '../../src/routes';

const path = require("path");
const fs = require("fs");

module.exports.renderer = (req, res, next) => {

  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
  fs.readFile(filePath, 'utf8', async (err, htmlData) => {
    let context = {}
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }

    let stream = ReactDOMServer.renderToNodeStream(
      <StaticRouter location={req.params['0']} context={context}>
        <App />
      </StaticRouter>)

    const helmet = Helmet.renderStatic();
    console.log(helmet.title.toString());
    
    const finishIndex = htmlData.substring(htmlData.lastIndexOf('<div id="root">') + '<div id="root">'.length)

    htmlData = htmlData.replace('<metadynamyc/>', `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    `).substring(0, htmlData.indexOf('<div id="root">')) + '</noscript><div id="root">'

    res.write(htmlData);

    // render the app as a string
    stream.pipe(res, { end: false })

    stream.on('end', () => {
      res.status(200);
      res.end(finishIndex);
    });
    //htmlData = htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    // inject the rendered app into our html and send it
  });
}