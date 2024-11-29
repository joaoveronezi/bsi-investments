import React from "react";
import { whatsIcon } from "../../assets/icons/v2";
import { WhatsappButtonWrapper } from "./WhatsappButton.styles";

const WhatsappButton = () => (
  <a
    href="https://wa.me/553131915591"
    target="_blank"
    rel="noreferrer"
  >
    <WhatsappButtonWrapper>
      <img src={whatsIcon} alt="Icon" />
    </WhatsappButtonWrapper>
  </a>
);
export default WhatsappButton;
