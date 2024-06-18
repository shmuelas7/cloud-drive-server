const multer = require("multer");

const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    // let newPath = req.body.path.replace("*", "/");

    cb(null, `root/${req._id}/${req.query.path}`);
  },
  filename: (req, file, cb) => {
    cb(null, `${file.originalname}`);
  },
})
// const upload = multer({
//   dest: 'root'
// })

const upload = multer({ storage });

module.exports = upload; 
