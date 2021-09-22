import React from "react";
// import homeImage from "assets/images/teste.png";
import {
  HomeContainer, TextWrapper, HomeTitle, AccountButton
} from "./Home.styles";

const Home = () => (
  <HomeContainer style={{ backgroundImage: "url(resources/images/homeImage.png)" }}>
    <TextWrapper>
      <HomeTitle>
        Invista com quem te proporcione a
        <span> melhor </span>
        experiência ao investir.
      </HomeTitle>
      <AccountButton type="button">ABRE SUA CONTA</AccountButton>
    </TextWrapper>
  </HomeContainer>
);

export default Home;
