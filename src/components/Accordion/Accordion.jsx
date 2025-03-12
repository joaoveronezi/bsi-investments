import React from "react";
import { Accordion as AccordionComponent } from "react-bootstrap";
import { AccordionHeader, AccordionWrapper } from "./Accordion.styles";

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
          <AccordionHeader>CONHEÇA NOSSO TIME DE ASSESSORES</AccordionHeader>
        </AccordionComponent.Header>
        <AccordionComponent.Body>
          <h5>Arthur Neves Trindade</h5>
          <a href="https://www.linkedin.com/in/arthur-trindade-b73261144/" style={{ fontWeight: "bold" }}>CONTATO</a>
          <h5>Fabio Muller dos Reis de Salles Pupo</h5>
          <a href="https://www.linkedin.com/in/fabio-pupo-63608b6a/" style={{ fontWeight: "bold" }}>CONTATO</a>
          <h5>Fernando Hitoshi Watanabe</h5>
          <a href="https://www.linkedin.com/in/fernando-hitoshi-watanabe/" style={{ fontWeight: "bold" }}>CONTATO</a>
          <h5>João Paulo Pereira Silva</h5>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-pereira-silva-825396194/" style={{ fontWeight: "bold" }}>CONTATO</a>
          <h5>Lucas Torres</h5>
          <a href="https://www.linkedin.com/in/torresxp/" style={{ fontWeight: "bold" }}>CONTATO</a>
          <h5>Ricardo Souza Ribeiro</h5>
          <a href="https://www.linkedin.com/in/ricardo-ribeiro-385587282/" style={{ fontWeight: "bold" }}>CONTATO</a>
          <h5>Thiago Sartori Cardoso</h5>
          <a href="https://www.linkedin.com/in/thiago-sartori-cardoso-73b18038/" style={{ fontWeight: "bold" }}>CONTATO</a>
        </AccordionComponent.Body>
      </AccordionComponent.Item>
    </AccordionComponent>
  </AccordionWrapper>
);

export default Accordion;
