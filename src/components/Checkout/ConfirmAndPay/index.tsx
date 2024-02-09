import FreeCancellationBanner from "../FreeCancellationBanner";
import PaymentForm from "../PaymentForm";
import PaymentMethodsComingSoon from "../PaymentMethodsComingSoon";
import TotalPayable from "../TotalPayable";
import styles from "./ConfirmAndPay.module.css";

function ConfirmAndPay() {
  return (
    <div
      className={styles["confirm-and-pay-div"]}
    > 
      <h1 className={styles["confirm-and-pay-h1"]}>Confirm & pay</h1>
      <div
        className={styles["payment-form-and-selected-product-info-divs-container"]}
      >
        <FreeCancellationBanner />
        <PaymentForm />
        <PaymentMethodsComingSoon />
        <TotalPayable />
      </div>
    </div>
  )
}

export default ConfirmAndPay;