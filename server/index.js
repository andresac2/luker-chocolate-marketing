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

getTranslations('en')
getTranslations('es')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/sitemap-hook', async (req, res, next) => {
  const { sitemap } = req.body
  const sitemapEdit = await replaceXml(sitemap)
  res.send("ENTRO") 
});

router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }));
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
    fs.writeFile(`public/sitemap.xml`, sitemap, 'utf8', (err) => {
      if (err)
        resolve(err)
      else
        resolve({ success: 'OK' })
    });
  })
}

function getTranslations(lng) {
  return new Promise((resolve) => {
    let pages = [{}];
    fetch(`https://www.back.lukerchocolate.com${lng === 'en' ? '' : ('/' + lng)}/wp-json/wp/v2/pages?per_page=100`)
      .then((response) => response.json())
      .then((response) => {
        response.map((data, i) => pages.push(pages[0][data.slug] = data.acf))

        fs.writeFile(`src/locales/${lng}/translation.json`, JSON.stringify(pages[0]), 'utf8', (err) => {
          if (err)
            throw err
          else
            resolve({ success: 'OK' })
        });
      });
  })
}