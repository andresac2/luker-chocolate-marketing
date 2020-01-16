import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

// import our main App component
import App from '../../src/routes';

const path = require("path");
const fs = require("fs");

export default (req, res, next) => {

  // point to the html file created by CRA's build tool
  const filePath = path.resolve(__dirname, '..', '..', 'build', 'index.html');
  fs.readFile(filePath, 'utf8', (err, htmlData) => {
    let context = {}
    if (err) {
      console.error('err', err);
      return res.status(404).end()
    }
    // app.get('*', (req, res) => {
    //   let context = {}
    //
    //   let html = ReactDOMServer.renderToString(
    //     <StaticRouter location={req.url} context={context}>
    //       <App /> (includes the RouteStatus component below e.g. for 404 errors)
    //     </StaticRouter>
    //   );  

    // render the app as a string
    let html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>);

    if (context.url) {
      res.redirect(301, context.url);
      return;
    }

    const helmet = Helmet.renderStatic();

    const helmetHtml = `
    <!doctype html>
    <html ${helmet.htmlAttributes.toString()}>
        <head>
            ${helmet.title.toString()}
            ${helmet.meta.toString()}
            ${helmet.link.toString()}
        </head>
        <body ${helmet.bodyAttributes.toString()}>
          <div id="root"></div>
        </body>
    </html>
`;

    // inject the rendered app into our html and send it
    return res.send(
      htmlData.replace(
        '<html_data_attributes/>',
        `${helmet.title.toString()}
         ${helmet.meta.toString()}
         ${helmet.link.toString()}`
      ),
    );
  });
}