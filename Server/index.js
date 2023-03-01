const express = require("express");
const connectToMongo = require("./config");
// const cors = require("cors");
// app.use(cors());
connectToMongo();
const app = express();
const port = 8000;
app.use(express.json());
// Available Routes
app.use("/api/auth", require("./routes/auth"));
// app.use("/api/notes", require("./routes/notes"));
app.use("/api/formroute", require("./routes/formroute"));

app.get("/", (req, res) => res.send("Hello Zafran"));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// const express = require('express');
// const router = express.Router();
// const FormModel = require('../models/form.model');

// router.get('/form-data', async (req, res) => {
//   try {
//     const formData = await FormModel.find();
//     res.json(formData);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: 'Server Error' });
//   }
// });

// module.exports = router;


// git init.
// git add .
// git commit -m "Add all my files"
// git pull origin master.
// git push origin master.