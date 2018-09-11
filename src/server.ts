import express, { Request, Response, NextFunction } from "express";
import createError from "http-errors";
import path from "path";
import logger from "morgan";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../public")));

app.use("*", (_, resp) => {
  resp.sendFile(path.join(__dirname, "../public/index.html"));
});

// catch 404 and forward to error handler
app.use((_, __, next) => {
  next(createError(404));
});

// error handler
app.use((err: any, req: Request, res: Response, _: NextFunction) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: err
  });
});

export default app;
