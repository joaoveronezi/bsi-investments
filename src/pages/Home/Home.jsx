import React, { useState, useEffect } from "react";
import mouseLogo from "assets/icons/animationtest2.gif";
import {
  HomeContainer, TextWrapper, HomeTitle, AccountButton, MouseScrollWrapper,
} from "./Home.styles";

const MOCK_TITLE = [
  "A <span>melhor</span> experiência em assessoria de investimentos.",
  "Assessoria que proprociona a você <span>soluções</span> em investimentos.",
  "Assessoria personalizada que <span>inspira</span> pessoas e empresas."
];

const Home = () => {
  const [indexTitle, setIndexTitle] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setIndexTitle((oldIndex) => (oldIndex === 2 ? 0 : oldIndex + 1));
    }, 3000);
  }, [indexTitle]);

  return (
    <HomeContainer style={{ backgroundImage: "url(resources/images/homeImage.png)" }} id="home">
      <TextWrapper>
        <HomeTitle dangerouslySetInnerHTML={{ __html: MOCK_TITLE[indexTitle] }} />
        <a href="#contact">
          <AccountButton type="button">
            ABRA SUA CONTA
          </AccountButton>
        </a>
      </TextWrapper>
      <MouseScrollWrapper href="#about">
        <img src={mouseLogo} alt="Mouse Scroll" />
      </MouseScrollWrapper>
    </HomeContainer>
  );
};

export default Home;
