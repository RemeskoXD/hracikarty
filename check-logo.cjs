const https = require('https');
const urls = [
  'https://www.hracikarty.cz/wp-content/themes/hracikarty/img/logo.png',
  'https://www.hracikarty.cz/wp-content/themes/hracikarty/img/logo-hracikarty.png',
  'https://www.hracikarty.cz/wp-content/themes/hracikarty/img/logo-hraci-karty.png',
  'https://www.hracikarty.cz/wp-content/uploads/2021/04/logo.png'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(url, res.statusCode);
  });
});
