const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let path = req.params.path;
    console.log(file.file[1], " mm ", "./" + path);
    cb(null, "../" + path);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
