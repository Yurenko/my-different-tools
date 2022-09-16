import { NavLink } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <ul className={styles.list}>
      <li>
        <NavLink to="/wordscounter" className={styles.item}>
          WordsCharectersCounter
        </NavLink>
      </li>
      <li>
        <NavLink to="/calculator" className={styles.item}>
          Scientific calculator
        </NavLink>
      </li>
    </ul>
  );
};

export default Menu;
