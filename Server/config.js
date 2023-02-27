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
















// const mongoose = require("mongoose");

// mongoose
//   .connect(
//     "mongodb+srv://saurabh123:123123123@cluster0.pjsaz.mongodb.net/blog_data?retryWrites=true&w=majority"
//   )
//   .then(() => console.log("Connected to Mongooes  Successfully!"));

// const {MongoClient} = require('mongodb')
// const url= 'mongodb://localhost:27017';
// const databaseName='e-comm'
// const client= new MongoClient(url);

// async function getData()
// {
//     let result = await client.connect();
//     db= result.db(databaseName);
//     collection = db.collection('products');
//     let data = await collection.find({}).toArray();
//     console.log(data)

// }

// getData();
