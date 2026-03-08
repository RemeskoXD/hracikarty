const https = require('https');
https.get('https://mycards.cz/', { rejectUnauthorized: false }, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    console.log(data.substring(0, 1000));
  });
});
