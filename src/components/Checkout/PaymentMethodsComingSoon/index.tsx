import React from "react";
import { FaGoogle,FaApple } from "react-icons/fa";
import styles from "./PaymentMethodsComingSoon.module.css";
import { Badge } from "@mantine/core";


function PaymentMethodsComingSoon() {
  return (
    <div className={styles["payment-methods-coming-soon-banners-container"]}>
      <div className={styles["coming-soon-banner"]}>
        <div className={styles["badge-and-coming-soon-text-container"]}>
          <Badge leftSection={<FaGoogle />}>Pay</Badge>
          <p>Coming Soon</p>
        </div>
        <div className={styles["dot"]}></div>
      </div>
      <div className={styles["coming-soon-banner"]}>
        <div className={styles["badge-and-coming-soon-text-container"]}>
          <Badge leftSection={<FaApple />}>Pay</Badge>
          <p>Coming Soon</p>
        </div>
        <div className={styles["dot"]}></div>
      </div>
    </div>
  )
}

export default PaymentMethodsComingSoon;