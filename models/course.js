const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    short:{
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: 'Learn at Home'
    },
    description:{
        type: String,
        required: true
    }
},{timestamps: true})

const Course = mongoose.model('course',courseSchema);
module.exports = Course;