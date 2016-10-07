import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
  name: String,
  rawContent: Object,
  isDraft: {
    default: true,
    type: Boolean,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Lesson', lessonSchema);
