const express = require("express");
const router = express.Router();
const upload = require("../middleware/uploud.js");

const fileLogic = require("../BL/fileLogic");

router.get("/root/:path?", async (req, res) => {
  {
    try {
      const listfiles = fileLogic.get_fils(req.params.path);
      res.send(listfiles);
    } catch {
      res.send("errrrrrr");
    }
  }
});

router.post("/upload/:path?", upload.single("image"), function (req, res) {
  const uploadFiles = fileLogic.uploadFiles(req.body, req.query.path);
});

module.exports = router;
