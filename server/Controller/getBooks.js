const book = require("../bookSchema");

const getBooks = async (req, res) => {
  const getBks = await book.find();
  res.json(getBks);
};

module.exports = getBooks;
