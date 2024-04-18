const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");
const signupSchema = require("../validators/auth-validator");
const loginSchema = require("../validators/auth-validator");
const validate = require("../middleware/validate-middleware");
const authMiddleware = require("../middleware/auth-middleware");
// const { register } = require('../controllers/auth-controller');

// router.get("/", (req, res) => {
//     res.status(200).send("welcome taiyyab bhai");
// });

router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(signupSchema), authcontrollers.register);
router.route("/login").post(validate(loginSchema), authcontrollers.login);

router.route("/user").get(authMiddleware, authcontrollers.user);


module.exports = router;
