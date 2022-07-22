const fs = require("fs");
var path = require("path");

async function get_fils(path) {
  try {
    fs.readdir(dirPath, (err, files) => {
      return files;
      if (err) {
        throw err;
      }
    });
  } catch (err) {}
}

async function uploadFiles(file, path) {
  try {
  } catch (err) {}
}
console.log(get_fils("root"));
module.exports = { get_fils, uploadFiles };
