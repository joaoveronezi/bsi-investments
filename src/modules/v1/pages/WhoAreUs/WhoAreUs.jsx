import { BannerButton } from "components/Banner/Banner.styles";
import Card from "components/Card";
import React from "react";

import {
  WhoAreUsWrapper, CardsContainer, TitleWrapper
} from "./WhoAreUs.styles";

const WhoAreUs = () => {

  const cardsCopy = [
    {
      letter: "E",
      text: "<p>Não existe um processo de investimentos consolidado, sem uma sólida <span>educação financeira.</span></p>",
    },
    {
      letter: "N",
      text: "<p><span>Não te perturbamos</span> com ligações oferecendo produtos descorrelacionados com seu propósito de investimento.</p>",
    },
    {
      letter: "G",
      text: "<p><span>Guiamos sua jornada</span>, pois com proposito bem definido e objetivos claros construímos e fazemos essa jornada juntos.</p>",
    },
    {
      letter: "I",
      text: "<p><span>Investimos com inteligência</span> e tecnologia, resultado de engenharia de dados e inovação em nossos processos de alocação.</p>",
    },
    {
      letter: "E",
      text: "<p>Nosso foco é na <span>experiência do cliente</span>, pois queremos fazer dessa relação uma construção de longo prazo.</p>",
    },
  ];
  return (
    <WhoAreUsWrapper>
      <TitleWrapper>
        <h2>MÉTODO DA BSI</h2>
      </TitleWrapper>
      <CardsContainer>
        {
          cardsCopy.map(({ letter, text }) => (
            <Card key={text} letter={letter} text={text} />
          ))
        }
      </CardsContainer>

      <BannerButton type="button" style={{ margin: "0 auto" }}>CONHEÇA NOSSO TIME</BannerButton>
    </WhoAreUsWrapper>
  );
};

export default WhoAreUs;
