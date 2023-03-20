import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import FieldWrapper from "./FieldWrapper";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const {
    state: { form },
  } = useContext(AppContext);

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(e.target.elements);
    const data = {
      variables: {
        lastname: e.target.elements.lastname.value,
        firstname: e.target.elements.firstname.value,
        phone: e.target.elements.phone.value,
        email: e.target.elements.email.value,
        message: e.target.elements.message.value,
      },
    };
    console.log(data);
    /*     actions.submitForm(data);
     */
  };
  return (
    <AnimatePresence>
      <motion.div
        key="form"
        className="component__contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2 className="component__contact-title">
          I'd love <br />
          <span>to hear you.</span>
        </h2>
        <form id="form__contact" onSubmit={submitFormHandler}>
          {Object.entries(form).map(([key, field]) => (
            <FieldWrapper key={field.id} field={field} />
          ))}
          <div className="form__contact-button_submit">
            <button form="form__contact" type="submit">
              Envoyer
            </button>
          </div>
        </form>
      </motion.div>
    </AnimatePresence>
  );
}
