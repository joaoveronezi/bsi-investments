import Card from "components/Card";
import React from "react";
import ThiagoPic from "assets/images/thiago.png";
import FernandoPic from "assets/images/fernando.png";
import ArturPic from "assets/images/arthur.png";
import {
  WhoAreUsWrapper, CardsContainer, TitleWrapper
} from "./WhoAreUs.styles";

const WhoAreUs = () => (
  <WhoAreUsWrapper>
    <TitleWrapper>
      <h1>NOSSO TIME</h1>
    </TitleWrapper>
    <CardsContainer>
      <Card
        name="Arthur Neves Trindade"
        title="*Sócio-fundador | AAI"
        link1="https://www.linkedin.com/in/arthur-trindade-b73261144/
"
        profilePic={ArturPic}
      />
      <Card name="Fernando Hitoshi Watanabe" title="*Sócio-fundador | AAI" link1="https://www.linkedin.com/in/fernando-hitoshi-watanabe" profilePic={FernandoPic} />
      <Card name="Thiago Sartori Cardoso" title="*Sócio-fundador | AAI" link1="https://www.linkedin.com/in/thiago-sartori-73b18038" profilePic={ThiagoPic} />
    </CardsContainer>
  </WhoAreUsWrapper>
);

export default WhoAreUs;
