import { db } from "../../../firebase.js";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

import "../styles/contact.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const userCollectionRef = collection(db, "contactdata");

  const handleSubmit = () => {
    addDoc(userCollectionRef, {
      name: name,
      email: email,
      message: message,
    })
      .then(() => {
        if (!alert("Message envoyé avec succès"))
          document.location = "https://www.google.com";
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return (
    <div className="outer-container">
      <div className="containerform">
        <p>Contact Form</p>
        <form action="">
          <label htmlFor="name"> Nom et prénom</label>
          <input
            type="text"
            id="name"
            placeholder="Nom"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            style={{ height: 200 }}
          >
            Message
          </textarea>
          <input type="submit" onClick={handleSubmit} defaultValue=" Envoyer" />{" "}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
