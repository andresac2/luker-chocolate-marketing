import express from 'express';

const { spawn } = require('child_process');
const { renderer } = require('./middleware/renderer');

const PORT = 3000;
const path = require('path');
require('es6-promise').polyfill();
require('isomorphic-fetch');
// initialize the application and create the routes
const app = express();
const router = express.Router();
var fs = require('fs');

// other static resources should just be served as they are
router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' },
));

app.get('/upgradation', function (req, res, next) {
  getTranslations('en')
  getTranslations('es')
  const build = spawn('npm', ['run', 'build']);
  let response = 'stdout: ';
  build.stdout.on('data', (data) => {
    response += `${data}

    `;
    console.log(`stdout: ${data}`);
  });
  build.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
    res.send(response);
  });
});

function getTranslations(lng) {
  return new Promise((resolve) => {
    let pages = [{}];
    fetch(`https://www.back.lukerchocolate.com${lng === 'en' ? '' : ('/' + lng)}/wp-json/wp/v2/pages?per_page=100`)
      .then((response) => response.json())
      .then((response) => {
        response.map((data, i) => pages.push(pages[0][data.slug] = data.acf))

        //fs.writeFile('../src/public/locales/en/translation.json', json, 'utf8', callback);
        fs.writeFile(`src/locales/${lng}/translation.json`, JSON.stringify(pages[0]), 'utf8', (err) => {
          if (err)
            throw err
          else
            resolve({ success: 'OK' })
        });
      });
  })
}

router.use('*', renderer);
app.use(router);
// start the app

app.listen(process.env.PORT || PORT, '0.0.0.0', (error) => {
  if (error) {
    return console.log('something bad happened', error);
  }

  console.log("listening on " + PORT + "...");
});