/* eslint-disable no-unused-vars */
import CardModal from "components/CardModal";
import { TitleWrapper } from "pages/WhoAreUs/WhoAreUs.styles";
import React from "react";
import { InvestmentsWrapper, CardsWrapper } from "./Investments.styles";

const ACOES_IMG = "url(resources/images/acoes.png)";
const CERTIFICADO_IMG = "url(resources/images/certificado.png)";
const FUNDOS_IMG = "url(resources/images/fundos.png)";
const FUTUROS_IMG = "url(resources/images/futuros.png)";
const IMOBILIARIO_IMG = "url(resources/images/imobiliario.png)";
const PUBLICAS_IMG = "url(resources/images/publicas.png)";
const RENDA_IMG = "url(resources/images/renda.png)";

const ACOES_INFO = "As ações representam uma fração do capital social de uma empresa. Ao comprar uma ação, além de investidor, você se torna acionista e sócio em uma pequena fração de uma empresa.";
const FUTUROS_INFO = "Contratos futuros são operações sofisticadas feitas pela modalidade de derivativos. Nessa operações, um investidor se compromete a comprar ou a vender determinado ativo em uma data futura pré-estabelecida. São contratos com prazo determinado de vencimento e que necessitam de alocação de margem para  garantias.";
const FUNDOS_INFO = "Fundos são uma espécie de “condomínio” de investidores. Eles reúnem os recursos de diversas pessoas, para que sejam aplicados em conjunto no mercado financeiro e de capitais. Os ganhos obtidos com as aplicações são divididos entre os participantes, na proporção do valor depositado por cada um. Esses fundos podem se estruturados por ativos de Títulos de Renda Fixa, Títulos Públicos, Títulos Cambiais, Derivativos, Commodities, Ações, entre outros. Quanto mais diversificado é o fundo, menor é o risco.";
const RENDA_INFO = "Renda fixa é todo tipo de investimento que tem regras de rendimento definidas antes. Na hora de aplicar, o investidor já fica sabendo o prazo e a taxa de rendimento ou o índice que será usado para valorizar o dinheiro investido. Nessa modalidade, temos os títulos públicos, os CDBs, as LCIs, as LCAs e as LCs, que são 100% garantidos pelo Fundo Garantidor de Crédito. Esses investimentos possuem proteção total até o valor de R$ 250.000 por CPF (apenas pessoa física) e por instituição financeira. Outras ótimas opções de renda fixa são as debêntures, os DPGEs , os FIDCs, as CRIs e as CRAs.";
const IMOBILIARIO_INFO = "Os fundos imobiliários FIIs são fundos de investimento destinados à aplicação em empreendimentos imobiliários, o que inclui, além da aquisição de direitos reais sobre bens imóveis, o investimento em títulos relacionados ao mercado imobiliário, como Letras de Crédito Imobiliário (LCI), Letras Hipotecárias (LH), cotas de outros FIIs, Certificados de Potencial Adicional de Construção, (CEPAC), Certificados de Recebíveis Imobiliários (CRI) e outros previstos na regulamentação. De uma forma simplificada, é a maneira mais simples de investir em imovéis ou em papéis com lastro imobiliário, de forma indireta e sem processos burocráticos.";
const PUBLICAS_INFO = "Oferta pública inicial é o evento que marca a primeira venda de ações de uma empresa e, posteriormente, o início de negociação dessas ações em bolsa de valores. Essa operação pode ocorrer por meio de uma distribuição primária, de uma distribuição secundária ou de uma combinação entre as duas. Aqui na BSI, você pode acompanhar e participar de ofetas públicas de grandes empresas.";
const CERTIFICADO_INFO = "Diversificação e acesso a novos mercados, tudo em um único investimento! O certificado de operações estruturadas é um tipo de investimento que faz a combinação de ativos de renda fixa e de renda variável, com retornos referenciados a algum ativo e índice, como por exemplo, câmbio, inflação, ações e ativos internacionais.";

const Investments = () => (
  <InvestmentsWrapper id="investments">
    <TitleWrapper style={{ marginBottom: "50px", marginTop: window.innerWidth < 1025 ? "100px" : "0" }}>
      <h1>INVESTIMENTOS</h1>
    </TitleWrapper>
    <CardsWrapper>
      <CardModal info={ACOES_INFO} imageSRC={ACOES_IMG} title="Ações" />
      <CardModal info={FUTUROS_INFO} imageSRC={FUTUROS_IMG} title="Futuros" />
      <CardModal info={FUNDOS_INFO} imageSRC={FUNDOS_IMG} title="Fundos de Investimento" />
      <CardModal info={RENDA_INFO} imageSRC={RENDA_IMG} title="Renda Fixa" />
    </CardsWrapper>
    <CardsWrapper>
      <CardModal info={IMOBILIARIO_INFO} imageSRC={IMOBILIARIO_IMG} title="Fundos Imobiliários" />
      <CardModal info={PUBLICAS_INFO} imageSRC={PUBLICAS_IMG} title="Ofertas Públicas" />
      <CardModal info={CERTIFICADO_INFO} imageSRC={CERTIFICADO_IMG} title="Certificado de Operações Estruturadas" />
    </CardsWrapper>
  </InvestmentsWrapper>
);

export default Investments;
