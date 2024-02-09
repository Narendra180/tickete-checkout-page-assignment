import { PiInfoFill } from "react-icons/pi";
import styles from "./FreeCancellationBanner.module.css";

function FreeCancellationBanner() {
  return (
    <div
      className={styles["free-cancellation-banner-div"]}
    >
      <h2>Free Cancellation</h2>
      <p>Try to write a short and clear message</p>
      <PiInfoFill 
        className={styles["info-icon"]}
      />
    </div>
  )
}

export default FreeCancellationBanner;