const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
    coursesName: {
        type: String,
        required: true
    },
    courseDescription:{
        type: String,
        required: true
    },
    courseShortHand:{
        type:String,
        required: true
    }
},{timestamps: true})

const Courses = mongoose.model('Course',coursesSchema);
module.exports = Courses;