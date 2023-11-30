// const verifyToken = require("../../../middlewares/verifyToken");
// const findAll = require("../api/service/controllers/findAll");
const UserSchema = require("../models/UserSchema");

const router = require("express").Router();
// router.post('/logout',logout)
// router.get("/services", findAll);

router.post("/health/user", async (req, res) => {
  const user = req.body;
  const query = { email: user.email };
  const existingUser = await UserSchema.findOne(query);
  if (existingUser) {
    return res.send({ message: "user already exists", insertedId: null });
  }
  const result = await UserSchema.insertMany(user);
  res.send(result);
});

router.get("/health/user", async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { email: req.query.email };
  }
  const result = await UserSchema.find(query);
  res.send(result);
});

router.patch("/health/user/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const updateSubmit = req.body;
  const updatedDoc = {
    name: updateSubmit.name,
    photoURL: updateSubmit.photoURL,
  };
  const result = await UserSchema.findOneAndUpdate(filter, updatedDoc);
  res.send(result);
});

router.delete("/health/user/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await UserSchema.deleteOne(query);
  res.send(result);
});



module.exports = router;

