"use client"

import ConfirmAndPay from "./ConfirmAndPay";
import FAQ from "./FAQ";
import styles from "./Checkout.module.css";

function Checkout() {
  return (
    <div
      className={styles["checkout-div"]}
    >
      <p className={styles["holding-tickets-p"]}>
        Holding your tickets for 30:00
      </p>
      <ConfirmAndPay />

      <FAQ />
    </div>
  )
}

export default Checkout;