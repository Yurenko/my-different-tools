import styles from "./ToggleButton.module.css";

const ToggleButton = () => {
  return (
    <div className={styles.wrapper}>
      <input type="checkbox" id="toggle" className={styles.toggle} />
      <label htmlFor="toggle" className={styles.label}>
        <span className={styles.toggleBackground}></span>
      </label>
      <div className={styles.background}></div>
    </div>
  );
};

export default ToggleButton;
