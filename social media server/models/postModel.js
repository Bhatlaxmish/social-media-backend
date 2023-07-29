const mongoose = require('mongoose');
const slugify = require('slugify');
// const User = require('./userModel');
// const validator = require('validator');

const postSchema = new mongoose.Schema(
  {
    
    
    personid:{
      type: mongoose.Schema.ObjectId,
    },
    
    description: {
      type: String,
      trim: true
    },
    likes: {
      type: Number
    },
    image: {
      type: String, 
     
    },
    
    createdAt: {
      type: Date,
      default: Date.now(),
      select: false
    },
    comments: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'User'
      }
    ]
  },
 
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);


// postSchema.pre(/^find/, function(next) {
//   this.populate({
//     path: 'guides',
//     select: '-__v -passwordChangedAt'
//   });

//   next();
// });

// postSchema.post(/^find/, function(docs, next) {
//   console.log(`Query took ${Date.now() - this.start} milliseconds!`);
//   next();
// });

// AGGREGATION MIDDLEWARE
// postSchema.pre('aggregate', function(next) {
//   this.pipeline().unshift({ $match: { secretTour: { $ne: true } } });

//   console.log(this.pipeline());
//   next();
// });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
