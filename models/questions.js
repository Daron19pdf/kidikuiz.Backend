const mongoose = require('mongoose');

const questionsSchema = mongoose.Schema({
  quizzNb: String,
  question: String,
  answer1: String,
  answer2: String,
  answer3: String,
  answer4: String,
  correctAnswer: String,

});

const Questions = mongoose.model('questions', questionsSchema);

module.exports = Questions;