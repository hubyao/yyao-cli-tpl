const fs = require('fs');
const co = require('co');
const path = require('path');
const oss = require('ali-oss');
// console.log('__dirname : ' +))
const projectName =  path.basename(__dirname)
const store = oss({
  accessKeyId: process.env.NODE_YYAO_CLI_ACCESSKEY_ID,
  accessKeySecret: process.env.NODE_YYAO_CLI_ACCESS_KEY_SECRET,
  bucket: process.env.NODE_YYAO_CLI_BUCKET,
  region: process.env.NODE_YYAO_CLI_REGION,
});
 
(() => {
  const root = path.resolve(__dirname, './dist');
  const files = [];
  function readDirSync(p) {
    const pa = fs.readdirSync(p);
    pa.forEach((e) => {
      const cur_path = `${p}/${e}`;
      const info = fs.statSync(cur_path);
      if (info.isDirectory()) {
        readDirSync(cur_path);
      } else {
        files.push(cur_path);
      }
    });
  }
  readDirSync(root);
  co(function* () {
    for (let index = 0; index < files.length; index += 1) {
      const e = files[index];
      const result = yield store.put(projectName+e.replace(root, ''), e);
      console.log(result);
    }
  });
})();
 