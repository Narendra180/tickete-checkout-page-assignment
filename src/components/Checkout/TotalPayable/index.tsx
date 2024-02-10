import { PiInfoFill } from "react-icons/pi";
import styles from "./TotalPayable.module.css";

function TotalPayable() {
  return (
    <div className={styles["total-payable-div"]}>
      <h1>Total Payable: $XXX</h1>
      <div className={styles["info-banner"]}>
        <div className={styles["info-icon-container"]}>
          <PiInfoFill />
        </div>
        <div>
          <p>
            You will be charged in AED
          </p>
          <p>
            The price shown here is in US Dollar (USD) as per the current conversion rate. You will be charged in United Arab Emirates Dirham (AED).
          </p>
        </div>        
      </div>
    </div>
  )
}

export default TotalPayable;