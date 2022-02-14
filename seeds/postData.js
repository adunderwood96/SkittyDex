const { Post } = require('../models');

const postData = [
    {
      "title": "Looking for an Umbreon",
      "post": "To complete my evvee collection I need an Umbreon. Does anyone have one they are willing to trade?",
      "userID": 1
      
    },
    {
      "title": "Behold, a team of shinies",
      "post": "I don't want to talk about how many hours it took to farm all of these....Still looking for a shiny shinx if anyone would pity me",
      "userID": 1
    },
    {
      "title": "All Fighting Type Pokemon Battle?",
      "post": "I love fighting pokemon, but they get demolished by fairy and psychic...Any recs for fighting pokemon that isn't as weak to those?",
      "userID": 2
    }
  ]
  
  const seedPost = () => Post.bulkCreate(postData);
  
  module.exports = seedPost;