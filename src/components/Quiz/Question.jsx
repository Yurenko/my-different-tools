import { useState } from "react";
import Answers from "./Answers";
import styles from "./Question.module.css";

const Question = ({ elem }) => {
  const [isCorrect, setIsCorrect] = useState(false);
  

  return (
    <div>
      <div className={styles.queText}>
        {elem.numb}. {elem.question}
      </div>
      <div className={styles.optionList}>
        {elem.options.map((answer, index) => (
          <Answers
            key={index}
            answer={answer}
            isCorrect={isCorrect}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
