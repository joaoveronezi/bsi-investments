import React, { useState } from "react";
import sheepIcon from "assets/icons/sheepIcon.svg";
import darkIcon from "assets/icons/bsi-logo-dark.svg";
import paperIcon from "assets/images/paper.jpeg";
import iconSrc from "assets/icons/bsi-icon.svg";
import Forms from "components/SimulationForms";
import ModalComponent from "components/Modal";

import {
  ButtonWrapper,
  GetContent,
  InsideModal,
  ModalButton,
  SubmitButton,
} from "components/SimulationForms/SimulationForms.styles";
import {
  ContactWrapper,
  ImageWrapper,
  IconImage,
  ContactImage,
  TextWrapper,
  Title,
  Tooltip,
  FormsWrapper,
  TypographWrapper,
} from "./Simulation.styles";

const Contact = () => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const buttonStyle = {
    position: "absolute",
    left: "0",
    right: "0",
    top: "57%",
  };

  const customStyle = {
    top: "32%"
  };

  return (
    <>
      <ContactWrapper id="simulation">
        <ImageWrapper>
          <IconImage src={darkIcon} alt="icon" />
          <IconImage src={sheepIcon} alt="icon" style={customStyle} />
          <ButtonWrapper style={buttonStyle}>
            <GetContent
              onClick={handleShow}
            >
              Acesse o Conteúdo
            </GetContent>
          </ButtonWrapper>
          <ContactImage src={paperIcon} alt="contactImage" />
        </ImageWrapper>
        <TextWrapper>
          <TypographWrapper>
            <Title>SIMULE SEU INVESTIMENTO</Title>
            <Tooltip>
              Acesse agora o simulador da xp investimentos:
            </Tooltip>
          </TypographWrapper>
          <ButtonWrapper>
            <SubmitButton
              style={{ width: "300px" }}
              href="https://www.xpi.com.br/simulador-de-investimento/"
              target="_blank"
              rel="noreferrer"
            >
              Acesse Simulador
            </SubmitButton>
          </ButtonWrapper>
        </TextWrapper>
      </ContactWrapper>
      <ModalComponent show={show} setShow={setShow} />
    </>
  );
};

export default Contact;
