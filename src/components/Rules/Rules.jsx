import React from 'react'
import styles from "./Rules.module.css"
const Rules = () => {
  return (
    <div className={styles.main}>
      <h2>How to play dice game</h2>
      <div className={styles.rules}>
      <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          after click on dice if selected number is equal to dice number you
          will get same point as dice{" "}
        </p>
        <p>if you get wrong guess then 2 point will be dedcuted </p>
      </div>
    </div>
  )
}

export default Rules
