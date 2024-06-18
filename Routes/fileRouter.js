const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload.js");
const fs = require("fs");

const fileLogic = require("../BL/fileLogic");

router.get("/root", async (req, res) => {
  console.log("get file list")
  try {
    const listfiles = await fileLogic.get_fils(req.query.path, req._id);

    res.send(listfiles);
  } catch (err) {
    res.send(err);
  }
});

router.post("/createFolder", function (req, res) {
  console.log("createFolder")
  try {
    const create = fileLogic.createFolder(req.body.name, req.body.path, req._id);
    res.send().statusCode(200)
  } catch (err) {
    return err;
  }
});
//
router.post("/upload", upload.single("file"), function (req, res) {
  console.log("upload")
  console.log(req.file)
  try {
    res.send("success").statusCode(200)
  } catch (err) {
    return err;
  }

});

router.post("/delFile", function (req, res) {
  console.log("delFile")
  try {
    console.log(req.body);
    let res = fileLogic.delFile(req.body.path, req._id);
    res.send("aaaa");
  } catch (err) {
    res.send("fff");
  }
});
router.post("/renameFile", function (req, res) {
  console.log("renameFile")
  try {
    console.log(req.body);
    let res = fileLogic.renameFile(req.body.path, req.body.name, req._id);
    res.send("aaaa");
  } catch (err) {
    res.send("fff");
  }
});

router.post("/delFolder", function (req, res) {
  console.log("delFolder")
  try {
    console.log(req.body.body);
    let res = fileLogic.delFolder(req.body.body, req._id);
    res.send("aaaa");
  } catch (err) {
    res.send("fff");
  }
});

router.get("/download", async function (req, res) {
  const filePath = req.query.path;
  console.log(req.query.path);
  try {
    // let file = fileLogic.downloadFile(filePath);
    // console.log(file);
    // res.setHeader("Content-Length", stat.size);
    // res.setHeader("Content-Type", "application/pdf");
    // res.setHeader("Content-Disposition", "attachment; filename=quote.pdf");
    // file.pipe(file);
    res.download(filePath);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
