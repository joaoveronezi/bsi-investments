import React from "react";
import { whatsIcon } from "../../assets/icons/v2";
import { WhatsappButtonWrapper } from "./WhatsappButton.styles";

const WhatsappButton = () => {
  console.log("Teste");

  // PEDIR O LINK DO WPP DA GALERA DA BSI
  return (
    <WhatsappButtonWrapper>
      <img src={whatsIcon} alt="Whatsapp icon" />
    </WhatsappButtonWrapper>
  );
};

export default WhatsappButton;
