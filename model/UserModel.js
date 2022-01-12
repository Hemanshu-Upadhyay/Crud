
   
const mongoose = require('mongoose');
let UserSchema = new mongoose.Schema({
    name :{
        type:String,
        required:true,
    },
    email :{
        type:String,
        required: true,
    },

})

mongoose.model('users', UserSchema)
module.exports = mongoose.model('users')