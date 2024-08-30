import React from "react";
import Choice from "./Choice";
import "./gameboard.css";
import { useState, useEffect } from "react";
function Gameboard({ setCpuscore, setPlayerscore }) {
  const [choice, setChoice] = useState("");

  let game = () => {
    //étape 1 : la machine va choisir une carte
    let choices = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * 3); //le résultat sera : 0,1 ou 2
    let cpuChoice = choices[randomNumber];
    //étape 2 : tester le choix du joueur par rapport au choix de l'ordinateur
    if (choice === "rock" && cpuChoice === "paper") {
      alert("CPU wins");
      setCpuscore((state) => state + 1);
    } else if (choice === "rock" && cpuChoice === "scissors") {
      alert("Player Wins");
      setPlayerscore((state) => state + 1);
    } else if (choice === "paper" && cpuChoice === "rock") {
      alert("Player wins");
      setPlayerscore((state) => state + 1);
    } else if (choice === "paper" && cpuChoice === "scissors") {
      alert("Computer wins");
      setCpuscore((state) => state + 1);
    } else if (choice === "scissors" && cpuChoice === "rock") {
      alert("computer wins");
      setCpuscore((state) => state + 1);
    } else if (choice === "scissors" && cpuChoice === "paper") {
      alert("Player wins");
      setPlayerscore((state) => state + 1);
    } else if (choice === cpuChoice) {
      alert("Match nul");
    }
  };
  useEffect(() => {
    if (choice) {
      game();
      setChoice("");
    }
  }, [choice]);
  return (
    <div className="grid-layout">
      <Choice
        setChoice={setChoice}
        value="rock"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Moelen.jpg/1200px-Moelen.jpg"
      />
      <Choice
        setChoice={setChoice}
        value="paper"
        src="https://i.pinimg.com/736x/0b/41/25/0b41253a4041ddb57004d633e4979430.jpg"
      />
      <Choice
        setChoice={setChoice}
        value="scissors"
        src="https://tolsen.com.ph/cdn/shop/products/30044.jpg?v=1694854288"
      />
    </div>
  );
}

export default Gameboard;
