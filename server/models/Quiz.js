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

  description: {
    type: String,
    minlength: 16,
    maxlength: 100
  },

  creator: {
    type: Schema.Types.ObjectId,
    required: true
  }
  
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;
