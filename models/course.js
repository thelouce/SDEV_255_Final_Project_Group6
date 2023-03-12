const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Course name is required']
    },
    short:{
        type: String,
        required: [true, 'Short is required']
    },
    instructorID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Instructor'
    },
    instructor: {
        type: String
    },
    credits: {
        type: String
    },
    description:{
        type: String,
        required: [true, 'Course description is required']
    }
},{timestamps: true})

const Course = mongoose.model('course',courseSchema);
module.exports = Course;