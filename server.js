// server15.js
const express = require("express");
const multer = require("multer");
const rateLimit = require("express-rate-limit");

const app = express();
const upload = multer({ dest: "uploads/" });

app.use(rateLimit({ windowMs: 60000, max: 5 }));

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded: " + req.file.originalname);
});

app.listen(3000, () => console.log("File Upload + Rate Limiting API running..."));
