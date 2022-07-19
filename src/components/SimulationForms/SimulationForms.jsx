/* eslint-disable no-restricted-properties */
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
  InsideModal,
  ModalButton,
} from "./SimulationForms.styles";

const SimulationForms = () => {
  const [formState, setFormsState] = useState({
    numberOfMonths: 0,
    monthlyInvestment: 0,
    annualProfitability: 0,
    initialInvestment: 0,
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

    const {
      numberOfMonths,
      monthlyInvestment,
      annualProfitability,
      initialInvestment,
    } = formState;

    const monthlyProfit = (Math.pow((1 + (annualProfitability / 100)), (1 / numberOfMonths)) - 1) * 100;
    const monthlyProfitInPercent = parseFloat((monthlyProfit / 100).toFixed(3));

    const futureValue = (monthlyInvestment * Math.pow((1 + monthlyProfitInPercent), numberOfMonths)) + initialInvestment;

    setSimulationValues({
      monthlyProfitability: `${monthlyProfit.toFixed(3)}%`,
      aproximatedReturn: `R$${futureValue.toFixed(2)}`,
    });
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
            name="numberOfMonths"
            required
            onChange={(e) => setFormsState({ ...formState, numberOfMonths: +e.target.value })}
          />
          {/* <Form.Control.Feedback type="invalid">Campo Nome Obrigatório</Form.Control.Feedback> */}
        </FloatingLabel>
        {/* Colocar mask nesse campo */}
        <FloatingLabel controlId="dinheiroPorMes" label="Quanto irá guardar todos os meses?" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Somente numeros"
            name="monthlyInvestment"
            required
            onChange={(e) => setFormsState({ ...formState, monthlyInvestment: +e.target.value })}
          />
          {/* <Form.Control.Feedback type="invalid">Campo Email Obrigatório</Form.Control.Feedback> */}
        </FloatingLabel>
        <FloatingLabel controlId="rentabilidadeAnual" label="Rentabilidade esperada no ano? (%)" className="mb-3">
          <Form.Control
            type="number"
            placeholder="rentabilidadeAnual"
            name="annualProfitability"
            required
            onChange={(e) => setFormsState({ ...formState, annualProfitability: +e.target.value })}
          />
        </FloatingLabel>
        {/* <Form.Control.Feedback type="invalid">Campo Telefone Obrigatório</Form.Control.Feedback> */}
        <FloatingLabel controlId="initialInvestment" label="Você já possui um valor para aplicar?" className="mb-3">
          <Form.Control
            type="number"
            placeholder="Valor"
            name="initialInvestment"
            required
            onChange={(e) => setFormsState({ ...formState, initialInvestment: +e.target.value })}
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

      <InsideModal show={show} onHide={handleClose}>
        <Modal.Header>
          <img src={iconSrc} alt="BSI icon" />
        </Modal.Header>
        <Modal.Body>
          <h2>FINANÇAS PESSOAIS</h2>
          <p>Tenha acesso a uma planilha exclusiva para controlar suas finanças junto com um conteúdo exclusivo da BSI para você!</p>
          <div>
            <ModalButton>Acesso ao conteúdo</ModalButton>
            <ModalButton>Baixe agora a planilha</ModalButton>
          </div>
        </Modal.Body>
      </InsideModal>
    </>
  );
};

export default SimulationForms;
