import styles from "./Checkout.module.css";
import ConfirmAndPay from "./ConfirmAndPay";

function Checkout() {
  return (
    <div
      className={styles["checkout-div"]}
    >
      <p className={styles["holding-tickets-p"]}>
        Holding your tickets for 30:00
      </p>
      <ConfirmAndPay />
    </div>
  )
}

export default Checkout;