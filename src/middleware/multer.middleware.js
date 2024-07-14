import multer from "multer";
import { multerError } from "../utils/MulterError.js";
import { ApiError } from "../utils/ApiError.js";
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 10);
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB limit
  fileFilter: (req, file, cb) => {
    const allowedFileTypes = ["image/jpeg", "image/png", "image/gif"];
    if (!allowedFileTypes.includes(file.mimetype)) {
      return cb(new multer.MulterError("Invalid file format"), false);
    }
    cb(null, true);
  },
});
export { upload };
