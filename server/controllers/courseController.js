const Course=require('../models/course');

exports.createCourse=async(req,res)=>{
    try{
        let{courseName,price,category,img,title}=req.body;
        if(!courseName ||!price||!category||!img||!title){
            return res.status(401).json({
                success:false,
                message:"all fileds are required"
            })
        }
        let course=await Course.findOne({courseName:courseName});
       // console.log(course)
        if(course){
             return res.status(401).json({
                success:false,
                message:"Course already created"
            })
        }
        await Course.create({courseName,price,category,img,title})
        return res.status(200).json({
            success:true,
            message:"course created successfully"
        })


    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"something went wrong in creating a course"
        })
    }

}

exports.getCourses=async(req,res)=>{
    try{
        let courses=await Course.find({});
        if(!courses){
            return res.status(404).json({
                success:false,
                message:"No course found"
            })
        }
        return res.status(200).json({
            success:true,
            message:"Course fetch successfully",
            courses
        })

    }catch(err){
        console.log(err);
        return res.status(500).json({
            success:false,
            message:"something went wrong in fetching a course"
        })
    }
}