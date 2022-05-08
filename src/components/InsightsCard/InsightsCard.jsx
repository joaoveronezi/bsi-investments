/* eslint-disable react/prop-types */
import React from "react";
import { CardContainer, IconContainer, TextContainer } from "./InsightsCard.styles";
import acoesImg from "../../assets/icons/v2/acoes.svg";

const InsightsCard = ({ text, imgSrc }) => (
  <CardContainer>
    <IconContainer>
      <img src={imgSrc} alt="Test" />
    </IconContainer>
    <TextContainer>
      <p>{text}</p>
    </TextContainer>
  </CardContainer>
);

export default InsightsCard;
