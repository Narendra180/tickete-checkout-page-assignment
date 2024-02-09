"use client"

import { useForm } from "@mantine/form";
import styles from "./PaymentForm.module.css";
import EnterYourDetails from "./EnterYourDetails";
import AdditionalInfo from "./AdditionalInfo";
import ModeOfPayment from "./ModeOfPayment";
import { useCallback } from "react";

function PaymentForm() {
  const form = useForm({
    initialValues: {
      fullName: "",
      countryCode: "",
      phoneNumber: "",
      email: "",
      confirmEmail: "",
      additionalTextInput: "",
      additionalSingleSelect: "",
      additionalMultiSelect: [],
      cardDetailsNameOfCard: "",
      cardDetailsCardNumber: "",
      cardDetailsExpiryDate: "",
      cardDetailsCvc: ""
    }
  });

  const handleSubmit = useCallback((values: any) => {
    console.log(values);
  }, [form])

  return (
    <div 
      className={styles["payment-form-div"]}
    >
      <form
        onSubmit={form.onSubmit(handleSubmit)}
      >
        <EnterYourDetails 
          mantineFormObj={form}
        />
        <AdditionalInfo 
          mantineFormObj={form}
        />
        <ModeOfPayment 
          mantineFormObj={form}
        />
      </form>
    </div>
  )
}

export default PaymentForm;