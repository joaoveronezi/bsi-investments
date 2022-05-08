/* eslint-disable arrow-body-style */
import React from "react";
import icon from "assets/icons/bsi-icon.svg";
import linkedinIcon from "assets/images/linkedin-icon.svg";
import whatsAppIcon from "assets/images/whats-icon.svg";
import instaIcon from "assets/images/insta-icon.svg";
import youtubeIcon from "assets/images/youtube-icon.svg";

// PEDIR LINK DO YOUTUBE DA GALERA DA BSI
import {
  DisclaimerTextWrapper,
  DisclaimerWrapper,
  FooterWrapper, IconAndAdressWrapper, IconWrapper, SocialIconsWrapper, SocialMediaWrapper,
} from "./Footer.style";

const Footer = () => {
  const text = "A Black Sheep Investimento-Agente Autônomo de Investimentos Ltda é uma empresa de agentes autônomos de investimento devidamente registrada na Comissão de Valores Mobiliários (CVM),na formada Resolução CVM16/2021. A Black Sheep Investimento–Agente Autônomo de Investimentos Ltda atua no mercado financeiro credenciada à XP Investimentos CCTVM S/A,o que pode ser verificado através do site da CVM (www.cvm.gov.br > Agentes Autônomos > Relação dos Agentes Autônomos contratados por uma Instituição Financeira > Corretoras > XP Investimentos) ou através do site da ANCORD  para escritórios credenciados a partir de outubro de 2012 (http://www.ancord.org.br/Website_Ancord/index.html > Agentes Autônomos > Consultas) ou através do site da própria XP Investimentos CCTVM S/A (www.xpi.com.br > Encontre um escritório > Selecione abaixo o estado e a cidade que deseja pesquisar > Veja a lista dos agentes autônomos). Na forma da legislação da CVM, o Agente Autônomo de Investimento não pode administrar ou gerir o patrimônio de investidores. O Agente Autônomo é um intermediário e depende da autorização prévia do cliente para realizar operações no mercado financeiro. O investimento em ações é um investimento de risco e rentabilidade passada não é garantia de rentabilidade futura. Na realização de operações com derivativos existe a possibilidade de perdas superiores aos valores investidos, podendo resultar em significativas perdas patrimoniais . Para informações e dúvidas, favor contatar seu Agente Autônomo de Investimentos. Para reclamações, favor contatar a Ouvidoria da XP Investimentos no telefone nº0800-722-3710";
  return (
    <FooterWrapper>
      <IconAndAdressWrapper>
        <IconWrapper>
          <a href="#home">
            <img src={icon} alt="Icon" />
          </a>
          <p>
            A BSI é um escritório de
            Agente Autônomo de Investimento credenciado à XP Investimentos,
            com foco em atendimento personalizado e alinhado às necessidades de nossos clientes.
          </p>
        </IconWrapper>
        <SocialMediaWrapper>
          <SocialIconsWrapper>
            <a
              href="https://wa.me/message/2YKH5MABSOVOM1"
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
              href="https://www.linkedin.com/company/blacksheep-investimentos/"
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
            © Black Sheep Investimentos uma empresa credenciada da
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
