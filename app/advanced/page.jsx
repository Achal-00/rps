"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

const page = () => {
  const searchParams = useSearchParams();

  const [selected, setSelected] = useState(null);
  const [house, setHouse] = useState(null);
  const [result, setResult] = useState(null);
  const [score, setScore] = useState(0);
  const arr = ["scissors", "rock", "paper", "spock", "lizard"];

  function dialogHandler() {
    const dialog = document.querySelector("dialog");
    dialog.showModal();

    dialog.addEventListener("click", (e) => {
      const dialogDimensions = dialog.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        dialog.close();
      }
    });
  }

  function dialogClose() {
    document.querySelector("dialog").close();
  }

  function scissorHandler() {
    document.querySelector(".advanced-container").style.display = "none";
    document.querySelector(".next-step").style.display = "grid";
    setSelected("scissors");
    let temp = arr[Math.floor(Math.random() * arr.length)];
    setHouse(temp);
    setTimeout(() => {
      if (temp === "scissors") {
        setResult("DRAW");
      } else if (temp === "rock") {
        setResult("YOU LOSE");
        setScore(0);
      } else if (temp === "spock") {
        setResult("YOU LOSE");
        setScore(0);
      } else {
        setResult("YOU WIN");
        setScore((prev) => prev + 1);
      }
      document.querySelector("#house").style.visibility = "visible";
      document.querySelector(".result").style.visibility = "visible";
    }, 2000);
  }

  function rockHandler() {
    document.querySelector(".advanced-container").style.display = "none";
    document.querySelector(".next-step").style.display = "grid";
    setSelected("rock");
    let temp = arr[Math.floor(Math.random() * arr.length)];
    setHouse(temp);
    setTimeout(() => {
      if (temp === "rock") {
        setResult("DRAW");
      } else if (temp === "paper") {
        setResult("YOU LOSE");
        setScore(0);
      } else if (temp === "spock") {
        setResult("YOU LOSE");
        setScore(0);
      } else {
        setResult("YOU WIN");
        setScore((prev) => prev + 1);
      }
      document.querySelector("#house").style.visibility = "visible";
      document.querySelector(".result").style.visibility = "visible";
    }, 2000);
  }

  function paperHandler() {
    document.querySelector(".advanced-container").style.display = "none";
    document.querySelector(".next-step").style.display = "grid";
    setSelected("paper");
    let temp = arr[Math.floor(Math.random() * arr.length)];
    setHouse(temp);
    setTimeout(() => {
      if (temp === "paper") {
        setResult("DRAW");
      } else if (temp === "scissors") {
        setResult("YOU LOSE");
        setScore(0);
      } else if (temp === "lizard") {
        setResult("YOU LOSE");
        setScore(0);
      } else {
        setResult("YOU WIN");
        setScore((prev) => prev + 1);
      }
      document.querySelector("#house").style.visibility = "visible";
      document.querySelector(".result").style.visibility = "visible";
    }, 2000);
  }

  function spockHandler() {
    document.querySelector(".advanced-container").style.display = "none";
    document.querySelector(".next-step").style.display = "grid";
    setSelected("spock");
    let temp = arr[Math.floor(Math.random() * arr.length)];
    setHouse(temp);
    setTimeout(() => {
      if (temp === "spock") {
        setResult("DRAW");
      } else if (temp === "paper") {
        setResult("YOU LOSE");
        setScore(0);
      } else if (temp === "lizard") {
        setResult("YOU LOSE");
        setScore(0);
      } else {
        setResult("YOU WIN");
        setScore((prev) => prev + 1);
      }
      document.querySelector("#house").style.visibility = "visible";
      document.querySelector(".result").style.visibility = "visible";
    }, 2000);
  }

  function lizardHandler() {
    document.querySelector(".advanced-container").style.display = "none";
    document.querySelector(".next-step").style.display = "grid";
    setSelected("lizard");
    let temp = arr[Math.floor(Math.random() * arr.length)];
    setHouse(temp);
    setTimeout(() => {
      if (temp === "lizard") {
        setResult("DRAW");
      } else if (temp === "scissors") {
        setResult("YOU LOSE");
        setScore(0);
      } else if (temp === "rock") {
        setResult("YOU LOSE");
        setScore(0);
      } else {
        setResult("YOU WIN");
        setScore((prev) => prev + 1);
      }
      document.querySelector("#house").style.visibility = "visible";
      document.querySelector(".result").style.visibility = "visible";
    }, 2000);
  }

  function repeatHandler() {
    document.querySelector(".advanced-container").style.display = "grid";
    document.querySelector(".next-step").style.display = "none";
    document.querySelector("#house").style.visibility = "hidden";
    document.querySelector(".result").style.visibility = "hidden";
  }

  return (
    <div className="advanced-page">
      <div className="header">
        <div className="player-name">
          <p>{searchParams.get("id")}</p>
        </div>
        <div className="player-score">
          <p>SCORE</p>
          <h1>{score}</h1>
        </div>
      </div>
      <div className="advanced-container">
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="scissors"
          onClick={scissorHandler}
        >
          <img src="icon-scissors.svg" alt="scissors" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="rock"
          onClick={rockHandler}
        >
          <img src="icon-rock.svg" alt="rock" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="paper"
          onClick={paperHandler}
        >
          <img src="icon-paper.svg" alt="paper" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="spock"
          onClick={spockHandler}
        >
          <img src="icon-spock.svg" alt="paper" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="lizard"
          onClick={lizardHandler}
        >
          <img src="icon-lizard.svg" alt="paper" />
        </motion.div>
      </div>
      <div className="next-step">
        <div className="player">
          <div className={selected}>
            <img src={`icon-${selected}.svg`} alt="selected" />
          </div>
          <p>YOU PICKED</p>
        </div>
        <div className="house">
          <div className={house} id="house">
            <img src={`icon-${house}.svg`} alt="selected" />
          </div>
          <p>THE HOUSE PICKED</p>
        </div>
        <div className="result">
          <h1>{result}</h1>
          <button type="button" onClick={repeatHandler}>
            PLAY AGAIN
          </button>
        </div>
      </div>
      <div className="footer">
        <button type="button" onClick={dialogHandler}>
          Rules
        </button>
        <dialog>
          <div className="dialog-normal">
            <img src="image-rules-bonus.svg" alt="rules" />
            <button type="button" className="dialog-btn" onClick={dialogClose}>
              <img src="icon-close.svg" alt="close" />
            </button>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default page;
