// import models
const User = require("./user");
const Post = require("./post");
const Comment = require("./comment");

// Post belongs to User
Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE", 
});

// Users can have many posts
User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE", 
});

// Comment belongs to Post
Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "CASCADE", 
});

// Posts can have many Comments
Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "CASCADE", 
});

// Comment belongs to User
Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE", 
});

// Users can have many Comments
User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

module.exports = { User, Post, Comment };