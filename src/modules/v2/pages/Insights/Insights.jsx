import InsightsCard from "components/InsightsCard";
import React from "react";
import { SymbolOverview, TickerTape } from "react-ts-tradingview-widgets";
import {
  CardsGrid, CardsContainer, InsightsContainer, ChartsContainer, ChartWrapper
} from "./Insights.styles";
import {
  acoesIC,
  document,
  familiaTrend,
  familia,
  financasPessoais,
  fundosImobiliarios,
  fundosRecomendados,
  internacional,
  previdencia,
  rendaFixa,
  topFii
} from "../../../../assets/icons/v2";

const cardsData = [
  {
    icon: financasPessoais,
    text: "Finanças Pessoais",
    link: "https://conteudos.xpi.com.br/aprenda-a-investir/financas-pessoais/"
  },
  {
    icon: rendaFixa,
    text: "Renda Fixa",
    link: "https://conteudos.xpi.com.br/renda-fixa/carteiras/"
  },
  {
    icon: fundosImobiliarios,
    text: "Fundos Imobiliários",
    link: "https://conteudos.xpi.com.br/fundos-imobiliarios/carteiras/"
  },
  {
    icon: acoesIC,
    text: "Ações",
    link: "https://conteudos.xpi.com.br/guia-de-investimentos/carteiras/"
  },
  {
    icon: internacional,
    text: "Internacional",
    link: "https://conteudos.xpi.com.br/internacional/carteiras/"
  },
  {
    icon: fundosRecomendados,
    text: "Fundos Recomendados",
    link: "https://conteudos.xpi.com.br/fundos-de-investimento/recomendacoes/"
  },
  {
    icon: familia,
    text: "Família DNA",
    link: "https://conteudos.xpi.com.br/guia-de-investimentos/relatorios/fundos-dna/"
  },
  {
    icon: familiaTrend,
    text: "Família Trend",
    link: "https://conteudos.xpi.com.br/fundos-de-investimento/relatorios/fundos-trend-e-books/"
  },
  {
    icon: topFii,
    text: "Top 25 FII’s",
    link: "https://conteudos.xpi.com.br/fundos-imobiliarios/top-25-fundos-imobiliarios/"
  },
  {
    icon: previdencia,
    text: "Top 30 Previdência",
    link: "https://conteudos.xpi.com.br/previdencia-privada/recomendacoes/top-previdencia/"
  },
];

const Insights = () => {
  const styles = {
    parent: {
      fontSize: "0px",
      color: "white",
      backgroundColor: "#000000",
    },

  };

  const titulos = [
    ["Eurodollar", "CME:GE1!"],
    ["T-Bond", "CBOT:ZB1!"],
    ["Ultra T-Bond", "CBOT:UB1!"],
    ["Euro Bund", "EUREX:FGBL1!"],
    ["Euro BTP", "EUREX:FBTP1!"],
    ["Euro BOBL", "EUREX:FGBM1!"]
  ];

  const forex = [
    ["EUR/USD", "FX:EURUSD"],
    ["GBP/USD", "FX:GBPUSD"],
    ["USD/JPY", "FX:USDJPY"],
    ["AUD/USD", "FX:AUDUSD"],
    ["USD/CAD", "FX:USDCAD"],
    ["BRL", "FX_IDC:BRLUSD"]
  ];

  const cripto = [
    ["BITCOIN", "BINANCE:BTCUSDT"],
    ["ETHERUM", "BINANCE:ETHUSDTPERP_OI"],
    ["BINANCE COIN", "BINANCE:BNBUSDT"],
    ["CARDANO", "BINANCE:ADAUSDT"],
    ["CHILIZ", "BINANCE:CHZUSDT"],
    ["SOLANA", "BINANCE:SOLUSDT"]
  ];

  return (
    <InsightsContainer>
      <TickerTape colorTheme="dark" copyrightStyles={styles} />
      <CardsGrid>
        <h2>Nossas Ferramentas e Conteúdos</h2>
        <CardsContainer>
          {
            cardsData.map(({ text, icon, link }) => (
              <InsightsCard text={text} imgSrc={icon} link={link} key={text} />
            ))
          }
        </CardsContainer>
      </CardsGrid>
      <ChartsContainer>
        <ChartWrapper>
          <SymbolOverview
            symbols={titulos}
            colorTheme="dark"
            autosize
            chartType="candlesticks"
            downColor="#800080"
            borderDownColor="#800080"
            wickDownColor="#800080"
            height="370px"
            width="500px"
          />
        </ChartWrapper>
        <ChartWrapper>
          <SymbolOverview
            symbols={forex}
            colorTheme="dark"
            autosize
            chartType="candlesticks"
            downColor="#800080"
            borderDownColor="#800080"
            wickDownColor="#800080"
            height="370px"
            width="500px"
          />
        </ChartWrapper>
        <ChartWrapper>
          <SymbolOverview
            symbols={cripto}
            colorTheme="dark"
            autosize
            chartType="candlesticks"
            downColor="#800080"
            borderDownColor="#800080"
            wickDownColor="#800080"
            height="370px"
            width="500px"
          />
        </ChartWrapper>

      </ChartsContainer>
    </InsightsContainer>
  );
};

export default Insights;
