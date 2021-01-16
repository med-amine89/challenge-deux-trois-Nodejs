
// SCHEMA TODO

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title:{
        type: String,
        required: [true, 'title is required']
    },
    description: {
        type: String,
        required: [true, 'description is required']
    }
    
    });
    
    const todomodel = mongoose.model('todo', todoSchema);
    module.exports = todomodel;