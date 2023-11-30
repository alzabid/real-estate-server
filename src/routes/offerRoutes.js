const OfferSchema = require("../models/OfferSchema");

const router = require("express").Router();

router.post("/health/offer", async (req, res) => {
  const offer = req.body;
  const result = await OfferSchema.insertMany(offer);
  res.send(result);
});



router.get("/health/offer", async (req, res) => {
  let query = {};
  if (req.query?.email) {
    query = { email: req.query.email };
  }
  const result = await OfferSchema.find(query);
  res.send(result);
});

router.patch("/health/offer/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const updateSubmit = req.body;
  const updatedDoc = {
    status: updateSubmit.status,
  };
  const result = await OfferSchema.findOneAndUpdate(filter, updatedDoc);
  res.send(result);
});
router.get("/health/offer/:id", async (req, res) => {
  const id = req.params.id;
  const filter = { _id: id };
  const result = await OfferSchema.findById(filter);
  res.send(result);
});

module.exports = router;
