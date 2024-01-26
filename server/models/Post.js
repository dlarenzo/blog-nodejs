const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const PostSchema = new Schema({
  title: {
    type: String,
    require: true,
  },
  body: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    defautl: Date.now,
  },
  updatedAt: {
    type: Date,
    defautl: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
