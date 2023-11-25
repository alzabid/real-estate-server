
// const verifyToken = require("../../../middlewares/verifyToken");
const findAll = require("../../api/service/controllers/findAll");

const router = require("express").Router();

router.get("/services", findAll);
// router.post('/logout',logout)

module.exports = router;
