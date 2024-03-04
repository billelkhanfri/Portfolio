// Import necessary modules
import { db } from "../../../firebase.js";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

// Import CSS styles
import "../styles/contact.css";

// Define ContactForm component
const ContactForm = () => {
  // State variables to hold form data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Reference to Firestore collection
  const userCollectionRef = collection(db, "contactdata");

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Add document to Firestore collection
    addDoc(userCollectionRef, {
      name: name,
      email: email,
      message: message,
    })
      .then(() => {
        // Show success message
        alert("Message envoyé avec succès");
        // Redirect if necessary
        window.location.href = "https://www.google.com";
      })
      .catch((error) => {
        // Log error to console
        console.error("Error adding document: ", error);
      });
  };

  // Render the component JSX
  return (
    <div className="outer-container">
      <div className="containerform">
        <p>Contactez moi</p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"> Nom et prénom</label>
          <input
            type="text"
            id="name"
            placeholder="Nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="email">Email </label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            cols="30"
            rows="10"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{ height: 200 }}
          ></textarea>
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    </div>
  );
};

// Export the ContactForm component
export default ContactForm;
