import { useState } from "react";
import { questions } from "./data";
import Question from "./Question";
import styles from "./Quiz.module.css";

const Quize = () => {
  const [isStart, setIsStart] = useState(false);
  const [agreeWithRules, setAgreeWithRules] = useState(false);
  const [status, setStatus] = useState("null");
  const [indexQuestion, setIndexQuestion] = useState(0);

  const hendleStart = () => {
    setIsStart(true);
  };

  const hendleRestart = () => {
    setAgreeWithRules(false);
    setStatus("null");
    setIsStart(false);
  };

  const startQuize = () => {
    setAgreeWithRules(true);
    setStatus("start");
    setIsStart(false);
  };

  const handlenextButton = () => {
    setIndexQuestion((prev) => prev + 1);
  };

  return (
    <div className={styles.wrapper}>
      {status === "null" ? (
        !isStart ? (
          <div className={styles.startBtn} onClick={hendleStart}>
            <button>Start Quiz</button>
          </div>
        ) : (
          <div className={styles.infoBox}>
            <div className={styles.infoTitle}>
              <span>Some Rules of this Quiz</span>
            </div>
            <ol className={styles.infoList}>
              <li className={styles.info}>
                1. You will have only <span>15 seconds</span> per each question.
              </li>
              <li className={styles.info}>
                2. Once you select your answer, it can't be undone.
              </li>
              <li className={styles.info}>
                3. You can't select any option once time goes off.
              </li>
              <li className={styles.info}>
                4. You can't exit from the Quiz while you're playing.
              </li>
              <li className={styles.info}>
                5. You'll get points on the basis of your correct answers.
              </li>
            </ol>
            <div className={styles.buttons}>
              <button className={styles.quit} onClick={hendleRestart}>
                Exit Quiz
              </button>
              <button className={styles.restart} onClick={startQuize}>
                Continue
              </button>
            </div>
          </div>
        )
      ) : (
        <div className={styles.quiz_box}>
          <header>
            <div className={styles.title}>Awesome Quiz Application</div>
            <div className={styles.timer}>
              <div className={styles.timeLef}>Time Left</div>
              <div className={styles.timerSec}>15</div>
            </div>
          </header>
          <section>
            <Question elem={questions[indexQuestion]} />
          </section>
          <footer>
            <div className={styles.totalQue}>
              {questions[indexQuestion].numb} of{" "}
              {questions[questions.length - 1].numb} Questions
            </div>
            <button className={styles.nextBtn} onClick={handlenextButton}>
              Next Que
            </button>
          </footer>
        </div>
      )}
    </div>
  );
};

export default Quize;
