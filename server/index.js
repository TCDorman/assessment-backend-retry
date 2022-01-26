const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/lucky", (req, res) => {
  const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", 
  "A dubious friend may be an enemy in camouflage.", 
  "A faithful friend is a strong defense.", 
  "A fresh start will put you on your way.", 
  "A friend asks only for your time not your money.",
];

  let randomIndex = Math.floor(Math.random() * fortunes.length);
  let randomFortune = fortunes[randomIndex];

  res.status(200).send(randomFortune);
});

app.get("/api/good_thought", (req, res) => {
  const good_thoughts = ["happy", "amazing", "wonderous", "fantastic", "perfection"];

  let randomIndex = Math.floor(Math.random() * good_thoughts.length);
  let randomGood = good_thoughts[randomIndex];

  res.status(200).send(randomGood);
});

app.get("/api/funThings", (req, res) => {
  const funThings = ["soccer", "hiking", "reading (fiction)", "dirk bikes", "fast cars"];

  let randomIndex = Math.floor(Math.random() * funThings.length);
  let randomFun = funThings[randomIndex];

  res.status(200).send(randomFun);
});

app.get("/api/fastCars", (req, res) => {
  const fastCars = ["Lamborghini", "Ferrari", "Corvette", "Challenger", "Audi R8"];

  let randomIndex = Math.floor(Math.random() * fastCars.length);
  let randomCar = fastCars[randomIndex];

  res.status(200).send(randomCar);
});

app.listen(4000, () => console.log("Server running on 4000"));
