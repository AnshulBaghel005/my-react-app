const mongoose=require('mongoose');
const mailSender = require('../utils/nodeMailer');

const otpSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    otp:{
        type:Number,
        required:true,
    },
    createAt:{
        type:Date,
        default:Date.now,
        expires:5*60
    }
});
const sendVerificationMail=async(email,otp)=>{
try {
    const mailResponse = await mailSender(
      email,
      "Verification Email from Store",
      `Your OTP is: ${otp}`
    );
    console.log("Email sent successfully", mailResponse);
  } catch (err) {
    console.log("Error sending email:", err);
  }
}

otpSchema.pre('save',async function (next) {
    sendVerificationMail(this.email,this.otp);
    
})


module.exports=mongoose.model('OTP',otpSchema);