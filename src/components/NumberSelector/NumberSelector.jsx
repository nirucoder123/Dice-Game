import React, { useState } from "react";
import styles from "./NumberSelector.module.css";
const NumberSelector = ({error,setError,selectedNumber,setSelectedNumber}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];
  const numberSelectorHandler = (value)=>{
    setSelectedNumber(value);
    setError(" ");
  };

  return (
    <div className={`${styles.numberselectorcontainer}`}>
      <p className={`${styles.error}`}>{error}</p>
      <div className={`${styles.flex}`}>
        {arrNumber.map((value, i) => (
          <div
            key={i}
            className={`${styles.box} ${
              value === selectedNumber ? styles.selected : ""
            }`}
            onClick={()=>numberSelectorHandler(value)}
          >
            {value}
          </div>
        ))}
      </div>
      <p>Select Number</p>
    </div>
  );
};

export default NumberSelector;
