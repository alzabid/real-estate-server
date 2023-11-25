const Service = require("../../models/service");

const findAllServices = async (filter) => {
  const query = {
    title: { $regex: filter.search, $options: "i" },
  };

  const options = {
    sort: {
      price: filter.sort === "asc" ? 1 : -1,
    },
  };

  const cursor = await Service.find(query, "_id title price img").sort(
    options.sort
  );

  return cursor;
};

module.exports = findAllServices;
