import styles from "./CreaditCard.module.css";
import chip from "../../assets/img/chip.png";
import master from "../../assets/img/master.png";
import { ReactComponent as Wifi } from "../../assets/icons/wifi.svg";

const CreaditCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <div className={styles.cardTop}>
          <div className={styles.cardTitle}>Credit Card</div>
          <Wifi />
        </div>

        <div className={styles.cardCenter}>
          <img src={chip} alt="chip" />
        </div>
        <div className={styles.CardBottom}>
          <div className={styles.cardBottomLeft}>
            <div className={styles.number}> 2356 4587 8965 2145</div>
            <div>12/25</div>
            <div>Ilon Mask</div>
          </div>
          <div className={styles.cardBottomRight}>
            <img src={master} alt="master card" width={130} />
            <span className={styles.debit}>debit</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreaditCard;
