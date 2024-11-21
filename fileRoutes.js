// const express = require("express");
// const { uploadFile } = require("../controllers/fileController");
// const router = express.Router();

// router.post("/upload", uploadFile);

// module.exports = router;

const express = require("express");
const multer = require("multer");
const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Directory to save files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage });

// File upload route
router.post("/upload", upload.single("file"), (req, res) => {
  if (req.file) {
    res.status(200).json({ message: "File uploaded successfully", file: req.file });
  } else {
    res.status(400).json({ error: "File upload failed" });
  }
});

module.exports = router;

