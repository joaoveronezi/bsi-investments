/* eslint-disable import/named */
import React from "react";
import dividerIcon from "assets/icons/divider.svg";
import {
  AdviceWrapper, CardText, CardsWrapper, TitleWrapper
} from "./Advice.styles";

const Advice = () => (
  <AdviceWrapper id="advice" style={{ backgroundImage: "url(resources/images/assesoria.jpg)" }}>
    <TitleWrapper style={{ marginBottom: "50px", marginTop: window.innerWidth <= 1440 ? "100px" : "0" }}>
      <h1>ASSESSORIA</h1>
      <p>Escolha a assessoria alinhada a seu momento de vida</p>
    </TitleWrapper>
    <CardsWrapper>
      <CardText>
        <h2>Private</h2>
        <p>Assessoria a partir de 1 milhão em investimentos</p>
        <img src={dividerIcon} alt="divider" />
        <p>
          Times de especialistas que buscam soluções
          sofisticadas alinhadas a suas estratégias de investimentos
        </p>
      </CardText>
      <CardText>
        <h2>Alta renda</h2>
        <p>Assessoria entre R$ 500 mil e R$ 1 milhão  em  investimentos</p>
        <img src={dividerIcon} alt="divider" />
        <p>
          Um acompanhamento premium. As melhores alternativas de investimento do mercado financeiro.
        </p>
      </CardText>
      <CardText>
        <h2>Exclusivo</h2>
        <p>Assessoria entre R$ 250 mil e R$ 500 mil em investimentos</p>
        <img src={dividerIcon} alt="divider" />
        <p>
          Proximidade é a palvra-chave. Aqui você conta com um
          acompanhamento individual, além da carteira personalizada alinhada a seus objetivos.
        </p>
      </CardText>
      <CardText>
        <h2>Sob demanda</h2>
        <p>Assessoria entre R$ 100 mil e R$ 250 mil em investimentos</p>
        <img src={dividerIcon} alt="divider" />
        <p>
          Nós preocupamos com seu futuro. Venha conhecer a nossa assessoria com formato ágil
          e dinâmico. Se precisar, entre em contato com nossos canais de atendimento.
        </p>
      </CardText>
    </CardsWrapper>
    <CardText style={{ marginBottom: window.innerWidth <= 1440 ? "100px" : "0" }}>
      <h2>Digital</h2>
      <p>Assessoria digital a partir de R$ 10 mil reais em investimentos</p>
      <img src={dividerIcon} alt="divider" />
      <p>
        A melhor experiência XP através da melhor plataforma de investimentos - site e aplicativo.
      </p>
    </CardText>
  </AdviceWrapper>
);

export default Advice;
