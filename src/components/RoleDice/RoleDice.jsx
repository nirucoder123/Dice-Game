import React, { useState } from "react";
import styles from "./RoleDice.module.css";

const RoleDice = ({roleDice,currentDice}) => {
  
  return <div className={`${styles.Dice_container}`} onClick={roleDice}>
    <div className={`${styles.dice}`}><img src={`/images/Dice/dice_${currentDice}.png`} alt="dice-1" /></div>
    <p>Click on Dice to roll</p>
  </div>;
};

export default RoleDice;
