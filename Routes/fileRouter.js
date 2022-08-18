const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploud.js");

const fileLogic = require("../BL/fileLogic");

router.get("/root/:path?", async (req, res) => {
  {
    try {
      console.log(req.query.path);
      const listfiles = await fileLogic.get_fils(req.query.path);

      res.send(listfiles);
    } catch (err) {
      res.send(err);
    }
  }
});

router.post("/createFolder", function (req, res) {
  try {
    console.log(req.body.name);
    const create = fileLogic.createFolder(req.body.name, req.body.path);
    return create;
  } catch (err) {
    return err;
  }
});

router.post("/upload/:path?", upload.single("image"), function (req, res) {
  const uploadFiles = fileLogic.uploadFiles(req.body, req.query.path);
});

module.exports = router;
