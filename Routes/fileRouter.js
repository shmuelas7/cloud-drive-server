const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploud.js");
const fs = require("fs");

const fileLogic = require("../BL/fileLogic");

router.get("/root/:path?", async (req, res) => {
  {
    try {
      const listfiles = await fileLogic.get_fils(req.query.path);

      res.send(listfiles);
    } catch (err) {
      res.send(err);
    }
  }
});

router.post("/createFolder", function (req, res) {
  try {
    const create = fileLogic.createFolder(req.body.name, req.body.path);
    return create;
  } catch (err) {
    return err;
  }
});
//
router.post("/upload/:path?", upload.single("file"), function (req, res) {
  try {
    res.send(" upload file successfully");
  } catch (err) {
    res.send("upload file failed please try again");
  }
});

router.post("/delFile", function (req, res) {
  try {
    console.log(req.body);
    let res = fileLogic.delFile(req.body.body);
    res.send("aaaa");
  } catch (err) {
    res.send("fff");
  }
});
router.post("/renameFile", function (req, res) {
  try {
    console.log(req.body);
    let res = fileLogic.renameFile(req.body.path, req.body.name);
    res.send("aaaa");
  } catch (err) {
    res.send("fff");
  }
});

router.post("/delFolder", function (req, res) {
  try {
    console.log(req.body);
    let res = fileLogic.delFolder(req.body.body);
    res.send("aaaa");
  } catch (err) {
    res.send("fff");
  }
});

router.get("/download", async function (req, res) {
  const filePath = req.query.path;
  console.log(req.query.path);
  try {
    let file = fs.readFile(filePath, "binary");

    // const fileStream = fs.createWriteStream(file);
    // res.write(file, "binary");
    res.download("./" + filePath);
    // res.end();
    // let res = fileLogic.downloadFile(file);
  } catch {}
});

module.exports = router;
