const mongoose = require("mongoose");

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
      // highScores
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

  const userOne = await User.create(
    {
      userName: "Chris",
      email: "Chriscodes@gmail.com",
      password: "password",
      quizzes: [quizzes[0]._id],
    },
  );
  const userTwo = await User.create(
    {
      userName: "Katie",
      email: "Katiecodes@gmail.com",
      password: "password",
      quizzes: [quizzes[1]._id],
    },
  );

  console.log(`\n****** user one inserted- \n ${userOne}`);
  console.log(`\n****** user two inserted- \n ${userTwo}`);

  console.log("******* data all seeded ********");

  let userAllData = await User.find({});

  console.log(`userAllData: ${userAllData}`);

  let userData;

  userData = await User.findOne(userAllData[0]._id);
  console.log(`\nUser.findOne(userAllData[0]._id): ${userData}`);

  userData = await User.findOne(userAllData[1]._id);
  console.log(`\nUser.findOne(userAllData[1]._id): ${userData}`);

  const userDataQuiz = await User.findOne(userAllData[0]._id).populate("quizzes");
  console.log(`****** user date with quizzes: ${userDataQuiz}`);
  // console.log(userData);

  process.exit();
});
