const mongoose = require("mongoose");

const dbPath = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(dbPath);
    console.log("MongoDB CONNECTED!!!");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const Post = require("../models/Post");

function insertPostData() {
  Post.insertMany([
    {
      title: "Post One",
      body: "This is the first post we will be adding.",
    },
    {
      title: "Post Two",
      body: "This is another post we will be including in our database.",
    },
    {
      title: "Post Three",
      body: "This is a third post we will be including in our database.",
      createdAt: "1-25-2024",
    },
  ]);
}

insertPostData();

module.exports = connectDB;
