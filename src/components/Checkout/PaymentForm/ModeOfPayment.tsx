import { Badge, Button, Image, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { PiInfo, PiPiggyBankFill, PiLockFill, PiCreditCard } from "react-icons/pi"
import styles from "./PaymentForm.module.css";
import Link from "next/link";
import PaymentMethodsComingSoon from "../PaymentMethodsComingSoon";

type ModeOfPaymentProps = {
  mantineFormObj: any
}

function ModeOfPayment({ mantineFormObj }: ModeOfPaymentProps) {
  return (
    <div className={styles["mode-of-payment-div"]}>
      <div className={styles["header"]}>
        <h2>Select your mode of payment</h2>
        <p>Payments with Tickete are secure and encrypted.</p>
      </div>
      <div className={styles["payment-card-div"]}>
        <h3>
          <span className={styles["card-icon-and-credit-text-container"]}>
            <span className={styles["icon-span"]}>
              <PiCreditCard className={styles["payment-card-icon"]} />
            </span>
            <span>
              Credit & debit card
            </span>
          </span>
          <Image src={"/radio.svg"} alt="icon"/>
        </h3>
        <div className={styles["card-type-icons-container"]}>
          <span className={styles["icon-span"]}>
            <Image className={styles["payment-card-icon"]} src={"/visa.svg"} alt="visa logo" />           
          </span>
          <span className={styles["icon-span"]}>
            <Image className={styles["payment-card-icon"]} src={"/mastercard.svg"} alt="visa logo" />
          </span>
          <span className={styles["icon-span"]}>
            <Image className={styles["payment-card-icon"]} src={"/diners-club.svg"} alt="diners club logo" />
          </span>
        </div>
        <div className={`${styles["form-elements-container"]} ${styles["mode-of-patment-form-elements-container"]}`}>
          <div className={styles["two-inputs-in-single-line-div"]}>
            <TextInput
              placeholder="Name on Card *"
              {...mantineFormObj.getInputProps("cardDetailsNameOfCard")}
            />
            <TextInput
              leftSection={<PiCreditCard />}
              placeholder="Card Number *"
              {...mantineFormObj.getInputProps("cardDetailsCardNumber")}
            />
          </div>
          <div className={styles["two-inputs-in-single-line-div"]}>
            <DateInput
              placeholder="Expiry Date *"
              {...mantineFormObj.getInputProps("cardDetailsExpiryDate")}
            />
            <TextInput
              placeholder="<CVV/CVC> *"
              {...mantineFormObj.getInputProps("cardDetailsCvc")}
            />
          </div>
        </div>

        <div className={styles["total-payable-you-will-be-charged-in-text-container"]}>
          <div>
            <p className={styles["total-payable-text-p"]}>
              <span>Total Payable: </span>
              <span>$XXX</span>               
            </p>
            <p className={styles["you-will-be-charged-in-text-p"]}>
              <span>You will be charged in AED</span>
              <span><PiInfo /></span>
            </p>
          </div>
          <Badge leftSection={<PiPiggyBankFill />}>You save {`<price>`}</Badge>
        </div>

        <p className={styles["agree-policy-links-p"]}>
          By clicking “confirm & pay”, you agree to {" "}
          {
            <Link 
              href={"/terms-of-usage"}
            > 
              Tickete&apos;s general terms and conditions 
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

      <PaymentMethodsComingSoon />
    </div>
  )
}

export default ModeOfPayment;