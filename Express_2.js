import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  nickname: {
    type: String,
    required: false
  },
  amount: {
    type: String,  // or Number if you want numerical calculations
    required: true
  }
});

export const User = mongoose.model('Moydata', userSchema);
