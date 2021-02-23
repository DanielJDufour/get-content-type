const { equal } = require('assert').strict;
const { getContentType } = require("./get-content-type");

(async () => {
  const url1 = "https://danieljdufour.com/";
  const {
    contentType: contentType1,
    statusCode: statusCode1
  } = await getContentType({ url: url1 });
  equal(contentType1, "text/html; charset=utf-8");
  equal(statusCode1, 200);

  // make sure it runs with debug on
  await getContentType({ debug: true, url: url1 });

  const url2 = "https://s3-us-west-2.amazonaws.com/planet-disaster-data/hurricane-harvey/SkySat_Freeport_s03_20170831T162740Z3.tif";
  const {
    contentType: contentType2,
    statusCode: statusCode2
  } = await getContentType({ url: url2 });
  equal(contentType2, "image/tiff");
  equal(statusCode2, 200);

  const url3 = "https://data.gov.au/dataset/cdb245d0-fb7a-4521-a3db-4a7abd371704/resource/0a6dbd10-d92e-4bb2-8041-5d2d53cddecb/download/koalatracker_lowprecision.csv";

  const {
    contentType: contentType3NoFollow,
    statusCode: statusCode3NoFollow
  } = await getContentType({ follow: false, url: url3 });
  equal(contentType3NoFollow, "text/plain; charset=utf-8");
  equal(statusCode3NoFollow, 301);

  const {
    contentType: contentType3Follow,
    statusCode: statusCode3Follow
  } = await getContentType({ follow: true, url: url3 });
  equal(contentType3Follow, "text/csv");
  equal(statusCode3Follow, 200);
})();
