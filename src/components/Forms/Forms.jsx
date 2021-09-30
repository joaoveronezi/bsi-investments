/* eslint-disable arrow-body-style */
/* eslint-disable semi */
import React from "react"
import { FloatingLabel, Form } from "react-bootstrap"
import { ButtonWrapper, FormsStyled, SubmitButton } from "./Forms.style"

const Forms = () => {
  return (
    <Form as={FormsStyled}>
      <FloatingLabel
        controlId="floatingInput"
        label="Nome"
        className="mb-3"
      >
        <Form.Control type="email" placeholder="name@example.com" />
      </FloatingLabel>

      <FloatingLabel controlId="email" label="Email" className="mb-3">
        <Form.Control type="email" placeholder="name@example.com" />

      </FloatingLabel>

      <FloatingLabel controlId="telefone" label="Telefone (DDD) + NUM" className="mb-3">
        <Form.Control type="tel" placeholder="Telefone" maxlength="11" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea2" label="Mensagem" className="mb-3">
        <Form.Control
          as="textarea"
          placeholder="Deixe sua mensagem"
          style={{ height: "100px" }}
        />
      </FloatingLabel>
      <ButtonWrapper>
        <SubmitButton type="submit">
          Enviar Mensagem
        </SubmitButton>
      </ButtonWrapper>
    </Form>
  )
}

export default Forms
