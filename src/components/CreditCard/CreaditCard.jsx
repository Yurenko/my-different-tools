import styles from "./CreaditCard.module.css";
import chip from "../../assets/img/chip.png";
import master from "../../assets/img/master.png";
import { ReactComponent as Wifi } from "../../assets/icons/wifi.svg";
import GoBackArrow from "../GoBackArrow/GoBackArrow";
import { useState } from "react";
import { formatCardNumber, getCardType } from "./helpers";
import { CURRENT_MONTH, CURRENT_YEAR, MONTHS, YEARS } from "./constans";

const CreaditCard = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [cardMonth, setCardMonth] = useState(0);
  const [cardYear, setCardYear] = useState(0);
  const [cardCvv, setCardCvv] = useState("");
  const [cardType, setCardType] = useState("visa");

  const handleChange = (event, type) => {
    let { value } = event.target;

    if (type === "cardNumber") {
      value = value.replace(/ /gi, "");
      if (isNaN(value)) {
        return;
      } else {
        const cardType = getCardType(value);
        setCardNumber(value);
        setCardType(cardType);
      }
    } else if (type === "cardName") {
      var regName = /^[a-zA-Z\s]*$/;
      if (!regName.test(value)) {
      } else {
        setCardName(value);
      }
    } else if (type === "cardMonth") {
      value = Number(value);
      setCardMonth(value);
    } else if (type === "cardYear") {
      value = Number(value);

      if (value === CURRENT_YEAR && cardMonth <= CURRENT_MONTH) {
        setCardMonth(0);
        setCardYear(value);
      } else {
        setCardYear(value);
      }
    } else if (type === "cardCvv") {
      value = value.replace(/ /gi, "");
      if (isNaN(value)) {
        return;
      } else {
        setCardCvv(value);
      }
    }
  };

  let displayNumber = [];

  for (let i = 0; i < 16; i++) {
    let displayDigit = "#";
    if (typeof cardNumber[i] !== "undefined") {
      displayDigit = i > 3 && i < 12 ? "*" : cardNumber[i];
    }
    displayNumber.push(displayDigit);
  }

  return (
    <div className={styles.wrapper}>
      <GoBackArrow />
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
            <div className={styles.number}>
              {displayNumber.map((digit, index) => (
                <div className={styles.digitWrapper} key={index}>
                  <div
                    className={
                      digit === "#"
                        ? `${styles.digit} ${styles.shown}`
                        : `${styles.digit} ${styles.hidden}`
                    }
                  >
                    #
                  </div>
                  <div
                    className={
                      digit === "#"
                        ? `${styles.digit} ${styles.hidden}`
                        : `${styles.digit} ${styles.shown}`
                    }
                  >
                    {digit === "#" ? "" : digit}
                  </div>
                </div>
              ))}
            </div>
            <div>
              {cardMonth === 0 ? "MM" : `${cardMonth + 100}`.slice(-2)}/
              {cardYear === 0 ? "YY" : `${cardYear}`.slice(-2)}
            </div>
            <div>
              {cardName.length <= 0 ? (
                <div>FULL NAME</div>
              ) : (
                cardName.split("").map((char, index) => (
                  <div
                    className={`${styles.character} ${
                      /\s/.test(char) ? styles.space : ""
                    }`}
                    key={index}
                  >
                    {char}
                  </div>
                ))
              )}
            </div>
          </div>
          <div className={styles.cardBottomRight}>
            <img src={master} alt="master card" width={130} />
            <span className={styles.debit}>debit</span>
          </div>
        </div>
      </div>
      <div className={styles.cardInputs}>
        <form className={styles.form}>
          <div className={styles.lgInput}>
            <label htmlFor="cardNumber"> Card Number</label>
            <input
              className={styles.numberInput}
              id="cardNumber"
              type="text"
              onChange={(event) => handleChange(event, "cardNumber")}
              value={formatCardNumber(cardNumber)}
              maxLength="19"
            />
          </div>
          <div className={styles.lgInput}>
            <label htmlFor="cardName">Card Holder's Name</label>
            <input
              className={styles.numberInput}
              id="cardName"
              type="text"
              onChange={(event) => handleChange(event, "cardName")}
              value={cardName}
              maxLength="24"
            />
          </div>
          <div className={styles.medInput}>
            <label htmlFor="cardMonth">Expiration Date</label>
            <select
              className={styles.monthInput}
              id="cardMonth"
              value={cardMonth}
              onChange={(event) => handleChange(event, "cardMonth")}
            >
              <option value="0" disabled>
                Month
              </option>
              {Object.keys(MONTHS).map((monthKey) => (
                <option
                  key={monthKey}
                  value={monthKey}
                  disabled={
                    cardYear === CURRENT_YEAR &&
                    Number(monthKey) <= CURRENT_MONTH
                  }
                >
                  {MONTHS[monthKey]}
                </option>
              ))}
            </select>
            <select
              className={styles.yearInput}
              id="cardYear"
              value={cardYear}
              onChange={(event) => handleChange(event, "cardYear")}
            >
              <option value="0" disabled>
                Year
              </option>
              {YEARS.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.smInput}>
            <label htmlFor="cardCvv">CVV</label>
            <input
              className={styles.cvvInput}
              id="cardCvv"
              value={cardCvv}
              onChange={(event) => handleChange(event, "cardCvv")}
              maxLength="3"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreaditCard;
