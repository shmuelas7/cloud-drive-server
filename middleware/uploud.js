const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let newPath = req.params.path.replace("*", "/");

    cb(null, newPath);
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
