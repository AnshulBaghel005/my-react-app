const User=require('../models/user');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
require('dotenv').config();
exports.signupController=async(req,res)=>{
    try{
          const{fullName,email,password}=req.body;
          if(!fullName||!email||!password){
            return res.status(400).json({
                success:false,
                message:"all fileds are required"
            })
          }
          let user=await User.findOne({email});
          if(user){
            return res.status(400).json({
                success:false,
                message:"email already registerd"
            })
          }
          const hashpassword=await bcrypt.hash(password,10);
          console.log(hashpassword)

          User.create({fullName,email,password:hashpassword});
          return res.status(200).json({
            success:true,
            message:"sign in successfully"
          })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Something went wrong in sign in"
        })
    }

}

exports.loginController=async(req,res)=>{
    try{
        const{email,password}=req.body;
        if(!email||!password){
            return res.status(400).json({
                success:false,
                message:"all fileds are required"
            }) 
        }
        let user=await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success:false,
                message:"Please sign up"
            })
        }
        const payload={
            email:user.email,
            id:user._id,

        }
        if(bcrypt.compare(password,user.password)){
              let token=jwt.sign(payload,process.env.SECRET_KEY,{expiresIn:'2h'})
            user=user.toObject();
            user.token=token;
            user.password=undefined 
            
                let options={
                expires:new Date(Date.now()+3*24*60*60*1000),
                httpOnly:true,
            }
            
            return res.cookie('booklelo',token,options).status(200).json({
                success:true,
                message:"login successfully",
                user: {
                id: user._id,
                fullname: user.fullname,
                email: user.email,
        },
            })


        }

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"Something went wrong in login"
        })
    }

}