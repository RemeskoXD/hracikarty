const https = require('https');
https.get('https://www.hracikarty.cz/wp-content/themes/hracikarty/img/logo-hracikarty-140.png', (res) => {
  console.log(res.statusCode);
});
