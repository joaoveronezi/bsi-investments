/* eslint-disable import/named */
import React from "react";
import dividerIcon from "assets/icons/divider.svg";
import { BannerButton } from "components/Banner/Banner.styles";
import {
  AdviceWrapper, CardContainer, CardsWrapper, TitleWrapper
} from "./Advice.styles";

const adviceItems = [
  {
    title: "Digital",
    subTitle: "Assessoria até 300 mil em investimentos",
    topics: [
      "Conteúdos exclusivos",
      "Planilha para organização financeira",
      "Atendimento sob-demanda",
    ]
  }, {
    title: "Exclusiva",
    subTitle: "Assessoria acima de 300 mil em investimentos",
    topics: [
      "Follow-up Ativo",
      "Revisão trimestral",
      "Estudos e atendimento personalizado",
    ]
  },
  {
    title: "Unique",
    subTitle: "Assessoria acima de 3 milhões em investimentos",
    topics: [
      "Follow-up Ativo",
      "Revisão mensal",
      "Selo de Investidor Qualificado",
    ]
  },
  {
    title: "Private",
    subTitle: "Assessoria acima de 10 milhões em investimentos",
    topics: [
      "Follow-up Ativo",
      "Revisão mensal",
      "Produtos ultrahigh do mercado",
      "Selo de Investidor Profissional",
    ]
  },
  {
    title: "Empresas",
    subTitle: "Assessoria especializada para sua empresa",
    topics: [
      "Follow-up Ativo",
      "Soluções personalizadas",
      "Produtos Exclusivos para PJ",
    ]
  },
];

const Advice = () => (
  <AdviceWrapper id="advice" style={{ backgroundImage: "url(resources/images/assesoria.jpg)" }}>
    <TitleWrapper style={{ marginBottom: "50px", marginTop: window.innerWidth <= 1440 ? "100px" : "0" }}>
      <h1>ASSESSORIA</h1>
      <p>Escolha a assessoria alinhada a seu momento de vida</p>
    </TitleWrapper>
    <CardsWrapper>
      {adviceItems.map(({ title, subTitle, topics }) => (
        <CardContainer key={title}>
          <h2>{title}</h2>
          <p>{subTitle}</p>
          <img src={dividerIcon} alt="divider" />
          <ul>
            {topics.map((element) => (
              <li key={element}>{element}</li>
            ))}
          </ul>
        </CardContainer>
      ))}
    </CardsWrapper>

    <BannerButton
      href="https://wa.me/message/WESFBCHTQ6HYC1"
      target="_blank"
      rel="noreferrer"
      type="button"
      style={{ margin: "0 auto" }}
    >
      ENTRE EM CONTATO

    </BannerButton>

  </AdviceWrapper>
);

export default Advice;
