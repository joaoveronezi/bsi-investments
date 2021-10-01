import React from "react";
import {
  BannerWrapper, BannerTitle, BannerDisclaimer, BannerButton
} from "./Banner.styles";

const Banner = () => (
  <BannerWrapper id="enterprises">
    <BannerTitle>EMPRESAS</BannerTitle>
    <BannerDisclaimer>
      <p>
        Na Black Sheep Investimentos,
        oferecemos soluções financeiras completa para sua empresa.
        Atuamos com portifólio de investimentos completo para suporte à sua empresa.
      </p>
    </BannerDisclaimer>
    <a href="mailto:contato@bsinvest.com.br" target="_blank" rel="noreferrer">
      <BannerButton type="button">ENTRE EM CONTATO!</BannerButton>
    </a>
  </BannerWrapper>
);

export default Banner;
