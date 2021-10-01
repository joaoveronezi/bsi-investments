/* eslint-disable react/prop-types */
import React from "react";
import socialIcon from "assets/images/linkedin-icon.svg";
import mailIcon from "assets/images/mail-icon.svg";
import { CardWrapper, TextWrapper, SocialIconsWrapper } from "./Card.styles";

const Card = ({
  name, title, link1, profilePic
}) => (
  <CardWrapper>
    <img src={profilePic} alt="teste" />
    <TextWrapper>
      <h2>{name}</h2>
      <h2>{title}</h2>
    </TextWrapper>
    <SocialIconsWrapper>
      <a href={link1} target="_blank" rel="noreferrer">
        <img src={socialIcon} alt="Icon" />
      </a>
      <a href="mailto:contato@bsinvest.com.br" target="_blank" rel="noreferrer">
        <img src={mailIcon} alt="Icon" />
      </a>
    </SocialIconsWrapper>
  </CardWrapper>
);

export default Card;
