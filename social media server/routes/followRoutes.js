const express = require('express');
// const followController = require('./../controllers/followController');
const authController = require('./../controllers/authController');
const followController = require('./../controllers/followController');

const router = express.Router();





// Protect all routes after this middleware
router.use(authController.protect);
router
    .route('/')
    .get(followController.message,followController.getAllfollowers)
    // .post(followController.createUser);

// router
//     .route('/:id')
//     .get(followController.getUser)
//     .patch(followController.updateUser)
//     .delete(followController.deleteUser);

module.exports = router;
