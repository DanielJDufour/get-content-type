# get-content-type
> Gets the Content Type for a URL

# Features
- Zero Dependencies
- Works even when HEAD requests are blocked (because it uses GET)
- Avoids downloading the whole file
- Works on HTTP and HTTPS
- Works only in NodeJS

# Install
```bash
npm install get-content-type
```

# Usage
```js
const url = "https://s3-us-west-2.amazonaws.com/planet-disaster-data/hurricane-harvey/SkySat_Freeport_s03_20170831T162740Z3.tif";
const { contentType } = await getContentType({ url });
// contentType is "image/tiff"
```
