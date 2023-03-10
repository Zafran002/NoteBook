const express = require("express");
const connectToMongo = require("./config");
//  cors is used to fix error , front end se direct api hit nhi kar sakte error aati hai isliye cors use karte hai
const cors = require("cors");
// app.use(cors());
connectToMongo();
const app = express();
const port = 8000;
app.use(express.json());
// Available Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.get("/", (req, res) => res.send("Hello Zafran"));
app.listen(port, () => {
  console.log(`INoteBook app listening at http://localhost:${port}`);
});
