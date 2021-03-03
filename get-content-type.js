const http = require("http");
const https = require("https");

function getContentType ({ debug, destroy=true, follow=false, highWaterMark=1024, url }) {
  return new Promise((resolve, reject) => {
    if (debug) console.log("[get-content-type] starting with url " + url);

    const { protocol } = new URL(url);

    const httpx = protocol === "https:" ? https : http;

    const req = httpx.get(
      url,
      { highWaterMark },
      res => {
      const { headers, statusCode } = res;

      if (debug) console.log("[get-content-type] statusCode:", statusCode);
      if (follow && statusCode === 301) {
        const loc = headers.location || headers.LOCATION || headers.Location;
        if (debug) console.log("[get-content-type] loc:", loc);
        req.destroy();
        if (debug) console.log("[get-content-type] destroyed req");
        resolve(getContentType({ debug, destroy, follow, url: loc }));
      }

      const contentType = headers['content-type'] || headers['Content-Type'] || headers['CONTENT-TYPE'];
      if (debug) console.log("[get-content-type] contentType:", contentType);

      if (destroy) req.destroy();
      resolve({ contentType, destroy, follow, headers, protocol, req, statusCode, url });
    }).on('error', (e) => {
      console.error(e);
      reject(error);
    });
  });
};

module.exports = { getContentType };
