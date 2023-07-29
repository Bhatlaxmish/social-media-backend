// const multer = require('multer');
// const sharp = require('sharp');
const follower = require('./../models/followModel');
const Follow = require('./../models/followModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const factory = require('./handlerFactory');




const filterObj = (obj, ...allowedFields) => {
    const newObj = {};
    Object.keys(obj).forEach(el => {
        if (allowedFields.includes(el)) newObj[el] = obj[el];
    });
    return newObj;
};






exports.message=(req,res,next)=>{
// console.log("hie");
next();
}


exports.getfollower = factory.getOne(Follow);
exports.getAllfollowers = factory.getAll(Follow);

// Do NOT update passwords with this!
exports.updatefollower = factory.updateOne(Follow);
exports.deletefollower = factory.deleteOne(Follow);
