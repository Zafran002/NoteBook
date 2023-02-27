const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/User");
// const User = require("../models/User");

// create a user using: POST "/api/auth/". Doesn't require auth
router.post(
  "/",
  [
    body("name").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "password must be atleast min 5 characters").isLength({
      min: 5,
    }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      password: req.body.password,
      email: req.body.email,
    })
      .then((user) => res.json(user))
      .catch((err) => {
        console.log(err);
        res.json({ error: "please enter a unique value for email" });
      });

    res.send(req.body);
    //   console.log(req.body);
    //   const user = User(req.body);
    //   user.save();
    //   res.send(req.body);
  }
);
module.exports = router;
