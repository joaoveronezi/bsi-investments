/* eslint-disable react/prop-types */
import React from "react";
import {
  CardContainer,
  IconContainer,
  TextContainer,
  Link
} from "./InsightsCard.styles";

const InsightsCard = ({ text, imgSrc, link }) => (
  <CardContainer>
    <IconContainer>
      <Link href={link} key={text}>
        <img src={imgSrc} alt="Test" />
      </Link>
    </IconContainer>
    <TextContainer>
      <Link href={link} key={text}>
        <p>{text}</p>
      </Link>
    </TextContainer>
  </CardContainer>
);

export default InsightsCard;
