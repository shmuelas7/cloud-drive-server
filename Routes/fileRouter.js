const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploud.js");

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

module.exports = router;
