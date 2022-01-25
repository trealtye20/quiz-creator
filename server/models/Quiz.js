const mongoose = require("mongoose");

const { Schema } = mongoose;

const quizSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },

  questions: [
    {
      q: String,
      options:[String],
      answer: String
    },
  ],

  highScore: {
    type: Number
  },

  alottedTime: {
    type: Number
  },

  //description
  //creator
  
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
