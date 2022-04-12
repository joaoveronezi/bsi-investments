/* eslint-disable react/prop-types */
import React from "react";
import socialIcon from "assets/images/linkedin-icon.svg";
import mailIcon from "assets/images/mail-icon.svg";
import {
  CardWrapper, TextWrapper, SocialIconsWrapper, ImageWrapper,
} from "./Card.styles";

const Card = ({
  name, title, link1, profilePic
}) => (
  <CardWrapper>
    <ImageWrapper>
      <img src={profilePic} alt="profilepic" />
    </ImageWrapper>
    <TextWrapper>
      <h3>{name}</h3>
      <h3>{title}</h3>
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
