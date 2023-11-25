const express = require("express");
const globalErrorHandler = require("./utils/globalErrorHandler");
const applyMiddleware = require("./middlewares/applyMiddleware");
const app = express();
const port = process.env.PORT || 5000;

const connectDB = require("./db/connectDB");
const authRoutes = require("./routes/authentication/index");
const serviceRouter = require("./routes/service/index");

applyMiddleware(app);

app.use(authRoutes);
app.use(serviceRouter);

app.get("/health", (req, res) => {
  res.send("Server is running");
});

// handling all (get,post,update,delete.....) errors.
app.all("*", (req, res, next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 404;
  next(error);
});

// error handling middleware
app.use(globalErrorHandler);

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

main();
