import { useLocation } from "react-router-dom";
import GoBackArrow from "../GoBackArrow/GoBackArrow";
import styles from "./NoMatch.module.css";

const NoMatch = () => {
  let location = useLocation();

  return (
    <div>
      <GoBackArrow />
      <h1 className={styles.noMatch}>
        No match for <code>{location.pathname}</code>
      </h1>
    </div>
  );
};

export default NoMatch;
