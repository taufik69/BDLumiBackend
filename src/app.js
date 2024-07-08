import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

/**
 * todo : All middleware
 * *motive: Middleware are used to configuration
 * @param ({corsOption})
 */
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

/**
 * Todo : This middleware express.json are used to parse from data
 * @param({limit})
 */

app.use(express.json({ limit: process.env.REQUESTED_DATA_SIZE }));

/**
 * Todo : This middleware are parse search string and like extract data from url
 */
app.use(
  express.urlencoded({ extended: true, limit: process.env.REQUESTED_DATA_SIZE })
);
app.use(express.static("public"));
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("hello taufik how are you");
});
export { app };
