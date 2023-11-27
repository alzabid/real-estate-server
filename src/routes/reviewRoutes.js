const ReviewSchema = require("../models/ReviewSchema");

const router = require("express").Router();

router.post("/health/review", async (req, res) => {
  const wishlist = req.body;
  const query = { property_id: wishlist.property_id };
  const existingUser = await ReviewSchema.findOne(query);
  if (existingUser) {
    return res.send({ message: " already reviewed ", insertedId: null });
  }
  const result = await ReviewSchema.insertMany(wishlist);
  res.send(result);
});

module.exports = router;
