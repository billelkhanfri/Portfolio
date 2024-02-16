import React from "react";
import { Form, Button } from "react-bootstrap";
import styled from "styled-components";

const StyledForm = styled(Form)`
  max-width: 500px;
  margin: auto;
`;

const StyledButton = styled(Button)`
  background-color: var(--primary-color);
  border-color: var(--primary-color);
  &:hover {
    color: var(--primary-color);
    background-color: white;
    border-color: white;
  }
`;

const ContactForm = () => {
  return (
    <StyledForm className="mt-5">
      <Form.Group controlId="formName" className="mb-3">
        <Form.Label>Nom</Form.Label>
        <Form.Control type="text" placeholder="Entrez votre nom" />
      </Form.Group>

      <Form.Group controlId="formEmail" className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Entrez votre email" />
      </Form.Group>

      <Form.Group controlId="formMessage" className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          placeholder="Entrez votre message"
        />
      </Form.Group>

      <StyledButton variant="primary" type="submit" className="mb-5">
        Envoyer
      </StyledButton>
    </StyledForm>
  );
};

export default ContactForm;
