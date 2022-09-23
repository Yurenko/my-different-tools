import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink to="/words/counter" className={styles.item}>
          WordsCharectersCounter
        </NavLink>
      </li>
      <li>
        <NavLink to="/calculator" className={styles.item}>
          Scientific calculator
        </NavLink>
      </li>
      <li>
        <NavLink to="/quize" className={styles.item}>
          Quize
        </NavLink>
      </li>
      <li>
        <NavLink to="/toggle/button" className={styles.item}>
          Toggle button
        </NavLink>
      </li>
      <li>
        <NavLink to="/credit/card" className={styles.item}>
          Credit Card
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
