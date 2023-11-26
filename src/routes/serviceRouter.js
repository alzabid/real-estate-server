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
  const result = await UserSchema.find();
  res.send(result);
});

router.delete("/health/user/:id", async (req, res) => {
  const id = req.params.id;
  const query = { _id: id };
  const result = await UserSchema.deleteOne(query);
  res.send(result);
});



module.exports = router;

//  app.get("/assignments/:id", async (req, res) => {
//    const id = req.params.id;
//    const query = { _id: new ObjectId(id) };
//    const result = await assignmentCollection.findOne(query);
//    res.send(result);
//  });

//  app.put("/assignments/:id", async (req, res) => {
//    const id = req.params.id;
//    const filter = { _id: new ObjectId(id) };
//    const options = { upsert: true };
//    const updateAssignment = req.body;

//    const assignment = {
//      $set: {
//        title: updateAssignment.title,
//        email: updateAssignment.email,
//        marks: updateAssignment.marks,
//        category: updateAssignment.category,
//        date: updateAssignment.date,
//        description: updateAssignment.description,
//        level: updateAssignment.level,
//        image: updateAssignment.image,
//      },
//    };

//    const result = await assignmentCollection.updateOne(
//      filter,
//      assignment,
//      options
//    );
//    res.send(result);
//  });

//  app.delete("/assignments/:id", async (req, res) => {
//    const id = req.params.id;
//    const query = { _id: new ObjectId(id) };
//    const result = await assignmentCollection.deleteOne(query);
//    res.send(result);
//  });

// app.patch("/submits/:id", async (req, res) => {
//   const id = req.params.id;
//   const filter = { _id: new ObjectId(id) };
//   const updateSubmit = req.body;
//   console.log(updateSubmit);
//   console.log(updateSubmit);
//   const updateDoc = {
//     $set: {
//       status: updateSubmit.status,
//       newMarks: updateSubmit.newMarks,
//       feedback: updateSubmit.feedback,
//     },
//   };
//   const result = await submitCollection.updateOne(filter, updateDoc, updateDoc);
//   res.send(result);
// });
