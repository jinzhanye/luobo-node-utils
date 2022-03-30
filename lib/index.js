const { readFile } = require("fs/promises");
const fs = require("fs");
const path = require("path");

function readFileList(dir, filesList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(item => {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      readFileList(path.join(dir, item), filesList);
    } else {
      filesList.push(path.resolve(__dirname, fullPath));
    }
  });

  return filesList;
}

module.exports = {
  batchReadFile(dir) {
    const filesList = readFileList(dir);

    return Promise.all(
      filesList.map(async filePath => {
        return {
          name: filePath,
          content: await readFile(filePath, {
            encoding: "utf-8"
          })
        };
      })
    );
  }
};
