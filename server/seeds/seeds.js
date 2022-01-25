const mongoose = require("mongoose");

const db = require("../config/connection");
const { Quiz, User } = require("../models");

db.once("open", async () => {
  await Quiz.deleteMany();
  await User.deleteMany();

  const quizzes = await Quiz.insertMany([
    {
      title: "Star Wars Knowledge",
      questions: [
        {
          q: "What species is Chewbacca?",
          options: ["Ewok", "Twilek", "Wookie"],
          answer: "Wookie",
        },
        {
          q: "What color is Mace Windu's lightsaber?",
          options: ["Red", "Yellow", "Purple"],
          answer: "Purple",
        },
        {
          q: "What is the name of the monster under Jaba's palace that Luke killed?",
          options: ["Wookie", "Rancor", "Tuskan Raider"],
          answer: "Rancor",
        },
        {
          q: "What species is Jar-Jar Binks?",
          options: ["Wookie", "Gungan", "Ewok"],
          answer: "Gungan",
        },
        {
          q: "Who is Luke's father?",
          options: ["ObiWan", "Palpatine", "Anakin"],
          answer: "Anakin",
        },
      ],
    },

    {
      title: "Disney Movie Quiz",
      questions: [
        {
          q: "What is the name of Andy's neighbor in Toy Story?",
          options: ["Ralph", "Wilson", "Sid"],
          answer: "Sid",
        },
        {
          q: "Which Disney Princess sings Once Upon a Dream?",
          options: ["Aurora", "Snow White", "Cinderella"],
          answer: "Aurora",
        },
        {
          q: "What does Hakuna Matata mean?",
          options: ["I'm stressed", "It's fine", "No worries"],
          answer: "No worries",
        },
        {
          q: "What does Emperor Kuzco turn into in 'Emperor's New Groove'?",
          options: ["Frog", "Llama", "Mouse"],
          answer: "Llama",
        },
        {
          q: "In 'Encanto' what gift does Tia Pepa have?",
          options: ["Strength", "Visions", "Weather"],
          answer: "Weather",
        },
      ],
    },

    {
      title: "Baseball Quiz",
      questions: [
        {
          q: "How many players are on a baseball team?",
          options: ["6", "12", "9"],
          answer: "9",
        },
        {
          q: "What is another name for a baseball field?",
          options: ["Pitch", "Diamond", "Rink"],
          answer: "Diamond",
        },
        {
          q: "What is the place the pitcher throws the ball from?",
          options: ["Mound", "Outfield", "DugOut"],
          answer: "Mound",
        },
        {
          q: "What is the title of the person who decides on the points?",
          options: ["Coach", "Referee", "Umpire"],
          answer: "Umpire",
        },
        {
          q: "When 'bases are loaded' how many people could potentially score?",
          options: ["4", "3", "5"],
          answer: "4",
        },
      ],
    },

    {
      title: "History Quiz",
      questions: [
        {
          q: "Who was the first European to land in North America",
          options: ["Christopher Columbus", "Leif Erikson", "Pablo Pacaso"],
          answer: "Leif Erikson",
        },
        {
          q: "What was the first capital of the USA?",
          options: ["Boston", "Philadelphia", "NYC"],
          answer: "NYC",
        },
        {
          q: "Who created the first American flag?",
          options: ["Betsy Ross", "George Washington", "Paul Revere"],
          answer: "Betsy Ross",
        },
        {
          q: "When was the first US dollar printed?",
          options: ["1800", "1776", "1862"],
          answer: "1862",
        },
        {
          q: "When did the Revolutionary War end?",
          options: ["1776", "1783", "1800"],
          answer: "1783",
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
