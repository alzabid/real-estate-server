const ReviewSchema = require("../models/ReviewSchema");

const router = require("express").Router();

router.post("/health/review", async (req, res) => {
  const review = req.body;
  const result = await ReviewSchema.insertMany(review);
  res.send(result);
});


router.get("/health/review", async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { email: req.query.email };
  }
  const result = await ReviewSchema.find(query);
  res.send(result);
});

router.delete("/health/review/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await ReviewSchema.deleteOne(query);
  res.send(result);
});

module.exports = router;
