const { batchReadFile } = require("../index");
const path = require("path");

batchReadFile(path.resolve(__dirname, "./files")).then(files => {
  console.log(files);
});
