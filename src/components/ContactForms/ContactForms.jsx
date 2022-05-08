/* eslint-disable max-len */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable semi */
import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import { ButtonWrapper, FormsStyled, SubmitButton } from "./ContactForms.style";

const Forms = () => {
  const [phone, setPhone] = useState("");
  const [validated, setValidated] = useState(false);

  const handleSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);
    e.preventDefault();

    if (validated) {
      emailjs.sendForm("service_4i6c67r", "template_a6xunm7", e.target, "user_i0jHuQ72hDRMDGmvi9cok")
        .then((result) => {
          alert("Email enviado com sucesso!", result);
        }, (error) => {
          alert("Algum erro aconteceu, ao tentar enviar um email")
        });
    }

    e.target.reset();
  }

  const maskPhone = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .replace(/(-\d{4})(\d+?)$/, "$1");
  };

  return (
    <Form as={FormsStyled} noValidate validated={validated} onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="name"
        label="Nome"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Seu Nome" name="name" required />
        <Form.Control.Feedback type="invalid">Campo Nome Obrigatório</Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="email" label="Email" className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" name="email" required />
        <Form.Control.Feedback type="invalid">Campo Email Obrigatório</Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="telefone" label="Telefone (DDD) + NUM" className="mb-3">
        <Form.Control
          value={phone}
          onChange={(e) => setPhone(maskPhone(e.target.value))}
          type="tel"
          placeholder="Telefone"
          name="cellphone"
          required
        />
      </FloatingLabel>
      <Form.Control.Feedback type="invalid">Campo Telefone Obrigatório</Form.Control.Feedback>
      <FloatingLabel controlId="message" label="Mensagem" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Deixe sua mensagem"
          style={{ height: "100px" }}
          name="message"
          required
        />
        <Form.Control.Feedback type="invalid">Campo Mensagem Obrigatório</Form.Control.Feedback>
      </FloatingLabel>
      <ButtonWrapper>
        <SubmitButton type="submit">
          Enviar Mensagem
        </SubmitButton>
      </ButtonWrapper>
    </Form>
  );
}

export default Forms;
