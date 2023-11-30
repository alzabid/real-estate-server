const app = require("./src/app");
const connectDB = require("./src/db/connectDB");



const port = process.env.PORT || 5000;

const main = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

main();
