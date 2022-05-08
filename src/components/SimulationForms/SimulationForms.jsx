/* eslint-disable padded-blocks */
/* eslint-disable max-len */
import React, { useState } from "react";
import {
  Button, FloatingLabel, Form, Modal
} from "react-bootstrap";
import iconSrc from "assets/icons/bsi-icon.svg";
import {
  ButtonWrapper,
  FormsStyled,
  SubmitButton,
  SimulationWrapper,
  SimulationResults,
  SimulationTextWrapper,
  Teste,
  ModalButton,
} from "./SimulationForms.styles";

const SimulationForms = () => {
  const [formState, setFormsState] = useState({
    monthNumber: 0,
    cashPerMonth: 0,
    anualProfitability: 0,
    valueApplication: 0,
  });
  const [simulationValues, setSimulationValues] = useState({
    monthlyProfitability: "",
    aproximatedReturn: "",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSimulationValues({
      monthlyProfitability: "1,440",
      aproximatedReturn: "800",
    });
    // Calcular aqui o state da simulação
  };

  return (
    <>
      <Form as={FormsStyled} noValidate onSubmit={handleSubmit}>
        <FloatingLabel
          controlId="meses"
          label="Nº de meses"
          className="mb-3"
        >
          <Form.Control
            type="number"
            placeholder="meses"
            name="monthNumber"
            required
            onChange={(e) => setFormsState({ ...formState, monthNumber: e.target.value })}
          />
          {/* <Form.Control.Feedback type="invalid">Campo Nome Obrigatório</Form.Control.Feedback> */}
        </FloatingLabel>
        {/* Colocar mask nesse campo */}
        <FloatingLabel controlId="dinheiroPorMes" label="Quanto irá guardar todos os meses?" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Somente numeros"
            name="cashPerMonth"
            required
            onChange={(e) => setFormsState({ ...formState, cashPerMonth: e.target.value })}
          />
          {/* <Form.Control.Feedback type="invalid">Campo Email Obrigatório</Form.Control.Feedback> */}
        </FloatingLabel>
        <FloatingLabel controlId="rentabilidadeAnual" label="Rentabilidade esperada no ano? (%)" className="mb-3">
          <Form.Control
            type="number"
            placeholder="rentabilidadeAnual"
            name="anualProfitability"
            required
            onChange={(e) => setFormsState({ ...formState, anualProfitability: e.target.value })}
          />
        </FloatingLabel>
        {/* <Form.Control.Feedback type="invalid">Campo Telefone Obrigatório</Form.Control.Feedback> */}
        <FloatingLabel controlId="valueApplication" label="Você já possui um valor para aplicar?" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Valor"
            name="valueApplication"
            required
            onChange={(e) => setFormsState({ ...formState, valueApplication: e.target.value })}
          />
          {/* <Form.Control.Feedback type="invalid">Campo Mensagem Obrigatório</Form.Control.Feedback> */}
        </FloatingLabel>
        <ButtonWrapper>
          <SubmitButton type="submit">
            Calcular
          </SubmitButton>
        </ButtonWrapper>
      </Form>
      <SimulationWrapper>
        <SimulationResults>
          <SimulationTextWrapper>
            <p>
              Rentabilidade mensal:
              {" "}
              {simulationValues.monthlyProfitability}
            </p>
            <p>
              Retorno aproximado:
              {" "}
              {simulationValues.aproximatedReturn}
            </p>
          </SimulationTextWrapper>
        </SimulationResults>
        <ButtonWrapper>
          <SubmitButton style={{ width: "300px" }} onClick={handleShow}>
            Investir Agora
          </SubmitButton>
        </ButtonWrapper>
      </SimulationWrapper>

      <Teste show={show} onHide={handleClose}>
        <Modal.Header>
          <img src={iconSrc} alt="BSI icon" />
        </Modal.Header>
        <Modal.Body>
          <h2>FINANÇAS PESSOAIS</h2>
          <p>Tenha acesso a uma planilha exclusiva para controlar suas finanças junto com um conteúdo exclusivo da BSI para você!</p>
          <ModalButton>Acesso ao conteúdo</ModalButton>
          <ModalButton>Baixe agora a planilha</ModalButton>

        </Modal.Body>
      </Teste>
    </>
  );
};

export default SimulationForms;
