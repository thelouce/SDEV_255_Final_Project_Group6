const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const instructorsSchema = new Schema({
    inusername: {
        type: String,
        required: true
    },
    inName:{
        type: String,
        required: true
    },
    inPassword:{
        type:String,
        required: true
    }
},{timestamps: true})

const Instructors = mongoose.model('Instructor',instructorsSchema);
module.exports = Instructors;