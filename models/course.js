const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coursesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    short:{
        type:String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    location: {
        type: String,
        default: 'Learn at Home'
    }
},{timestamps: true})

const Course = mongoose.model('Course',coursesSchema);
module.exports = Course;