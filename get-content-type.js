const http = require("http");
const https = require("https");

function getContentTypeFromResponse ({ res }) {
  const headers = res.headers;
  const contentType = headers['content-type'] || headers['Content-Type'] || headers['CONTENT-TYPE'];
  return contentType;
}

function getContentType ({ debug, url }) {
  return new Promise((resolve, reject) => {
    if (debug) console.log("[get-content-type] starting with url " + url);

    const { protocol } = new URL(url);

    if (protocol === "https:") {
      const req = https.get(url, res => {
        const contentType = getContentTypeFromResponse({ res });
        req.destroy();
        resolve({ contentType, protocol });
      }).on('error', (e) => {
        console.error(e);
        reject(error);
      });
    } else if (protocol === "http:") {
      const req = http.get(url, res => {
        const contentType = getContentTypeFromResponse({ res });
        req.destroy();
        resolve({ contentType, protocol });
      }).on('error', (e) => {
        console.error(e);
        reject(error);
      });
    }
  });
};

module.exports = {
  getContentTypeFromResponse,
  getContentType
};
