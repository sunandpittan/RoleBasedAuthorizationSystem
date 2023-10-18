const teammember = require("../teammemberSchema");

const getTeammembers = async (req, res) => {
  const getTms = await teammember.find();
  res.json(getTms);
};

module.exports = getTeammembers;
