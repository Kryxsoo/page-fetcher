const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const path = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.log('error: ', error);
  }
  if (response) {
    console.log('response: ', response.statusCode)
  }
  fs.writeFile(`${path}`, body, error => {
    if (error) {
      console.log("error: ", error);
    } else {
      const fileSize = Buffer.byteLength(body);
      console.log(`Downloaded and saved ${fileSize} bytes to ${path}`);
    }
  });
});