const mongoose = require('mongoose');

const Courses = mongoose.Schema({
title:{
    type:String,
    require:true
},
content:{
    type:String,
    require:true
},
videos:String,
active:Boolean
})

module.exports = mongoose.model('courses',Courses);