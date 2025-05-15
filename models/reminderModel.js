import mongoose from 'mongoose';

const reminderSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  reminderType: {
    type: String,
    enum: ['sms', 'email'],
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('Reminder', reminderSchema);
