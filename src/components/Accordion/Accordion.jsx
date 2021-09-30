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
          <AccordionHeader>NOSSO MÉTODO</AccordionHeader>
        </AccordionComponent.Header>
        <AccordionComponent.Body id="method">
          Usar e abusar de ferramentas de engenharia aplicada a finanças e
          criar os 4 espaços da inovação dentro do serviço de assessoria de investimentos.
          <br />
          1. Inspirar nossos clientes com as nossas soluções em assessoria de investimentos.
          <br />
          2. Idealizar soluções alinhadas às necessidades de cada pessoa.
          <br />
          3. Implementar soluções, com responsabilidade e segurança, para proteger o
          patrimônio sob custódia.
          <br />
          4. Acompanhar é proporcionar aos nossos clientes um follow-up que acompanhe de perto
          a evolução da carteira e fazer intervenções quando necessário,
          visando sempre aos objetivos definidos na idealização da soluções de investimento.
        </AccordionComponent.Body>
      </AccordionComponent.Item>
      <AccordionComponent.Item eventKey="2">
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
