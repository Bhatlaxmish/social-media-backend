const crypto = require('crypto');
const mongoose = require('mongoose');
const validator = require('validator');


const followSchema = new mongoose.Schema({
    
   
    user: {
        type: mongoose.Schema.ObjectId, 
    }, 
  
    followers: [],
    following: []
   
});


const Follow = mongoose.model('Follow', followSchema);

module.exports = Follow;
