const { equal } = require('assert').strict;
const { getContentType } = require("./get-content-type");

(async () => {
  const { contentType: contentType1 } = await getContentType({ url: "https://danieljdufour.com/" });
  console.log("contentType1:", contentType1);
  equal(contentType1, "text/html; charset=utf-8");

  const { contentType: contentType2 } = await getContentType({ url: "https://s3-us-west-2.amazonaws.com/planet-disaster-data/hurricane-harvey/SkySat_Freeport_s03_20170831T162740Z3.tif" });
  equal(contentType2, "image/tiff");
})();
