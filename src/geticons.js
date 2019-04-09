const fs = require('fs');
const request = require('request');
const API = 'https://script.google.com/macros/s/AKfycbwGCJ3sCW9z-f2DSyjwlBVcYL2r1MIvJSirRJd7qd8G40Va-X4/exec';


request({
  followAllRedirects: true,
  url: API
}, function (error, response, body) {
  if (!error) {
    const data = JSON.parse(response.body);

    Object.keys(data).forEach((cls, i) => {
      Object.keys(data[cls].specs).forEach((spec, j) => {
        Object.keys(data[cls].specs[spec]).forEach((slot, k) => {
          const slotItems = data[cls].specs[spec][slot];
          if (Array.isArray(slotItems)) {
            for (const index in slotItems) {
              const path = __dirname + '/../public/img/icon/' + slotItems[index].icon + '.jpg';
              if (!fs.existsSync(path)) {
                request(
                  'https://wow.zamimg.com/images/wow/icons/large/' + slotItems[index].icon + '.jpg'
                ).pipe(fs.createWriteStream(path)).on('close', function() {
                  console.log('downloaded', slotItems[index].name);
                });
              }
            }
          }
        });
      });
    });
  }
});