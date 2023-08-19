const ex = require('express');
const CourseModel = require('../models/courses');

const router = ex.Router();

// creating routers

// get courses
router.get('/',async (req,res)=>{
    // const allCourses=[{
    //                     "title":"Java",
    //                     "desc":"code"
    //             },{
    //                 "title":"C++",
    //                 "desc":"code"
    //             },{
    //                 "title":"python",
    //                 "desc":"code"
    //             }
    //         ];        
    // res.json(allCourses);

    try {
        const data = await CourseModel.find();
        res.json(data);
    } catch (error) {
        res.json(error);
    }   
})

// create courses
router.post('/',async (req,res)=>{
    console.log(req.body);
    try {
        const data = await CourseModel.create(req.body);
        res.json(data);
    } catch (error) {
        res.json(error);
    }   
})

// find by Id 
router.get('/:courseId',async (req,res)=>{
    
    const courseId = req.params.courseId;
    console.log(courseId);
    try {
        const data = await CourseModel.findById(courseId);
        res.json(data);
    } catch (error) {
        res.json(error);
    }   
})

// update by Id 
router.put('/:courseId',async (req,res)=>{
    
    const courseId = req.params.courseId;
    console.log(courseId);
    try {
        const data = await CourseModel.updateOne({_id:courseId},req.body);
        res.json(data);
    } catch (error) {
        res.json(error);
    }   
})

// Delete record
router.delete('/:courseId',async (req,res)=>{
    
    const courseId = req.params.courseId;
    console.log("here "+courseId);
    try {
        await CourseModel.deleteOne({_id:courseId});
        res.json({"message":"done"});
    } catch (error) {
        res.json(error);
    }   
})

// find by parameter
router.post('/getDetails',async (req,res)=>{
    const reqObj= req.body;
   
    console.log(reqObj);
    try {
        // const data = await CourseModel.find({"title":reqObj.title});

        // using where
        const data = await CourseModel.where("title",reqObj.title);
        res.json(data);
    } catch (error) {
        res.json(error);
    }   
})

module.exports=router;