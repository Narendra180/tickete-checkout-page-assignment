import Link from "next/link";
import { footerLinks } from "./constants";
import styles from "./Footer.module.css";
import { Image } from "@mantine/core";
import { Fragment } from "react";

function Footer() {
  return (
    <div
      className={styles["footer-div"]}
    >
      <div
        className={styles["footer-logo-container"]}
      >
        <Image 
          className={styles["footer-logo"]}
          src="/logo-white.svg"
          alt="logo"
        />
      </div>
      
      <div
        className={styles["made-with-love-and-footer-links-wrapper"]}
      >
        <p
          className={styles["made-with-love-p"]}
        >
          Made with ❤️
        </p>
        <div
          className={styles["footer-links-container"]}
        >
          {
            footerLinks.map(({ id, path, label }) => {
              return (
                <div className={styles["link-item"]}>
                  <div className={styles["dot-div"]}></div>
                  <Link
                    href={path}
                  >
                    {label}
                  </Link>
                </div>              
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Footer;
