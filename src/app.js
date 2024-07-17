import express from "express";
import cors from "cors";
import path from "path";
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

// Serve static files from the 'public/temp' directory
app.use(express.static("public/temp"));
app.use(cookieParser());

/**
 * import routes from index.routes.js
 */

import { router } from "./Routes/index.routes.js";

app.use(router);

export { app };
