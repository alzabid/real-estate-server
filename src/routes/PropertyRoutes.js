const PropertySchema = require("../models/PropertySchema");

const router = require("express").Router();

router.post("/health/property", async (req, res) => {
  const property = req.body;
  const result = await PropertySchema.insertMany(property);
  res.send(result);
});


router.get("/health/properties", async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { email: req.query.email };
  }
  const result = await PropertySchema.find(query);
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

router.patch("/health/property/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const updateSubmit = req.body;
  const updatedDoc = {
    // email: updateSubmit.email,
    // agent_name: updateSubmit.agent_name,
    // agent_photoURL: updateSubmit.agent_photoURL,
    title: updateSubmit.title,
    location: updateSubmit.location,
    price: updateSubmit.price,
    photoURL: updateSubmit.photoURL,
    details: updateSubmit.details,
    status: updateSubmit.status,
  };
  const result = await PropertySchema.findOneAndUpdate(filter, updatedDoc);
  res.send(result);
});

router.delete("/health/property/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await PropertySchema.deleteOne(query);
  res.send(result);
});



module.exports = router;

