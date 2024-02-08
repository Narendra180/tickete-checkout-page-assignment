import Link from "next/link";
import { footerLinks } from "./constants";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div
      className={styles["footer-div"]}
    >
      <p>
        Made with ❤️
      </p>
      <div
        className={styles["footer-links-container"]}
      >
        {
          footerLinks.map(({ path, label }) => {
            return (
              <>
                <div className={styles["dot-div"]}></div>
                <Link
                  href={path}
                >
                  {label}
                </Link>
              </>              
            )
          })
        }
      </div>
    </div>
  )
}

export default Footer;
