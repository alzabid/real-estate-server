const findAllServices = require("../../../lib/service/findAllServices");

const findAll = async (req, res, next) => {
  try {
    const filter = req.query;

    const Services = await findAllServices(filter);
    res.send(Services);
  } catch (err) {
    next(err);
  }
};

module.exports = findAll;
