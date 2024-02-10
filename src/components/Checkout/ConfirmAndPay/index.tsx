"use client"

import BookingInfo from "../BookingInfo";
import FreeCancellationBanner from "../FreeCancellationBanner";
import PaymentForm from "../PaymentForm";
import TotalPayable from "../TotalPayable";
import styles from "./ConfirmAndPay.module.css";

function ConfirmAndPay() {
  return (
    <div
      className={styles["confirm-and-pay-div"]}
    > 
      <div className={styles["payment-form-container"]}>
        <h1 className={styles["confirm-and-pay-h1"]}>Confirm & pay</h1>
        <FreeCancellationBanner />
        <PaymentForm />
        <TotalPayable />
      </div>
      
      <BookingInfo />
    </div>
  )
}

export default ConfirmAndPay;