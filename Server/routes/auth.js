const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
var jwt = require("jsonwebtoken");

const JWT_SECRET = "scienceislife";

// ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    body("name", "name must be atleast 3 characters").isLength({ min: 3 }),
    body("email", "enter a valid email").isEmail(),
    body("password", "password must be atleast min 5 characters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // check whether the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }
      // for password hashing
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      // create a new user
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);
      // console.log(authtoken)
      // res.json(user);
      res.json({ authtoken });
      // catch error
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

// .then((user) => res.json(user))

// .catch((err) => {
//   console.log(err);
//   res.json({
//     error: "please enter a unique value for email",
//     message: err.message,
//   });
// });

// res.send(req.body);
// console.log(req.body);
// const user = User(req.body);
// user.save();
//   res.send(req.body);
//   }
// );

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post(
  "/login",
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "pasword can't be blank").exists(),
  ],

  async (req, res) => {
    // If there are errors, return Bad request and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({error: "please try to login with correct credentials"})
      }
      const passwordCompare = await bcrypt.compare(password,user.password);
      if (!passwordCompare){
        return res.status(400).json({error:"please try to login with correct credentials"});
      }
      const data ={
        user:{
          id:user.id
        }
      }
      const authtoken =jwt.sign(data,JWT_SECRET);
      res.json({authtoken})
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error");
    }
  }
);

module.exports = router;
