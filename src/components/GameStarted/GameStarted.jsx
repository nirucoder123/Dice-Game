import React, { useState } from "react";
import TotalScore from "../TotalScore/TotalScore";
import NumberSelector from "../NumberSelector/NumberSelector";
import styles from "./GameStarted.module.css";
import RoleDice from "../RoleDice/RoleDice";
import { Button,OutlineButton } from "../../Button";
import Rules from "../Rules/Rules";

const GameStarted = () => {
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState();
  const [error, setError] = useState(" ");
  const [showRules,setShowRules] = useState(false);

  const [currentDice, setCurrentDice] = useState(1);
  

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    if (!selectedNumber) {
      setError("You have not selected any number");
      return;
    }
    setError("");
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);
    if (selectedNumber === randomNumber) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }
    setSelectedNumber(undefined);
  };
  const resetScore = () => {
    setScore(0);
  };

  return (
    <div className={`${styles.MainContainer}`}>
      <div className={`${styles.top_section}`}>
        <TotalScore score={score} />
        <NumberSelector
          error={error}
          setError={setError}
          selectedNumber={selectedNumber}
          setSelectedNumber={setSelectedNumber}
        />
      </div>
      <RoleDice currentDice={currentDice} roleDice={roleDice} />
      <div className={`${styles.btns} btn`}>
        <OutlineButton onClick={resetScore}>
          Reset Game
        </OutlineButton>
        <Button onClick={()=> setShowRules((prev)=> !prev)}>{showRules ? "Hide": "Show"} Rules</Button>
      </div>
      {showRules && <Rules/>}
    </div>
  );
};

export default GameStarted;
