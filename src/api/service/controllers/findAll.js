const findAllServices = require("../../../lib/service/findAllServices");

const findAll = async (req, res, next) => {
  
  try {
    const filter = req.query;

    const result = await findAllServices(filter);
    res.send(result);
  } catch (err) {
    next(err);
  }
};

module.exports = findAll;
