const UserSchema = require("../models/UserSchema");

const router = require("express").Router();

router.patch("/health/user/admin/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const updatedDoc = {
    role: "Admin",

  };
  const result = await UserSchema.findOneAndUpdate(filter, updatedDoc);
  res.send(result);
});
router.patch("/health/user/agent/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const updatedDoc = {
    role: "Agent",
  };
  const result = await UserSchema.findOneAndUpdate(filter, updatedDoc);
  res.send(result);
});
router.patch("/health/user/fraud/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const updatedDoc = {
    status: "Fraud",
  };
  const result = await UserSchema.findOneAndUpdate(filter, updatedDoc);
  res.send(result);
});



module.exports = router;