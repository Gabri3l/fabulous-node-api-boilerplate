import mongoose from 'mongoose';

const HornSchema = mongoose.Schema({
  length: { type: Number, required: true },
  color: { type: String, required: true }
});

module.exports = mongoose.model('unicorn', HornSchema);
