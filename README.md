# get-content-type
> Gets the Content Type for a URL

# Features
- Avoids downloading the whole file
- Works with HTTP and HTTPS
- Zero Dependencies
- Follows 301 Redirects
- Works even when HEAD requests are blocked (because it uses GET)

# Limitations
- Only works in NodeJS

# Install
```bash
npm install get-content-type
```

# Usage
```js
const { getContentType } = require('get-content-type');

const url = "https://s3-us-west-2.amazonaws.com/planet-disaster-data/hurricane-harvey/SkySat_Freeport_s03_20170831T162740Z3.tif";
const { contentType } = await getContentType({ url });
// contentType is "image/tiff"
```
