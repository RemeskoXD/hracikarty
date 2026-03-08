const https = require('https');
https.get('https://www.hracikarty.cz/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const matches = data.match(/<img[^>]+src="([^">]+logo[^">]+)"/gi);
    console.log(matches);
  });
});
