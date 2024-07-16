import multer from "multer";
import fs from "fs";
import path from "path";
import chalk from "chalk";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const finalPath = path.join("./public/temp/", req.UploadDesnitation);

    fs.mkdir(finalPath, { recursive: true }, (err) => {
      if (err) {
        console.log(
          chalk.bgRedBright("Multer file upload Path making failed", err)
        );
      }
      cb(null, `${finalPath}`);
    });
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB limit
  fileFilter: (req, file, cb) => {
    console.log("file.fieldname from fileFilter", file.fieldname);
    const allowedFileTypes = [
      "image/jpeg",
      "image/png",
      "image/gif",
      "image/jpg",
    ];
    if (!allowedFileTypes.includes(file.mimetype)) {
      return cb(new multer.MulterError("Invalid file format"), false);
    }
    cb(null, true);
  },
});

export { upload };
