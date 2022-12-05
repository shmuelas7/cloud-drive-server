const fs = require("fs");
var path = require("path");

async function get_fils(path) {
  try {
    const res = fs.readdirSync(path);
    return res;
  } catch (err) {
    throw err;
  }
}
async function uploadFiles(file, path) {
  try {
  } catch (err) {}
}
async function createFolder(file, path) {
  try {
    console.log(path + "/" + file);
    if (fs.existsSync(path)) {
      fs.mkdirSync(path + "/" + file);
      console.log("succsess");
    }
  } catch (err) {}
}
async function delFile(path) {
  try {
    fs.unlinkSync(path);
    //file removed
  } catch (err) {
    console.error(err);
  }
}

async function delFolder(path) {
  try {
    console.log("sssss");
    if (fs.existsSync(path)) fs.rmSync(path, { recursive: true });
  } catch (err) {
    console.error(err);
  }
}

async function renameFile(path, newName) {
  try {
    fs.renameSync(path, newName);
    console.log(path);
    //file removed
  } catch (err) {
    console.error(err);
  }
}
// async function downloadFile(path) {
//   console.log(path);
//   try {
//     const download_write_stream = fs.createWriteStream(path);
//     const body = await response.body;
//     await body.pipeTo(stream);
//   } catch (error) {
//     console.log(error);
//   }
// }

module.exports = {
  get_fils,
  uploadFiles,
  createFolder,
  delFile,
  renameFile,
  delFolder,
  // downloadFile,
};
