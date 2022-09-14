import { useState } from "react";
import GoBackArrow from "../GoBackArrow/GoBackArrow";
import styles from "./WordsCharectersCounter.module.css";

const WordsCharectersCounter = () => {
  const [words, setWords] = useState(0);
  const [chatterbox, setChatterbox] = useState(0);

  const handleChange = (e) => {
    const value = e.target.value;
    const chatterboxCount = value.length;
    const wordCount = value
      .trim()
      .split(/\s+/)
      .filter((item) => item).length;

    setChatterbox(chatterboxCount);
    setWords(wordCount);
  };

  return (
    <div className={styles.wrapper}>
      <GoBackArrow />
      <div className={styles.main}>
        <textarea
          name="area"
          className={styles.text}
          cols="30"
          rows="10"
          onChange={handleChange}
        ></textarea>
        <div className={styles.boxes}>
          <p className={styles.words}>
            {words} <span className={styles.boxText}>Words</span>
          </p>
          <p className={styles.words}>
            {chatterbox} <span className={styles.boxText}>Chatterbox</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default WordsCharectersCounter;
