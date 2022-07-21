import React from "react";
import { whatsIcon } from "../../assets/icons/v2";
import { WhatsappButtonWrapper } from "./WhatsappButton.styles";

const WhatsappButton = () => (
  <WhatsappButtonWrapper>
    <img src={whatsIcon} alt="Whatsapp icon" />
  </WhatsappButtonWrapper>
);
export default WhatsappButton;
