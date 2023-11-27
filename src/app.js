const express = require("express");
const globalErrorHandler = require("./utils/globalErrorHandler");
const applyMiddleware = require("./middlewares/applyMiddleware");
const connectDB = require("./db/connectDB");
const authRoutes = require("./routes/authRoutes");
const adminRoutes = require("./routes/adminRoutes");
const userRoutes = require("./routes/userRoutes");
const PropertyRoutes = require("./routes/PropertyRoutes");

const app = express();
const port = process.env.PORT || 5000;



applyMiddleware(app);

app.use(authRoutes);
app.use(adminRoutes);
app.use(userRoutes);
app.use(PropertyRoutes);




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
