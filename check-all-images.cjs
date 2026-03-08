const https = require('https');
https.get('https://www.hracikarty.cz/', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => {
    const matches = data.match(/<img[^>]+src="([^">]+)"/gi);
    console.log(matches.filter(m => m.includes('logo') || m.includes('hraci')));
  });
});
