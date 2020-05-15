import express from 'express';
import { getTranslations } from './upgradation'

const { spawn } = require('child_process');
require('es6-promise').polyfill();
require('isomorphic-fetch');

const bodyParser = require('body-parser');
const { renderer } = require('./middleware/renderer');
const PORT = 3000;
const path = require('path');
const app = express();
const router = express.Router();
var fs = require('fs');

router.use(express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '30d' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/sitemap-hook', async (req, res, next) => {
  const { sitemap } = req.body;

  const sitemapEdit = await replaceXml(sitemap)
  res.send(sitemapEdit)
});

app.get('/upgradation', async (req, res, next) => {
  await getTranslations('en')
  await getTranslations('es')
  const build = spawn('npm', ['run', 'build']);
  let response = 'stdout: ';
  build.stdout.on('data', (data) => {
    response += `${data}`;
    console.log(`stdout: ${data}`);
  });
  build.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    res.send(response);
  });
});

router.use('*', renderer);
app.use(router);

app.listen(process.env.PORT || PORT, '0.0.0.0', (error) => {
  if (error)
    return console.log('something bad happened', error);

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