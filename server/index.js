import express from 'express';

// we'll talk about this in a minute:
const { renderer } = require('./middleware/renderer');

const PORT = 3000;
const path = require('path');
require('es6-promise').polyfill();
require('isomorphic-fetch');
// initialize the application and create the routes
const app = express();
const router = express.Router();
var fs = require('fs');

// root (/) should always serve our server rendered page
//router.use('^/$', serverRenderer);

// anything else should act as our index page
// react-router will take care of everything
//router.use('*', serverRenderer);

// other static resources should just be served as they are
router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' },
));

app.get('/upgradation', function (req, res, next) {
  let pages = [{}];
  let pagesEs = [{}];
  fetch('https://www.back.lukerchocolate.com/wp-json/wp/v2/pages?per_page=100')
    .then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function (response) {
      response.map((data, i) =>
        pages.push(pages[0][data.slug] = data.acf)
      )
      console.log(pages[0]);
      //fs.writeFile('../src/public/locales/en/translation.json', json, 'utf8', callback);
      fs.writeFile('src/public/locales/en/translation.json', JSON.stringify(pages[0]), 'utf8', function (err) {
        if (err) throw err;
        console.log('complete');
      });
    });
  fetch('https://www.back.lukerchocolate.com/es/wp-json/wp/v2/pages?per_page=100')
    .then(function (response) {
      if (response.status >= 400) {
        throw new Error("Bad response from server");
      }
      return response.json();
    })
    .then(function (response) {
      response.map((data, i) =>
        pagesEs.push(pagesEs[0][data.slug] = data.acf)
      )
      console.log(pagesEs[0]);
      //fs.writeFile('../src/public/locales/en/translation.json', json, 'utf8', callback);
      fs.writeFile('src/public/locales/es/translation.json', JSON.stringify(pagesEs[0]), 'utf8', function (err) {
        if (err) throw err;
        console.log('complete es');
      });
    });
  res.send('OK');
});
// tell the app to use the above rules
//app.use(router);
// anything else should act as our index page
// react-router will take care of everything
router.use('*', renderer);
app.use(router);
// start the app
console.log(process.env.PORT);

app.listen(process.env.PORT || PORT, '0.0.0.0', (error) => {
  if (error) {
    return console.log('something bad happened', error);
  }

  console.log("listening on " + PORT + "...");
});