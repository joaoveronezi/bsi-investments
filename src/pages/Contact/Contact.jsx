import React from "react";
import iconSRC from "assets/icons/bsi-icon.svg";
import contactImage from "assets/images/contact.png";
import Forms from "components/Forms";
import Footer from "components/Footer";
import {
  ContatoWrapper, ImageWrapper, IconImage,
  ContactImage, TextWrapper, Title, SubTitle, Tooltip, FormsWrapper
} from "./Contact.styles";

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
      <ContatoWrapper id="contact">
        <ImageWrapper>
          <IconImage src={iconSRC} alt="icon" />
          <ContactImage src={contactImage} alt="contactImage" />
        </ImageWrapper>
        <TextWrapper>
          <Title>FALE COM A GENTE</Title>
          <SubTitle>ENTRE EM CONTATO!</SubTitle>
          <Tooltip>
            Preencha os campos abaixo que entraremos
            em contato com você.
          </Tooltip>
          <FormsComponent />
        </TextWrapper>
      </ContatoWrapper>
      <Footer />
    </>
  );
};

export default Contact;
