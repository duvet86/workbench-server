import path from "path";
import express from "express";
import compress from "compression";
import helmet from "helmet";
import logger from "morgan";

import { notFoundhandler, errorhandler } from "./appEvents";

const app = express();

app.use(logger(process.env.NODE_ENV === "production" ? "combined" : "dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// gzip compression
app.use(compress());

// secure apps by setting various HTTP headers
app.use(helmet());

app.use(express.static(path.join(__dirname, "../../public")));

app.use("*", (_, resp) => {
  resp.sendFile(path.join(__dirname, "../../public/index.html"));
});

// catch 404 and forward to error handler
app.use(notFoundhandler);

// error handler
app.use(errorhandler);

export default app;
