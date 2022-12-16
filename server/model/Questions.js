const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  answers: [{ type: String, required: true }],
  correct: {
    type: Number,
    min: 1,
    max: 4,
    required: true,
  },
});

module.exports = mongoose.model("Questions", QuestionSchema);
