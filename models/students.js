const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentsSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    sName:{
        type: String,
        required: true
    },
    sPassword:{
        type:String,
        required: true
    }
},{timestamps: true})

const Students = mongoose.model('Student',studentstSchema);
module.exports = Students;