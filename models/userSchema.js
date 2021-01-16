
// SCHEMA USER

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
email:{
    type: String,
    required: [true, 'email is required']
},
password: {
    type: String,
    required: [true, 'password is required']
},
todos: [{ type: Schema.Types.ObjectId, ref: 'todo'}]
});

const User = mongoose.model('user', UserSchema);
module.exports = User;