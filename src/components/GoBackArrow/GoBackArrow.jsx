import { NavLink } from "react-router-dom";
import styles from "./GoBackArrow.module.css";

const GoBackArrow = () => {
  return (
    <NavLink to="/" className={styles.link}>
      <span className={styles.arrow}>&#10229;</span> Go back
    </NavLink>
  );
};

export default GoBackArrow;
