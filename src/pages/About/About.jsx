/* eslint-disable react/no-unescaped-entities */
import React from "react";
import aboutImage from "assets/images/aboutImage.jpg";
import Accordion from "components/Accordion";
import {
  AboutContainer, AboutText, AboutTitle, TextWrapper, Main, Aside, AccordionContainer,
} from "./About.styles";

const About = () => (
  <AboutContainer id="about">
    <Main>
      <TextWrapper>
        <AboutTitle>Sobre nós</AboutTitle>
        <AboutText>
          A Black Sheep Investimentos é uma assessoria credenciada à XP Investimentos
          que conta com time certificado pela ANCORD e autorizado pela CVM a prestar
          assessoria financeira.
          <br />
          <span>O manifesto</span>
          <br />
          O nome "Black sheep" foi escolhido por trazer a ideia de DNA próprio, por remeter
          a uma estrutura que tem como objetivo se destacar no meio do "rebanho"
          (bancos e escritórios de assessoria tradicionais), sendo um hub de
          inovação, cultura e criatividade.
          <br />

          <span>Da Engenharia aos Investimentos, o começo desta história </span>
          <br />
          Tudo começou nos anos de 2017 e 2018, a partir do interesse por organização de
          finanças pessoais e por crescimento no mercado financeiro. Três sócios se dedicaram aos
          estudos mais profundos sobre estratégias de investimento, para estabelecer objetivos
          e torná-los realidade através do mercado financeiro.
          <br />
          <br />
          "Uma vida de sucesso envolve a combinação: sonhos + realidade + determinação."
          <br />
          - Ray Dalio
        </AboutText>

      </TextWrapper>
      <AccordionContainer>
        <Accordion />
      </AccordionContainer>
    </Main>
    <Aside>

      <img src={aboutImage} alt="Homem ao celular" />
    </Aside>
  </AboutContainer>
);

export default About;
