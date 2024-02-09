import { Select, TextInput } from "@mantine/core";
import { IoMdGlobe } from "react-icons/io";
import styles from "./PaymentForm.module.css";

type EnterYourDetailsProps = {
  mantineFormObj: any
}

function EnterYourDetails({ mantineFormObj }: EnterYourDetailsProps) {
  return (
    <div className={styles["enter-your-details-div"]}>
      <div className={styles["header"]}>
        <h2>Enter you Details</h2>
        <p>We'll be sending your tickets to the details below. Booking for a friend? Add their details.</p>
      </div>
      <div className={styles["form-elements-container"]}>
        <TextInput 
          placeholder="Full Name *"
          {...mantineFormObj.getInputProps("fullName")}
        />
        <div className={styles["two-inputs-in-single-line-div"]}>
          <Select
            leftSection={<IoMdGlobe />}
            placeholder="Country Code *"
            {...mantineFormObj.getInputProps("countryCode")}
            data={['IND', 'ARE', 'USA', 'CAN']}
          />
          <TextInput 
            placeholder="Phone Number"
            {...mantineFormObj.getInputProps("phoneNumber")}
          />
        </div>
        <div className={styles["two-inputs-in-single-line-div"]}>
          <TextInput 
            placeholder="Email"
            {...mantineFormObj.getInputProps("email")}
          />
          <TextInput 
            placeholder="Confirm Email"
            {...mantineFormObj.getInputProps("confirmEmail")}
          />
        </div>
      </div>
    </div>
  )
}

export default EnterYourDetails;