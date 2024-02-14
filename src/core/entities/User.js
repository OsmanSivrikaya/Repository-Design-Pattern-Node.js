const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name:{
    type: String,
    required:[true, 'Name is required']
  },
  email:{
    tpye: String,
    required:[true, 'Email is required'],  
    unique: true,
  },
  password:{
    type: String,
    minlength:[4, 'Password must be at least 4 characters long'],
    required:[true, 'Password is required'],
    select : false
  },
})