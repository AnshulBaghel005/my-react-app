const mongoose=require('mongoose');

const courseSchema=new mongoose.Schema({
    courseName:{
        type:String,
        require:true,
    },
    price:{
        type:Number,
        require:true,
    },
    img:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    title: {
        type:String,
        require:true,
    },
    id:{
        type:Number,
    }

})
module.exports=mongoose.model('Course',courseSchema);