const fs = require("fs");
var path = require("path");

function get_fils(path, id) {
  try {
    const res = fs.readdirSync(`root/${id}/${path}`);
    return res;
  } catch (err) {
    throw err;
  }
}
async function uploadFiles(file, path, id) {
  try {
  } catch (err) { }
}
async function createFolder(file, path, id) {
  try {
    console.log(file, path, id);
    if (fs.existsSync(`root/${id}/${path}`)) {
      fs.mkdirSync(`root/${id}/${path}/${file}`);
      console.log("success");
    }
  } catch (err) { }
}
async function delFile(path, id) {
  try {
    fs.unlinkSync(`root/${id}/${path}`);
    //file removed
  } catch (err) {
    console.error(err);
  }
}

async function delFolder(path, id) {
  try {
    console.log(path);
    if (fs.existsSync(`root/${id}/${path}`)) fs.rmSync(`root/${id}/${path}`, { recursive: true });
  } catch (err) {
    console.error(err);
  }
}

async function renameFile(path, newName, id) {
  console.log(`root/${id}/${path}`, newName)
  try {
    fs.renameSync(`root/${id}/${path}`, `root/${id}/${newName}`);
    console.log(path);
    //file removed
  } catch (err) {
    console.error(err);
  }
}
async function downloadFile(path, id) {
  console.log(path);
  try {
    // let file = fs.readFileSync(path);
    if (fs.existsSync(`root/${id}/${path}`)) {
      let file = fs.createReadStream(`root/${id}/${path}`);
      let stat = fs.statSync(`root/${id}/${path}`);
      // console.log(stat);
      return [file, stat];
    }
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  get_fils,
  uploadFiles,
  createFolder,
  delFile,
  renameFile,
  delFolder,
  downloadFile,
};
