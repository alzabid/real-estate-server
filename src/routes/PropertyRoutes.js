const PropertySchema = require("../models/PropertySchema");

const router = require("express").Router();

router.post("/health/property", async (req, res) => {
  const property = req.body;
  const result = await PropertySchema.insertMany(property);
  res.send(result);
});

router.get("/health/property", async (req, res) => {
  const { search, sort } = req.query;
  const query = {
    title: { $regex: search, $options: "i" },
 
  };
  const sortOptions = {};
  if (sort === "lowToHigh") {
    sortOptions.price = 1;
  } else if (sort === "highToLow") {
    sortOptions.price = -1;
  }
  const result = await PropertySchema.find(query).sort(sortOptions);
  res.send(result);
});

router.get("/health/property/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await PropertySchema.findById(query);
  res.send(result);
});

module.exports = router;

