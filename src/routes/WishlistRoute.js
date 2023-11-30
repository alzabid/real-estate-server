const WishlishSchema = require("../models/WishlistSchema");


const router = require("express").Router();
router.post("/health/wishlist", async (req, res) => {
  const wishlist = req.body;
//   const query = { property_id: wishlist.property_id };
//   const existingUser = await WishlishSchema.findOne(query);
//   if (existingUser) {
//     return res.send({ message: "property already exists", insertedId: null });
//   }
  const result = await WishlishSchema.insertMany(wishlist);
  res.send(result);
});

router.get("/health/wishlist", async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { email: req.query.email };
  }
  const result = await WishlishSchema.find(query);
  res.send(result);
});

router.get("/health/wishlist/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await WishlishSchema.findById(query);
  res.send(result);
});

router.delete("/health/wishlist/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await WishlishSchema.deleteOne(query);
  res.send(result);
});



module.exports = router;