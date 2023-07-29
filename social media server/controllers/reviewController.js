const Comment = require('./../models/commentModel');
const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');

exports.setTourUserIds = (req, res, next) => {
  // Allow nested routes
  if (!req.body.post) req.body.post = req.params.Postid;
  if (!req.body.user) req.body.user = req.user.id||"642bc8ddfe2471cabbb1f503";
  next();
};

exports.getAllReviews = factory.getAll(Comment);
exports.getReview = factory.getOne(Comment);
exports.createReview = factory.createOne(Comment);
exports.updateReview = factory.updateOne(Comment);
exports.deleteReview = factory.deleteOne(Comment);
