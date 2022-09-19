import { useEffect } from "react";
import Button from "./Button";
import styles from "./Pad.module.css";

const Pad = ({
  onDigitButtonClick,
  onPointButtonClick,
  onOperatorButtonClick,
  onChangeSignButtonClick,
  onEqualButtonClick,
  onAllClearButtonClick,
  onClearEntryButtonClick,
  onMemoryRecallButtonClick,
  onMemoryClearButtonClick,
  onMemoryPlusButtonClick,
  onMemoryMinusButtonClick,
  onMathButtonClick,
  onBackSpaceButtonClick,
}) => {
  const handleKeyDown = ({ keyCode, shiftKey }) => {
    if (keyCode >= 48 && keyCode <= 57 && !shiftKey) {
      onDigitButtonClick(keyCode - 48);
    } else if (keyCode >= 96 && keyCode <= 105) {
      onDigitButtonClick(keyCode - 96);
    } else if (keyCode === 107 || (keyCode === 187 && shiftKey)) {
      onOperatorButtonClick("+");
    } else if (keyCode === 109 || keyCode === 189) {
      onOperatorButtonClick("-");
    } else if (keyCode === 106 || (keyCode === 56 && shiftKey)) {
      onOperatorButtonClick("×");
    } else if (keyCode === 111 || keyCode === 191) {
      onOperatorButtonClick("÷");
    } else if (keyCode === 13 || (keyCode === 187 && !shiftKey)) {
      onEqualButtonClick();
    } else if (keyCode === 8) {
      onBackSpaceButtonClick();
    } else if (keyCode === 46) {
      onClearEntryButtonClick();
    } else if (keyCode === 27) {
      onAllClearButtonClick();
    } else if (keyCode === 78) {
      onChangeSignButtonClick();
    } else if (keyCode === 80) {
      onMemoryPlusButtonClick();
    } else if (keyCode === 81) {
      onMemoryMinusButtonClick();
    } else if (keyCode === 82) {
      onMemoryRecallButtonClick();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyDown);
    return () => document.body.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className={styles.pad}>
      <Button onClick={onMemoryRecallButtonClick}>MR</Button>
      <Button onClick={onMemoryClearButtonClick}>MC</Button>
      <Button color="red" onClick={onAllClearButtonClick}>
        AC
      </Button>
      <Button onClick={onClearEntryButtonClick}>C</Button>
      <Button onClick={onBackSpaceButtonClick}>&#8592;</Button>
      <Button onClick={onMemoryPlusButtonClick}>M+</Button>
      <Button onClick={onMemoryMinusButtonClick}>M-</Button>

      <Button onClick={() => onMathButtonClick()}>
        <p>
          x<sup>y</sup>
        </p>
      </Button>
      <Button onClick={() => onMathButtonClick("pow")}>
        <p>
          x<sup>2</sup>
        </p>
      </Button>
      <Button onClick={() => onMathButtonClick("sqrt")}>&#8730;</Button>
      <Button onClick={() => onMathButtonClick("sin")}>sin</Button>
      <Button onClick={() => onMathButtonClick("cos")}>cos</Button>
      <Button onClick={() => onMathButtonClick("tan")}>tan</Button>
      <Button onClick={() => onMathButtonClick("log")}>log</Button>
      <Button color="dark" onClick={() => onOperatorButtonClick("÷")}>
        ÷
      </Button>
      <Button onClick={() => onMathButtonClick("1/x")}>1/x</Button>
      <Button onClick={() => onDigitButtonClick(7)}>7</Button>

      <Button onClick={() => onDigitButtonClick(8)}>8</Button>
      <Button onClick={() => onDigitButtonClick(9)}>9</Button>
      <Button color="dark" onClick={() => onOperatorButtonClick("×")}>
        ×
      </Button>
      <Button onClick={() => onMathButtonClick("pi")}>π</Button>
      <Button onClick={() => onDigitButtonClick(4)}>4</Button>
      <Button onClick={() => onDigitButtonClick(5)}>5</Button>
      <Button onClick={() => onDigitButtonClick(6)}>6</Button>

      <Button color="dark" onClick={() => onOperatorButtonClick("-")}>
        -
      </Button>
      <Button onClick={() => onMathButtonClick("e")}>e</Button>

      <Button onClick={() => onDigitButtonClick(1)}>1</Button>
      <Button onClick={() => onDigitButtonClick(2)}>2</Button>
      <Button onClick={() => onDigitButtonClick(3)}>3</Button>
      <Button color="dark" onClick={() => onOperatorButtonClick("+")}>
        +
      </Button>
      <Button onClick={() => onMathButtonClick("x!")}>x!</Button>
      <Button onClick={onChangeSignButtonClick}>-/+</Button>
      <Button onClick={() => onDigitButtonClick(0)}>0</Button>
      <Button onClick={onPointButtonClick}>.</Button>
      <Button color="green" isLarge={true} onClick={onEqualButtonClick}>
        =
      </Button>
    </div>
  );
};

export default Pad;
