const express=require('express');
const route=express.Router();

const {signupController,loginController}=require('../controllers/auth');
const {createCourse,getCourses}=require('../controllers/courseController')
const {sendOTP}=require('../controllers/otpController')

route.post('/signup',signupController)
route.post('/login',loginController)
route.post('/sendOtp',sendOTP)
route.post('/course/createCourse',createCourse);
route.get('/course/getCourses',getCourses);


module.exports=route;