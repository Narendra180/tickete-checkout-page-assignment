import { Accordion, Button, Image } from "@mantine/core";
import { questions } from "./constants";
import styles from "./FAQ.module.css";
import { PiPlusBold } from "react-icons/pi";

function FAQ() {
  const accordionItems = questions.map(({id, label, content}) => {
    return (
      <Accordion.Item key={id} value={label}>
        <Accordion.Control>
          {label}
        </Accordion.Control>
        <Accordion.Panel>
          {content}
        </Accordion.Panel>
      </Accordion.Item>
    )
  })
  return (
    <div
      className={styles["faq-container"]}
    >
      <div className={styles["chat-with-us-container"]}>
        <div className={styles["header"]}>
          <h1>Frequently asked questions</h1>
          <p>Here are some of our most asked questions.</p>
        </div>
        <div className={styles["chat-with-us-div"]}>
          <div className={styles["text-and-chat-btn-container"]}>
            <div className={styles["text-container"]}>
              <p>Still need help?</p>
              <p>We're here for you.</p>
            </div>
            <Button className={styles["chat-with-us-btn"]}>
              Chat with Us
            </Button>
          </div>
          <div className={styles["decorative-img-container"]}>
            <Image src={"/chat-with-us.svg"} alt="robot" />
          </div>
        </div>        
      </div>

      <div className={styles["questions-container"]}>
        <div className={styles["header"]}>
          <h1>Frequently asked questions</h1>
          <p>Here are some of our most asked questions.</p>
        </div>
        <Accordion
          chevron={<PiPlusBold />}
        >
          {accordionItems}
        </Accordion>
  
        <div className={styles["divider"]}></div>
      </div>
    </div>
  )
}

export default FAQ;