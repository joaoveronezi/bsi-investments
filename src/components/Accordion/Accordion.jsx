import React from "react";
import { Accordion as AccordionComponent } from "react-bootstrap";
import { AccordionWrapper, AccordionHeader } from "./Accordion.styles";

const Accordion = () => (
  <AccordionWrapper>
    <AccordionComponent>
      <AccordionComponent.Item eventKey="0">
        <AccordionComponent.Header>
          <AccordionHeader>NOSSA CULTURA</AccordionHeader>
        </AccordionComponent.Header>
        <AccordionComponent.Body>
          Temos como objetivo trazer a melhor
          experiência de assessoria, convergindo as
          melhores escolhas de produtos financeiros.
        </AccordionComponent.Body>
      </AccordionComponent.Item>
      <AccordionComponent.Item eventKey="1" id="methodAccordion">
        <AccordionComponent.Header>
          <AccordionHeader>NOSSA MISSÃO</AccordionHeader>
        </AccordionComponent.Header>
        <AccordionComponent.Body>
          O tradeoff do tempo é a chave do sucesso.
          Nosso compromisso é fomentar ações no presente,
          para que nossos clientes tornem realidade seus planos para o futuro.
        </AccordionComponent.Body>
      </AccordionComponent.Item>
    </AccordionComponent>
  </AccordionWrapper>
);

export default Accordion;
