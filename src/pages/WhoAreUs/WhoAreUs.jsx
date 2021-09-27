import Card from "components/Card";
import React from "react";
import {
  WhoAreUsWrapper, CardsContainer, TitleWrapper
} from "./WhoAreUs.styles";

const WhoAreUs = () => (
  <WhoAreUsWrapper>
    <TitleWrapper>
      <h1>NOSSO TIME</h1>
    </TitleWrapper>
    <CardsContainer>
      <Card name="Thiago Sartori Cardoso" title="*Sócio-fundador | AAI" link1="link1" link2="link2" />
      <Card name="Arthur Neves Trindade" title="*Sócio-fundador | AAI" link1="link1" link2="link2" />
      <Card name="Fernando Hitoshi Watanabe" title="*Sócio-fundador | AAI" link1="link1" link2="link2" />
    </CardsContainer>
  </WhoAreUsWrapper>
);

export default WhoAreUs;
