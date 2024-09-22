import React from "react";
import styles from "./Frontpage.module.css";
const Frontpage = ({toggle}) => {
  return (
    <main className={`${styles.main}`}>
      <div>
        <img src="/images/dices.png" />
      </div>
      <div className={`${styles.content}`}>
        <h1>DICE GAME</h1>
        <button onClick={toggle} className={`${styles.play_btn}`}>Play Now</button>
      </div>
    </main>
  );
};

export default Frontpage;
