const mongoose=require('mongoose');
require('dotenv').config();
const dbConnect=()=>{
     mongoose.connect(process.env.DATABASE_URL).then(()=>{
        console.log("db connected successfully")
    }).catch((err)=>{
        console.log(err);
        console.log("sometime went wrong in db connection")
    })
}

module.exports=dbConnect