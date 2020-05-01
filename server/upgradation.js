require('es6-promise').polyfill();
require('isomorphic-fetch');
var fs = require('fs');

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

getTranslations('en')
getTranslations('es')