const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    fullName:{
        type:String,
        reuired:true,
    },
    email:{
        type:String,
        reuired:true,
    },
    password:{
        type:String,
        reuired:true,
    },

})

module.exports=mongoose.model('User',userSchema)