import { Badge, Button, Image } from "@mantine/core";
import { PiTrophyFill, PiTicketFill, PiCalendarBlankFill, PiClockFill, PiUsersFill, PiPlusBold, PiPiggyBankFill, PiInfo, PiLockFill } from "react-icons/pi";
import { Carousel } from "@mantine/carousel";
import styles from "./BookingInfo.module.css";
import Link from "next/link";

function BookingInfo() {
  return (
    <div className={styles["booking-info-container"]}>
      <div className={styles["image-carousel-container"]}>
        <Carousel
          className={styles["images-carousel"]}
          withIndicators
          height={200}
          loop
        >
          <Carousel.Slide>
            <Image
              className={styles["carousel-img"]}
              src="/booking-info/img1.jpg"
              alt="nature"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              className={styles["carousel-img"]}
              src="/booking-info/img2.jpg"
              alt="nature"
            />
          </Carousel.Slide>
          <Carousel.Slide>
            <Image
              className={styles["carousel-img"]}
              src="/booking-info/img3.jpg"
              alt="nature"
            />
          </Carousel.Slide>
        </Carousel>

        <Badge className={styles["best-seller-badge"]} leftSection={<PiTrophyFill />}>
          Best Seller
        </Badge>
      </div>

      <div className={styles["booked-place-rating-and-name-container"]}>
        <p
          className={styles["rating-and-category-p"]}
        >
          <Image className={styles["star-icon"]} src={"/booking-info/rating-star.svg"} />
          <span className={styles["rating"]}>4.9(4.5k)</span>
          <span className={styles["dot"]}></span>
          <span>Category</span>
        </p>
        <h1
          className={styles["booked-place-name"]}
        >
          Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef
        </h1>
      </div>

      <div
        className={styles["booking-details-container"]}
      >
        <p className={styles["booking-detail-p"]}>
          <span>
            <PiTicketFill />
          </span>
          <span>
            <span>Ticket Type</span>
          </span>
        </p>
        <p className={styles["booking-detail-p"]}>
          <span>
            <PiCalendarBlankFill />
          </span>
          <span>
            <span>Day, Month Date</span>
            <span>Duration: duration</span>
          </span>
        </p>
        <p className={styles["booking-detail-p"]}>
          <span>
            <PiClockFill />
          </span>
          <span>
            <span>Time</span>
            <span>Operating Hours: time to time</span>
          </span>
        </p>
        <p className={styles["booking-detail-p"]}>
          <span>
            <PiUsersFill />
          </span>
          <span>
            <span>5 Guests</span>
          </span>
        </p>
      </div>

      <div className={styles["view-payment-summary-div"]}>
        <p>View Payment Summary</p>
        <PiPlusBold />
        <div className={styles["divider"]}></div>
      </div>

      <div className={styles["total-payable-and-confirm-btn-div"]}>
        <div className={styles["total-payable-text-container"]}>
          <p className={styles["total-payable-text-p"]}>
            <span>
              Total Payable
            </span>
            <span>$XXX</span>
          </p>
          <Badge leftSection={<PiPiggyBankFill />}>
            You Saved Price
          </Badge>
          <p className={styles["you-will-be-charged-text"]}>
            <span>
              You will be charged in AED
            </span>
            <span>
              <PiInfo />
            </span>
          </p>
        </div>

        <div className={styles["license-link-and-submit-btn-container"]}>
          <p className={styles["terms-cancellation-policy-links-p"]}>
            By clicking “confirm & pay”, you agree to {" "}
            {
              <Link
                href={"/terms-of-usage"}
              >
                Tickete's general terms and conditions
              </Link>
            }
            {" "} and {" "}
            {
              <Link
                href={"/cancellation-policy"}
              >
                cancellation policy.
              </Link>
            }
          </p>

          <Button
            className={styles["confirm-and-pay-btn"]}
            leftSection={<PiLockFill />}
            type="submit"
          >
            Confirm and Pay
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BookingInfo;