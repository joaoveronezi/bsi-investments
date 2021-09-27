/* eslint-disable react/prop-types */
import React from "react";
import EclipseTeste from "assets/images/eclipse.png";
import { CardWrapper, TextWrapper } from "./Card.styles";

const Card = ({
  name, title, link1, link2
}) => (
  <CardWrapper>
    <img src={EclipseTeste} alt="teste" />

    <TextWrapper>
      <h2>{name}</h2>
      <h2>{title}</h2>
    </TextWrapper>

    <p>{link1}</p>
    <p>{link2}</p>
  </CardWrapper>
);

export default Card;
