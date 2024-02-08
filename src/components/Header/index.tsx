import { Image } from "@mantine/core";
import { BsArrowLeft } from "react-icons/bs";
import styles from "./Header.module.css";
import Link from "next/link";

function Header() {
  return (
    <div
      className={styles["header-div"]}
    >
      <Image 
        className={styles["logo-img"]}
        src={"/logo.svg"}
        alt="logo"
      />
      <BsArrowLeft 
        className={styles["mobile-left-arrow"]}
      />
      
      <div 
        className={styles["lock-icon-and-checkout-text-container"]}
      >
        <Image 
          className={styles["lock-icon-img"]}
          src={"/lock.svg"}
          alt="lock"
        />
        <span>Checkout</span>
      </div>

      <Link
        className={styles["help-link"]}
        href={"/help"}
      >
        <Image
          className={styles["question-mark-icon"]}
          src={"/question-mark.svg"}
          alt="question mark"
        />
        <span className={styles["help-text"]}>Help</span>
      </Link>
    </div>
  )
}

export default Header;