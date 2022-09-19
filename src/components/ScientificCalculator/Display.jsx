import styles from './Display.module.css'

const Display = ({ value, hasMemory, expression }) => {
  return (
    <div className={styles.display}>
      <div className={styles.indicatorList}>
        {hasMemory && <span>M</span>}

        <div className={styles.expression}>{expression}</div>
      </div>

      <div className={styles.screen}>{value}</div>
    </div>
  );
};

export default Display;
