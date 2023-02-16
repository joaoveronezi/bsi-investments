import React from "react";
import simulationImage from "assets/images/simulation-computer.svg";
import {
  BannerWrapper,
  BannerTitle,
  BannerDisclaimer,
  BannerButton,
  ImageBanner,
  InformationBanner
} from "./Banner.styles";

const bannerCopy = [
  "A Black Sheep possui, além dos modelos de assessoria de investimento, uma super plataforma de conteúdos selecionados a dedo para ajudar na sua jornada nos investimentos.",
  "A plataforma da BSI traz conteúdos atualizados sobre educação financeira, ações, fundos imobiliários, fundos de investimentos, tudo para ajudar investidores que estão no começo de sua jornada.",
  "Use nosso painel de cotações, para ficar antenado nos principais ativos ligados ao mercado brasileiro e ao mundial.",
  "Tire sua curiosidade baixe nossos conteúdos e nossa planilha de controle financeiro!",
];

const Banner = () => (
  <BannerWrapper id="enterprises">
    <BannerTitle>NOSSA PLATAFORMA</BannerTitle>
    <InformationBanner>
      <ImageBanner>
        <img src={simulationImage} alt="Imagem de um computador" />
      </ImageBanner>
      <BannerDisclaimer>
        {bannerCopy.map((element) => (
          <p key={element}>{element}</p>
        ))}
        <BannerButton
          type="button"
          style={{ marginBottom: "0px", marginTop: "20px" }}
          href="/plataforma"
          target="_blank"
          rel="noreferrer"
        >
          ACESSE AGORA!
        </BannerButton>
      </BannerDisclaimer>
    </InformationBanner>
  </BannerWrapper>

);

export default Banner;
