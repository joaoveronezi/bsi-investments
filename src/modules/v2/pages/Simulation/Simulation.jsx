import React from "react";
// import iconSRC from "assets/icons/bsi-icon.svg";
import iconSRC from "assets/icons/bsi-logo-dark.svg";
import contactImage from "assets/images/contact.png";
import paperIcon from "assets/images/paper.jpeg";
import Forms from "components/SimulationForms";
import {
  ContactWrapper, ImageWrapper, IconImage,
  ContactImage, TextWrapper, Title, Tooltip, FormsWrapper, TypographWrapper
} from "./Simulation.styles";

const Contact = () => {
  const FormsComponent = () => {
    if (window.innerWidth < 540) {
      return (
        <FormsWrapper>
          <Forms />
        </FormsWrapper>
      );
    }
    return (<Forms />);
  };

  return (
    <ContactWrapper id="simulation">
      <ImageWrapper>
        <IconImage src={iconSRC} alt="icon" />
        <ContactImage src={paperIcon} alt="contactImage" />
      </ImageWrapper>
      <TextWrapper>
        <TypographWrapper>
          <Title>SIMULE SEU INVESTIMENTO</Title>
          <Tooltip>
            Preencha os campos abaixo que iremos calcular a
            sua rentabilidade ao final.
          </Tooltip>
        </TypographWrapper>
        <FormsComponent />
      </TextWrapper>
    </ContactWrapper>
  );
};

export default Contact;
