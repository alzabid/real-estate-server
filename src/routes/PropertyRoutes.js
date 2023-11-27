const PropertySchema = require("../models/PropertySchema");

const router = require("express").Router();

router.post("/health/property", async (req, res) => {
  const property = req.body;
  const result = await PropertySchema.insertMany(property);
  res.send(result);
});

router.get("/health/property", async (req, res) => {
  const result = await PropertySchema.find();
  res.send(result);
});
router.get("/health/property/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await PropertySchema.find(query);
  res.send(result);
});

module.exports = router;



