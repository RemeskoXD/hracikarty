const https = require('https');
https.get('https://mycards.cz/', { rejectUnauthorized: false }, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const matches = data.match(/<img[^>]+src="([^">]+)"/gi);
    console.log(matches);
  });
});
