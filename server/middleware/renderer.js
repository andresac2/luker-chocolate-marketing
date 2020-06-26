import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from "react-router-dom";
import { Helmet } from "react-helmet";

// import our main App component
import App from '../../src/routes';
import { parseArticle } from '../template';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';

import rootSaga from '../../src/store/Sagas';
import rootReducers from '../../src/store/Reducers';

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

    const sagaMiddleware = createSagaMiddleware();
    let middleware = [sagaMiddleware]
    const store = createStore(
      rootReducers,
      applyMiddleware(...middleware)
    );
    sagaMiddleware.run(rootSaga);      

    // render the app as a string
    let html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <StaticRouter location={req.params['0']} context={context}>
          <App serverProps={serverProps} />
        </StaticRouter>
      </Provider>);
    
    if (context.url) {
      console.log('context', context.url)
      res.redirect(301, context.url);
      return;
    }

    const helmet = Helmet.renderStatic();

    //remove metas default
    
    const metaDefaultInit = htmlData.indexOf('<meta-default-init/>')
    const metaDefaultFinish = htmlData.indexOf('<meta-default-finish/>') + '<meta-default-finish/>'.length
    
    htmlData = htmlData.substring(0, metaDefaultInit) + htmlData.substring(metaDefaultFinish, htmlData.length)
    
    htmlData = htmlData.replace('<metadynamyc/>', `
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      ${helmet.link.toString()}
    `)

    htmlData = htmlData.replace('full-url', req.params['0'])
    htmlData = htmlData.replace(/data-react-helmet="true"/g, ``)
    htmlData = htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    htmlData = htmlData.replace('<div id="root"></div>', `<div id="root">${html}</div>`)

    const sectionInit = htmlData.indexOf('<section class="blog-component ant-layout">') + '<section class="blog-component ant-layout">'.length
    const sectionFinish = htmlData.indexOf('</section>') 
    htmlData = htmlData.substring(0, sectionInit) + serverProps.articles.content + htmlData.substring(sectionFinish, htmlData.length)

    if (html.includes('404') && html.includes('The page you are looking for doesn’t exist')) {
      res.status(404).send(htmlData);
      return
    }

    return res.send(htmlData);
  });
};