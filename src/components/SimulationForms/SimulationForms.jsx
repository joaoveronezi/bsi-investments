/* eslint-disable no-restricted-properties */
/* eslint-disable padded-blocks */
/* eslint-disable max-len */
import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";
import { compound } from "utils/compound";
import ModalComponent from "components/Modal";
import {
  ButtonWrapper,
  FormsStyled,
  SubmitButton,
  SimulationWrapper,
  SimulationResults,
  SimulationTextWrapper,
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

  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      numberOfMonths,
      monthlyInvestment,
      annualProfitability,
      initialInvestment,
    } = formState;

    const monthlyProfit = (Math.pow(1 + annualProfitability / 100, 1 / numberOfMonths) - 1) * 100;
    const monthlyProfitInPercent = parseFloat(monthlyProfit.toFixed(3));
    const timeInYears = numberOfMonths / 12;
    const monthlyProfitInYears = (monthlyProfitInPercent / 100) * 12;
    const compoundInterest = compound(
      initialInvestment,
      monthlyInvestment,
      timeInYears,
      monthlyProfitInYears,
      numberOfMonths
    );

    setSimulationValues({
      monthlyProfitability: `${monthlyProfit.toFixed(3)}%`,
      aproximatedReturn: `R$${compoundInterest.result}`,
    });
  };

  return (
    <>
      <Form as={FormsStyled} noValidate onSubmit={handleSubmit}>
        <FloatingLabel controlId="meses" label="Nº de meses" className="mb-3">
          <Form.Control
            type="number"
            placeholder="meses"
            name="numberOfMonths"
            required
            onChange={(e) => setFormsState({ ...formState, numberOfMonths: +e.target.value })}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="dinheiroPorMes"
          label="Quanto irá guardar todos os meses?"
          className="mb-3"
        >
          <Form.Control
            type="number"
            placeholder="Somente numeros"
            name="monthlyInvestment"
            required
            onChange={(e) => setFormsState({
              ...formState,
              monthlyInvestment: +e.target.value,
            })}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="rentabilidadeAnual"
          label="Rentabilidade esperada no ano? (%)"
          className="mb-3"
        >
          <Form.Control
            type="number"
            placeholder="rentabilidadeAnual"
            name="annualProfitability"
            required
            onChange={(e) => setFormsState({
              ...formState,
              annualProfitability: +e.target.value,
            })}
          />
        </FloatingLabel>
        <FloatingLabel
          controlId="initialInvestment"
          label="Você já possui um valor para aplicar?"
          className="mb-3"
        >
          <Form.Control
            type="number"
            placeholder="Valor"
            name="initialInvestment"
            required
            onChange={(e) => setFormsState({
              ...formState,
              initialInvestment: +e.target.value,
            })}
          />
        </FloatingLabel>
        <ButtonWrapper>
          <SubmitButton type="submit">Calcular</SubmitButton>
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
        <span>
          * Estes valores são aproximados baseados em taxa anual esperada
        </span>
        {window.innerWidth < 1024 && (
          <ButtonWrapper>
            <SubmitButton style={{ width: "300px" }} onClick={handleShow}>
              Acesse o Conteúdo
            </SubmitButton>
          </ButtonWrapper>
        )}
      </SimulationWrapper>
      <ModalComponent show={show} setShow={setShow} />
    </>
  );
};

export default SimulationForms;
