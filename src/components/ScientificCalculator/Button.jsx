import styles from "./Button.module.css";

const Button = ({ children, color, onClick }) => {
  return (
    <div className={styles.button} color={color} onClick={onClick}>
      {children}
    </div>
  );
};

export default Button;
