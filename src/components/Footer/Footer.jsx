/* eslint-disable arrow-body-style */
import React, { useState } from "react";
import { DisclaimerTextWrapper, DisclaimerWrapper, FooterWrapper } from "./Footer.style";

const Footer = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const text = "A BSI Assessor de Investimentos Ltda é uma empresa de assessoria de investimento devidamente registrada na Comissão de Valores Mobiliários (CVM), na formada Resolução CVM nº 178/2023. A BSI Assessor de Investimentos Ltda atua no mercado financeiro credenciada à XP Investimentos CCTVM S/A,o que pode ser verificado através do site da CVM, site da ANCORD  ou através do site da própria XP Investimentos CCTVM S/A (www.xpi.com.br > Encontre um escritório > Selecione abaixo o estado e a cidade que deseja pesquisar > Veja a lista dos agentes autônomos). Na forma da legislação da CVM, o Assessor de Investimento não pode administrar ou gerir o patrimônio de investidores. O Assessor de investimentos é um intermediário e depende da autorização prévia do cliente para realizar operações no mercado financeiro. O investimento em ações é um investimento de risco e rentabilidade passada não é garantia de rentabilidade futura. Na realização de operações com derivativos existe a possibilidade de perdas superiores aos valores investidos, podendo resultar em significativas perdas patrimoniais. Para informações e dúvidas, favor contatar seu Assessor de Investimentos. Para reclamações, favor contatar a Ouvidoria da XP Investimentos no telefone nº0800-722-3730.";

  const privacyPolicyContent = `
    A sua privacidade é importante para nós. É política do bsiinvestimentos respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site bsiinvestimentos, e outros sites que possuímos e operamos.

    Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento. Também informamos por que estamos coletando e como será usado.

    Apenas retemos as informações coletadas pelo tempo necessário para fornecer o serviço solicitado. Quando armazenamos dados, protegemos dentro de meios comercialmente aceitáveis para evitar perdas e roubos, bem como acesso, divulgação, cópia, uso ou modificação não autorizados.

    Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.

    O nosso site pode ter links para sites externos que não são operados por nós. Esteja ciente de que não temos controle sobre o conteúdo e práticas desses sites e não podemos aceitar responsabilidade por suas respectivas políticas de privacidade.

    Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados.

    O uso continuado de nosso site será considerado como aceitação de nossas práticas em torno de privacidade e informações pessoais. Se você tiver alguma dúvida sobre como lidamos com dados do usuário e informações pessoais, entre em contacto conosco.

    O serviço Google AdSense que usamos para veicular publicidade usa um cookie DoubleClick para veicular anúncios mais relevantes em toda a Web e limitar o número de vezes que um determinado anúncio é exibido para você.

    Para mais informações sobre o Google AdSense, consulte as FAQs oficiais sobre privacidade do Google AdSense.

    Utilizamos anúncios para compensar os custos de funcionamento deste site e fornecer financiamento para futuros desenvolvimentos. Os cookies de publicidade comportamental usados por este site foram projetados para garantir que você forneça os anúncios mais relevantes sempre que possível, rastreando anonimamente seus interesses e apresentando coisas semelhantes que possam ser do seu interesse.

    Vários parceiros anunciam em nosso nome e os cookies de rastreamento de afiliados simplesmente nos permitem ver se nossos clientes acessaram o site através de um dos sites de nossos parceiros, para que possamos creditá-los adequadamente e, quando aplicável, permitir que nossos parceiros afiliados ofereçam qualquer promoção que pode fornecê-lo para fazer uma compra.

    Compromisso do Usuário
    O usuário se compromete a fazer uso adequado dos conteúdos e da informação que o bsiinvestimentos oferece no site e com caráter enunciativo, mas não limitativo:

    A) Não se envolver em atividades que sejam ilegais ou contrárias à boa fé a à ordem pública;
    B) Não difundir propaganda ou conteúdo de natureza racista, xenofóbica, jogos de sorte ou azar, qualquer tipo de pornografia ilegal, de apologia ao terrorismo ou contra os direitos humanos;
    C) Não causar danos aos sistemas físicos (hardwares) e lógicos (softwares) do bsiinvestimentos, de seus fornecedores ou terceiros, para introduzir ou disseminar vírus informáticos ou quaisquer outros sistemas de hardware ou software que sejam capazes de causar danos anteriormente mencionados.

    Mais informações
    Esperemos que esteja esclarecido e, como mencionado anteriormente, se houver algo que você não tem certeza se precisa ou não, geralmente é mais seguro deixar os cookies ativados, caso interaja com um dos recursos que você usa em nosso site.

    Esta política é efetiva a partir de 10 June 2025 17:49
  `;

  const PrivacyPolicyModal = () => (
    <div
      style={{
        display: showPrivacyPolicy ? "block" : "none",
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "white",
        padding: "20px",
        maxWidth: "800px",
        maxHeight: "80vh",
        overflowY: "auto",
        zIndex: 1000,
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        borderRadius: "8px"
      }}
    >
      <button
        type="button"
        onClick={() => setShowPrivacyPolicy(false)}
        style={{
          position: "absolute",
          right: "10px",
          top: "10px",
          background: "none",
          border: "none",
          fontSize: "20px",
          cursor: "pointer"
        }}
      >
        ✕
      </button>
      <div style={{
        color: "#444",
        marginTop: "20px",
        whiteSpace: "pre-line"
      }}
      >
        <h2>Política de Privacidade</h2>
        {privacyPolicyContent}
      </div>
    </div>
  );

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
              href="https://www.instagram.com/bsiinvestimentos/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={instaIcon} alt="Icon" />
            </a>
            <a
              href="https://www.linkedin.com/company/bsi-investimentos/"
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
          {" "}
          Todos os direitos reservados.
          {" "}
          <span
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowPrivacyPolicy(true);
            }}
            style={{
              color: "#fff",
              textDecoration: "underline",
              cursor: "pointer"
            }}
          >
            Política de Privacidade
          </span>
        </p>
        <DisclaimerTextWrapper>
          <p>{text}</p>
        </DisclaimerTextWrapper>
      </DisclaimerWrapper>
      {showPrivacyPolicy && <PrivacyPolicyModal />}
      {showPrivacyPolicy && (
        <div
          onClick={() => setShowPrivacyPolicy(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            zIndex: 999
          }}
        />
      )}
    </FooterWrapper>
  );
};

export default Footer;
