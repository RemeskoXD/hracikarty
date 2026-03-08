const https = require('https');
const urls = [
  'https://www.hracikarty.cz/wp-content/themes/hracikarty/img/logo.svg',
  'https://www.hracikarty.cz/wp-content/themes/hracikarty/img/logo-hracikarty.svg',
  'https://www.hracikarty.cz/wp-content/uploads/2021/04/logo.svg',
  'https://www.hracikarty.cz/wp-content/uploads/2023/03/logo.png',
  'https://www.hracikarty.cz/wp-content/uploads/2023/03/logo.svg'
];

urls.forEach(url => {
  https.get(url, (res) => {
    console.log(url, res.statusCode);
  });
});
