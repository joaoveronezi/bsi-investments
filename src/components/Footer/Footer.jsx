/* eslint-disable arrow-body-style */
import React from "react";
import icon from "assets/icons/bsi-icon.svg";
import linkedinIcon from "assets/images/linkedin-icon.svg";
import whatsAppIcon from "assets/images/whats-icon.svg";
import instaIcon from "assets/images/insta-icon.svg";
import youtubeIcon from "assets/images/youtube-icon.svg";
import telegramIcon from "assets/images/telegram-icon.svg";

import {
  DisclaimerTextWrapper,
  DisclaimerWrapper,
  FooterWrapper, IconAndAdressWrapper, IconWrapper, SocialIconsWrapper, SocialMediaWrapper,
} from "./Footer.style";

const Footer = () => {
  const text = "A BSI Assessor de Investimentos Ltda, inscrita sob o CNPJ: 42.914.651/0001-37 é uma empresa de Assessoria de Investimento devidamente registrada na Comissão de Valores Mobiliários na forma da Resolução CVM 178/23 (“Sociedade”), que mantém contrato de distribuição de produtos financeiros com a XP Investimentos Corretora de Câmbio, Títulos e Valores Mobiliários S.A. (“XP”) e pode, por conta e ordem dos seus clientes, operar no mercado de capitais segundo a legislação vigente. Na forma da legislação da CVM, o Assessor de Investimento não pode administrar ou gerir o patrimônio de investidores. O investimento em ações é um investimento de risco e rentabilidade passada não é garantia de rentabilidade futura. Na realização de operações com derivativos existe a possibilidade de perdas superiores aos valores investidos, podendo resultar em significativas perdas patrimoniais A Sociedade poderá exercer atividades complementares relacionadas aos mercados financeiro, securitário, de previdência e capitalização, desde que não conflitem com a atividade de assessoria de investimentos, podendo ser realizada por meio da pessoa jurídica acima descrita ou por meio de pessoa jurídica terceira. Todas as atividades são prestadas mantendo a devida segregação e em cumprimento ao quanto previsto nas regras da CVM ou de outros órgãos reguladores e autorreguladores. Para informações e dúvidas sobre produtos, contate seu assessor de investimentos. Para reclamações, contate a Ouvidoria da XP pelo telefone 0800 722 3730.";
  return (
    <FooterWrapper>
      <IconAndAdressWrapper>
        <IconWrapper>
          <a href="#home">
            <img src={icon} alt="Icon" />
          </a>
          <p>
            A BSI é um escritório de
            Assessoria de Investimento credenciado à XP Investimentos,
            com foco em atendimento personalizado e alinhado às necessidades de nossos clientes.
          </p>
        </IconWrapper>
        <SocialMediaWrapper>
          <SocialIconsWrapper>
            <a
              href="https://t.me/+e177AwAKBgxkNjhh"
              target="_blank"
              rel="noreferrer"
            >
              <img src={telegramIcon} alt="Icon" />
            </a>
            <a
              href="https://wa.me/message/WESFBCHTQ6HYC1"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsAppIcon} alt="Icon" />
            </a>
            <a
              href="https://www.instagram.com/blacksheepinvestimentos/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instaIcon} alt="Icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/blacksheep-investimentos/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedinIcon} alt="Icon" />
            </a>
            <a
              href="https://www.youtube.com/channel/UCm6yXA5CXvFj9eFzvR2WyXA"
              target="_blank"
              rel="noreferrer"
            >
              <img src={youtubeIcon} alt="Icon" />
            </a>
          </SocialIconsWrapper>
          <p>
            Av. Barão Homem de Melo, 4500, Cj. 510
            <br />
            Belo Horizonte - Minas Gerais
            <br />
            CEP: 30494-270
            <br />
            Tel. 3191-5591
            <br />
          </p>
        </SocialMediaWrapper>
      </IconAndAdressWrapper>
      <DisclaimerWrapper>
        <p>
          <strong>
            © BSI uma empresa credenciada da
            XP investimentos.
          </strong>
          Todos os direitos reservados.
        </p>
        <DisclaimerTextWrapper>
          <p>{text}</p>
        </DisclaimerTextWrapper>
      </DisclaimerWrapper>
    </FooterWrapper>
  );
};

export default Footer;
