import { Badge, Button, TextInput } from "@mantine/core";
import { DateInput } from "@mantine/dates";
import { PiInfo, PiPiggyBankFill, PiLockFill } from "react-icons/pi"
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
        <h3>Credit & debit card</h3>
        <div className={styles["card-type-icons-container"]}>

        </div>
        <div className={styles["form-elements-container"]}>
          <div className={styles["two-inputs-in-single-line-div"]}>
            <TextInput
              placeholder="Name on Card *"
              {...mantineFormObj.getInputProps("cardDetailsNameOfCard")}
            />
            <TextInput
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

        <div className={styles["total-payable-you-saved-text-container"]}>
          <div>
            <p>Total Payable: $xxxx</p>
            <p>You will be charged in AED {<PiInfo />}</p>
          </div>
          <Badge leftSection={<PiPiggyBankFill />}>You save {`<price>`}</Badge>
        </div>

        <p>
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
          className="confirm-and-pay-btn"
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