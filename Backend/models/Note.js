const mongoose = require("mongoose");
const { Schema } = mongoose;
const NotesSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    // agar unique true hatane ke bad bhi descreption nhi  add ho or erro batae to database se Note ka collection delete kr de to shi ho jaega
  },

  tag: {
    type: String,
    required: "General",
  },
  date: {
    type: Date,
    default: Date.now,
  },
  buff: Buffer,
});
module.exports = mongoose.model("notes", NotesSchema);
