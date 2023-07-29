const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Post = require('./../../models/postModel');
const Comment = require('./../../models/commentModel');
const User = require('./../../models/userModel');
const Follow=require("./../../models/followModel");

dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => console.log('DB connection successful!'));

// READ JSON FILE
// const posts = JSON.parse(fs.readFileSync(`${__dirname}/posts.json`, 'utf-8'));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, 'utf-8'));
// const follow = JSON.parse(fs.readFileSync(`${__dirname}/follow.json`, 'utf-8'));

// const comments = JSON.parse(
//   fs.readFileSync(`${__dirname}/Comments.json`, 'utf-8')
// );

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    // await Post.create(posts);
    await User.create(users, { validateBeforeSave: false });
    // await Follow.create(follow, { validateBeforeSave: false });

    // await Comment.create(comments);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    // await Post.deleteMany();
    await User.deleteMany();
    // await Comment.deleteMany();
    // await follow.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

/*  node ./dev-data/data/import-dev-data --import */
