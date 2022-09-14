import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <Link to="/wordscounter">
          <li className={styles.item}>WordsCharectersCounter</li>
        </Link>
      </ul>
    </div>
  );
};

export default Menu;
