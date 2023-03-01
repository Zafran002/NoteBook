const express = require("express");
const router = express.Router();
const Form = require("../models/Form");

router.post("/", (req, res) => {
  // console.log(req.body);
  const formdata = Form(req.body);
  formdata.save()
  res.send(req.body);
  console.log(req.body);
});
module.exports = router;
