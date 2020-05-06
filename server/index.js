import express from 'express';

const bodyParser = require('body-parser');
const { renderer } = require('./middleware/renderer');

const PORT = 3000;
const path = require('path');
require('es6-promise').polyfill();
require('isomorphic-fetch');
// initialize the application and create the routes
const app = express();
const router = express.Router();
var fs = require('fs');

router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }));
/*app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());*/


app.get('/sitemap-hook2', function (req, res, next) {
  //const sitemapEdit = await replaceXml(sitemap)
  res.json({ lala: "ENTRO" }) 
});

router.use('*', renderer);
app.use(router);

app.listen(process.env.PORT || PORT, '0.0.0.0', (error) => {
  if (error) {
    return console.log('something bad happened', error);
  }

  console.log("listening on " + PORT + "...");
});

const replaceXml = (sitemap) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`build/sitemap.xml`, sitemap, 'utf8', (err) => {
      if (err)
        resolve(err)
      else
        resolve({ success: 'OK' })
    });
  })
}