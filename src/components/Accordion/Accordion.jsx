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
          <a href="https://www.linkedin.com/in/arthur-trindade-b73261144/">Arthur Neves Trindade</a>
          <a href="https://www.linkedin.com/in/fabio-pupo-63608b6a/">Fabio Muller dos Reis de Salles Pupo</a>
          <a href="https://www.linkedin.com/in/fernando-hitoshi-watanabe/">Fernando Hitoshi Watanabe </a>
          <a href="https://www.linkedin.com/in/jo%C3%A3o-paulo-pereira-silva-825396194/">João Paulo Pereira Silva</a>
          <a href="https://www.linkedin.com/in/torresxp/">Lucas Torres</a>
          <a href="https://www.linkedin.com/in/ricardo-ribeiro-385587282/">Ricardo Souza Ribeiro</a>
          <a href="https://www.linkedin.com/in/ricardo-ribeiro-385587282/">Thiago Sartori Cardoso</a>
        </AccordionComponent.Body>
      </AccordionComponent.Item>
    </AccordionComponent>
  </AccordionWrapper>
);

export default Accordion;
