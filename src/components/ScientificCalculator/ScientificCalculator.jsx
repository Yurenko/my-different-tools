import { useState } from "react";
import GoBackArrow from "../GoBackArrow/GoBackArrow";
import Display from "./Display";
import Pad from "./Pad";
import styles from "./ScientificCalculator.module.css";

const ScientificCalculator = () => {
  const [memory, setMemory] = useState(0);
  const [result, setResult] = useState(0);
  const [waitingForOperand, setWaitingForOperand] = useState(true);
  const [pendingOperator, setPendingOperator] = useState();
  const [display, setDisplay] = useState("0");

  const calculate = (rightOperand, pendingOperator) => {
    let newResult = result;
    let mathematicalСalculation = null;

    switch (pendingOperator) {
      case "+":
        newResult += rightOperand;
        break;
      case "-":
        newResult -= rightOperand;
        break;
      case "×":
        newResult *= rightOperand;
        break;
      case "÷":
        if (rightOperand === 0) {
          return false;
        }

        newResult /= rightOperand;
        break;
      case "x!":
        let result = rightOperand;
        if (rightOperand === 0 || rightOperand === 1) return 1;
        while (rightOperand > 1) {
          rightOperand--;
          result *= rightOperand;
        }
        mathematicalСalculation = result;
        break;
      case "1/x":
        mathematicalСalculation = 1 / rightOperand;
        break;
      case "sin":
        mathematicalСalculation = Math.sin(rightOperand);
        break;
      case "cos":
        mathematicalСalculation = Math.cos(rightOperand);
        break;
      case "tan":
        mathematicalСalculation = Math.tan(rightOperand);
        break;
      case "log":
        mathematicalСalculation = Math.log(rightOperand);
        break;
      case "pow":
        mathematicalСalculation = Math.pow(rightOperand, 2);
        break;
      case "sqrt":
        mathematicalСalculation = Math.sqrt(rightOperand);
        break;
      case "e":
        mathematicalСalculation = Math.E;
        break;
      case "pi":
        mathematicalСalculation = Math.PI;
        break;
      default:
    }

    setResult(newResult);

    mathematicalСalculation !== null
      ? setDisplay(mathematicalСalculation.toString().slice(0, 12))
      : setDisplay(newResult.toString().slice(0, 12));

    return true;
  };

  const onDigitButtonClick = (digit) => {
    let newDisplay = display;

    if ((display === "0" && digit === 0) || display.length > 12) {
      return;
    }

    if (waitingForOperand) {
      newDisplay = "";
      setWaitingForOperand(false);
    }

    if (display !== "0") {
      newDisplay = newDisplay + digit.toString();
    } else {
      newDisplay = digit.toString();
    }

    setDisplay(newDisplay);
  };

  const onPointButtonClick = () => {
    let newDisplay = display;

    if (waitingForOperand) {
      newDisplay = "0";
    }

    if (newDisplay.indexOf(".") === -1) {
      newDisplay = newDisplay + ".";
    }

    setDisplay(newDisplay);
    setWaitingForOperand(false);
  };

  const onOperatorButtonClick = (operator) => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }
    } else {
      setResult(operand);
    }

    setPendingOperator(operator);
    setWaitingForOperand(true);
  };

  const onChangeSignButtonClick = () => {
    const value = Number(display);

    if (value > 0) {
      setDisplay("-" + display);
    } else if (value < 0) {
      setDisplay(display.slice(1));
    }
  };

  const onEqualButtonClick = () => {
    const operand = Number(display);

    if (typeof pendingOperator !== "undefined" && !waitingForOperand) {
      if (!calculate(operand, pendingOperator)) {
        return;
      }

      setPendingOperator(undefined);
    } else {
      setDisplay(operand.toString());
    }

    setResult(operand);
    setWaitingForOperand(true);
  };

  const onAllClearButtonClick = () => {
    setMemory(0);
    setResult(0);
    setPendingOperator(undefined);
    setDisplay("0");
    setWaitingForOperand(true);
  };

  const onClearEntryButtonClick = () => {
    setDisplay("0");
    setWaitingForOperand(true);
  };

  const onMathButtonClick = (pendingOperator) => {
    const operand = Number(display);
    if (!calculate(operand, pendingOperator)) {
      return;
    }
  };

  const onMemoryRecallButtonClick = () => {
    setDisplay(memory.toString());
    setWaitingForOperand(true);
  };

  const onMemoryClearButtonClick = () => {
    setMemory(0);
    setWaitingForOperand(true);
  };

  const onMemoryPlusButtonClick = () => {
    setMemory(memory + Number(display));
    setWaitingForOperand(true);
  };

  const onMemoryMinusButtonClick = () => {
    setMemory(memory - Number(display));
    setWaitingForOperand(true);
  };

  const onBackSpaceButtonClick = () => {
    if (Number(display) === 0) return;

    if (typeof display === "number") {
      return setDisplay(Math.floor(display / 10));
    } else {
      setDisplay(display.slice(0, -1));
    }

    if (display.length === 1) {
      setDisplay("0");
    }
  };

  return (
    <div className={styles.wrapper}>
      <GoBackArrow />
      <div className={styles.app}>
        <Display
          value={display}
          hasMemory={memory !== 0}
          expression={
            typeof pendingOperator !== "undefined"
              ? `${result}${pendingOperator}${waitingForOperand ? "" : display}`
              : ""
          }
        />
        <Pad
          onDigitButtonClick={onDigitButtonClick}
          onPointButtonClick={onPointButtonClick}
          onOperatorButtonClick={onOperatorButtonClick}
          onChangeSignButtonClick={onChangeSignButtonClick}
          onEqualButtonClick={onEqualButtonClick}
          onAllClearButtonClick={onAllClearButtonClick}
          onClearEntryButtonClick={onClearEntryButtonClick}
          onMemoryRecallButtonClick={onMemoryRecallButtonClick}
          onMemoryClearButtonClick={onMemoryClearButtonClick}
          onMemoryPlusButtonClick={onMemoryPlusButtonClick}
          onMemoryMinusButtonClick={onMemoryMinusButtonClick}
          onMathButtonClick={onMathButtonClick}
          onBackSpaceButtonClick={onBackSpaceButtonClick}
        />
      </div>
    </div>
  );
};

export default ScientificCalculator;
