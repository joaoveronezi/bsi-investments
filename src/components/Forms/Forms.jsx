/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
/* eslint-disable semi */
import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import emailjs from "emailjs-com";
import InputMask from "react-input-mask";
import { ButtonWrapper, FormsStyled, SubmitButton } from "./Forms.style";

const Forms = () => {
  const [phone, setPhone] = useState("");

  const sendEmail = (e) => { // colocar com a conta da BSI
    e.preventDefault();
    emailjs.sendForm("gmail", "template_wyihy2x", e.target, "user_qoRyU4scf3XSErG3biuuL")
      .then((result) => {
        alert("Email enviado com sucesso!", result);
      }, (error) => {
        alert("Algum erro aconteceu, ao tentar enviar um email")
      });
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
    <Form as={FormsStyled} onSubmit={sendEmail}>
      <FloatingLabel
        controlId="name"
        label="Nome"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="Seu Nome" name="name" />
      </FloatingLabel>
      <FloatingLabel controlId="email" label="Email" className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" name="email" />
      </FloatingLabel>
      <FloatingLabel controlId="telefone" label="Telefone (DDD) + NUM" className="mb-3">
        <Form.Control
          value={phone}
          onChange={(e) => setPhone(maskPhone(e.target.value))}
          type="tel"
          placeholder="Telefone"
          name="cellphone"
        />
      </FloatingLabel>
      <FloatingLabel controlId="message" label="Mensagem" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Deixe sua mensagem"
          style={{ height: "100px" }}
          name="message"
        />
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
