import emailjs from "@emailjs/browser"
import Swal from 'sweetalert2'
import { LanguageContext } from "../../../Context/LanguageContext";
import { useContext } from "react";

const Contact = () => {
  const { texts } = useContext(LanguageContext)

  const submitHandler = e => {
    e.preventDefault()
   const serviceID = import.meta.env.VITE_EMAIL_SERVICE_ID;
   const templateID = import.meta.env.VITE_EMAIL_TEMPLATE_ID;

   emailjs.sendForm(serviceID, templateID, e.target, import.meta.env.VITE_EMAIL_PUBLIC_KEY)
    .then(() => {
      Swal.fire({
        title: texts.successMsg,
        icon: 'success'
      });
    }, (err) => {
      console.log(err)
      Swal.fire({
        title: 'Error',
        text: `Error: ${err.text}`,
        icon: 'error',
      });
    });
  }

  return (
    <section className="contact" id="contact">
      <h3 className="title">{texts.contactMeTitle}</h3>
      <form onSubmit={e => submitHandler(e)}>
        <div>
            <input type="text" placeholder={texts.firstNameInput} name="name" id="nam" required />
            <input
              type="text"
              placeholder={texts.lastNameInput}
              name="last"
              id="last"
              required
            />
        </div>
        <input
          type="email"
          placeholder={texts.emailInput}
          name="mail"
          id="mail"
          required
        />
        <textarea
          cols="30"
          rows="6"
          placeholder={texts.messageInput}
          name="msg"
          id="msg"
          required
        ></textarea>
        <input type="submit" id="button" value={texts.sendButton.toUpperCase()} className="button"/>
      </form>
    </section>
  );
};

export default Contact;
