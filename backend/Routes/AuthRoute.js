const { Signup } = require("../Controller/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);

module.exports = router;