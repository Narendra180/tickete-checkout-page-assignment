import { MultiSelect, Select, TextInput } from "@mantine/core";
import styles from "./PaymentForm.module.css";

type AdditionalInfoProps = {
  mantineFormObj: any
}

function AdditionalInfo({ mantineFormObj }: AdditionalInfoProps) {
  return (
    <div className={styles["additonal-info-div"]}>
      <div className={styles["header"]}>
        <h2>Additional information</h2>
        <p>We need a few more details to complete your reservation.</p>
      </div>
      <div className={styles["form-elements-container"]}>
        <div className={styles["two-inputs-in-single-line-div"]}>
          <TextInput
            placeholder="Enter Something *"
            {...mantineFormObj.getInputProps("additionalTextInput")}
          />
          <Select
            placeholder="Country Code *"
            {...mantineFormObj.getInputProps("additionalSingleSelect")}
            data={['IND', 'ARE', 'USA', 'CAN']}
          />
        </div>
        <MultiSelect
          placeholder="Pick value *"
          data={['React', 'Angular', 'Vue', 'Svelte']}
          {...mantineFormObj.getInputProps("additionalMultiSelect")}
        />
      </div>
    </div>
  )
}

export default AdditionalInfo;