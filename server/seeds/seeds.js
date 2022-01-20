const mongoose = require('mongoose');

const db = require("../config/connection");
const { Quiz, User } = require("../models");

db.once("open", async () => {
  await Quiz.deleteMany();
  await User.deleteMany();

  const quizzes = await Quiz.insertMany([
    {
      title: "Javascript",
      questions: [
        {
          q: "how tall is Chris?",
          options: ["1ft", "2ft", "5ft"],
          answer: "1ft",
        },
        {
          q: "how tall is Katie?",
          options: ["10ft", "20ft", "50ft"],
          answer: "50ft",
        },
        {
          q: "how tall is Noel?",
          options: ["100ft", "200ft", "500ft"],
          answer: "500ft",
        },
      ],
    },

    {
      title: "CSS",
      questions: [
        {
          q: "how tall is Chris?",
          options: ["1ft", "2ft", "5ft"],
          answer: "1ft",
        },
        {
          q: "how tall is Katie?",
          options: ["10ft", "20ft", "50ft"],
          answer: "50ft",
        },
        {
          q: "how tall is Noel?",
          options: ["100ft", "200ft", "500ft"],
          answer: "500ft",
        },
      ],
    },
  ]);

  console.log(`****** quiz data inserted- \n ${quizzes}`);

  const users = await User.insertMany([
    {
      userName: "Chris",
      email: "Chriscodes@gmail.com",
      password: "password",
      quizzes: ["61e999551b2a780e2c440aea"],
    },
    {
      userName: "Katie",
      email: "Katiecodes@gmail.com",
      password: "password",
      quizzes: ["61e999551b2a780e2c440aee"],
    },
  ]);

  console.log(`****** user data inserted- \n ${users}`);

  console.log("******* data all seeded********");
  
  const userData = await User.findOne({_id: mongoose.Types.ObjectId("61e9a24b600cab3b105a265d")});

  console.log(userData)
  

  process.exit();
});
