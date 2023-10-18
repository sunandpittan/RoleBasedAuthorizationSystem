const express = require("express");
const router = express.Router();
const signIn = require("../Controller/signIn");
const signUp = require("../Controller/signUp");
const auth = require("../Middlewares/auth");
const getBooks = require("../Controller/getBooks");
const getTeammembers = require("../Controller/getTeammembers");

router.post("/signin", signIn);
router.post("/signup", signUp);
router.get("/books", auth, getBooks);
router.get("/teammembers", auth, getTeammembers);

module.exports = router;
