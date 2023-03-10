const mongoose = require("mongoose");
const mongoURl =
  "mongodb+srv://zafran:zafran786@clusterform.mtfzjnj.mongodb.net/ref_formData?retryWrites=true&w=majority";
// const database = 'Formdata'
const connectToMongo = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(mongoURl, () => {
    console.log("Connected to Mongooes  Successfully!");
  });
};

module.exports = connectToMongo;
// if mongoose not connect automatically so add id address in mongodb atlas  from network access









