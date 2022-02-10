const userData = require('./userData');
const postData = require('./postData');
const commentData = require('./commentData');

const { Post, User, Comment, Team } = require('../models');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  
  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  console.log('\n----- USERS SEEDED -----\n');

  const posts = await Post.bulkCreate(postData);
  console.log('\n----- POSTS SEEDED -----\n');

  //await seedComments();
  const comments = await Comment.bulkCreate(commentData);
  console.log('\n----- COMMENTS SEEDED -----\n');

  process.exit(0);
};

seedAll();