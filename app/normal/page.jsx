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
  const arr = ["scissors", "rock", "paper"];

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
    document.querySelector(".normal-container").style.display = "none";
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
      } else {
        setResult("YOU WIN");
        setScore((prev) => prev + 1);
      }
      document.querySelector("#house").style.visibility = "visible";
      document.querySelector(".result").style.visibility = "visible";
    }, 2000);
  }

  function rockHandler() {
    document.querySelector(".normal-container").style.display = "none";
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
      } else {
        setResult("YOU WIN");
        setScore((prev) => prev + 1);
      }
      document.querySelector("#house").style.visibility = "visible";
      document.querySelector(".result").style.visibility = "visible";
    }, 2000);
  }

  function paperHandler() {
    document.querySelector(".normal-container").style.display = "none";
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
      } else {
        setResult("YOU WIN");
        setScore((prev) => prev + 1);
      }
      document.querySelector("#house").style.visibility = "visible";
      document.querySelector(".result").style.visibility = "visible";
    }, 2000);
  }

  function repeatHandler() {
    document.querySelector(".normal-container").style.display = "grid";
    document.querySelector(".next-step").style.display = "none";
    document.querySelector("#house").style.visibility = "hidden";
    document.querySelector(".result").style.visibility = "hidden";
  }

  return (
    <div className="normal-page">
      <div className="header">
        <div className="player-name">
          <p>{searchParams.get("id")}</p>
        </div>
        <div className="player-score">
          <p>SCORE</p>
          <h1>{score}</h1>
        </div>
      </div>
      <div className="normal-container">
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="scissors"
          onClick={scissorHandler}
        >
          <img src="/images/icon-scissors.svg" alt="scissors" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="rock"
          onClick={rockHandler}
        >
          <img src="/images/icon-rock.svg" alt="rock" />
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.3 }}
          className="paper"
          onClick={paperHandler}
        >
          <img src="/images/icon-paper.svg" alt="paper" />
        </motion.div>
      </div>
      <div className="next-step">
        <div className="player">
          <div className={selected}>
            <img src={`/images/icon-${selected}.svg`} alt="selected" />
          </div>
          <p>YOU PICKED</p>
        </div>
        <div className="house">
          <div className={house} id="house">
            <img src={`/images/icon-${house}.svg`} alt="selected" />
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
            <img src="/images/image-rules.svg" alt="rules" />
            <button type="button" className="dialog-btn" onClick={dialogClose}>
              <img src="images/icon-close.svg" alt="close" />
            </button>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default page;
