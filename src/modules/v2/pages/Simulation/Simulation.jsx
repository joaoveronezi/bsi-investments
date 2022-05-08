import React from "react";
import iconSRC from "assets/icons/bsi-icon.svg";
import contactImage from "assets/images/contact.png";
import Forms from "components/SimulationForms";
import Footer from "components/Footer";
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
    <>
      <ContactWrapper id="simulation">
        <ImageWrapper>
          <IconImage src={iconSRC} alt="icon" />
          <ContactImage src={contactImage} alt="contactImage" />
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
      <Footer />
    </>
  );
};

export default Contact;
