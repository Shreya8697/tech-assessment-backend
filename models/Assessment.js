const mongoose = require('mongoose');

const AssessmentSchema = new mongoose.Schema({
  answers: {
    analysis1: String,
    analysis2: String,
    mcq1: String,
    mcq2: String,
    mcq3: String
  },
  score: Number,
  timeSpent: Number,
  completedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Assessment', AssessmentSchema);