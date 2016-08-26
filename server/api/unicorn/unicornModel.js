import mongoose from 'mongoose';

const UnicornSchema = mongoose.Schema({
  name: { type: String, required: true },
  color: { type: String, required: true },
  age: { type: Number, required: true },
  horn: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'horn'
  }
});

module.exports = mongoose.model('unicorn', UnicornSchema);
