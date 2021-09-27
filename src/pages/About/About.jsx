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
          A Black Sheep Investimentos, é uma assesoria credenciada à XP Investimentos,
          que conta com time certificado pela ANCORD e autorizados pela CVM a prestar assessoria
          financeira.
        </AboutText>
        <AboutText>
          O Manifesto: O nome "Black sheep" foi escolhido por trazer a ideia de ter seu próprio DNA,
          estrutura que tem com  objetivo se destacar em meio do rebanho
          (Bancos e Escritórios de Assessoria tradicionais), sendo hub de
          inovação, cultura e criatividade em
          nossas soluções em assessoria de investimento, pensando em nossos clientes.
        </AboutText>
        <AboutText>
          Da Engenharia até os investimentos começos essa historia: Tudo
          começou nos anos de 2017 e 2018,
          por experiencias
          financeiras vividas dos fundadores, surgiu-se necessidade de
          organizar a vida financeira e buscar
          planos que sejam efetivos e perenes para
          um futuro prospero.
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
