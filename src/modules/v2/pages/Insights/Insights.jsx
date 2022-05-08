import InsightsCard from "components/InsightsCard";
import React from "react";
import { MiniChart, SymbolOverview, TickerTape } from "react-ts-tradingview-widgets";
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

// RESOLVER TRETA DA NAVBAR
// COLOCAR UMA NAVBAR DIFERENTE EM CADA VERSÃO DA APLICAÇÃO

const cardsData = [
  {
    icon: financasPessoais,
    text: "Finanças Pessoais",
    onClick: "onClick"
  },
  {
    icon: rendaFixa,
    text: "Renda Fixa",
    onClick: "onClick"
  },
  {
    icon: fundosImobiliarios,
    text: "Fundos Imobiliários",
    onClick: "onClick"
  },
  {
    icon: acoesIC,
    text: "Ações",
    onClick: "onClick"
  },
  {
    icon: internacional,
    text: "Internacional",
    onClick: "onClick"
  },
  {
    icon: fundosRecomendados,
    text: "Fundos Recomendados",
    onClick: "onClick"
  },
  {
    icon: familia,
    text: "Família DNA",
    onClick: "onClick"
  },
  {
    icon: familiaTrend,
    text: "Família Trend",
    onClick: "onClick"
  },
  {
    icon: topFii,
    text: "Top 25 FII’s",
    onClick: "onClick"
  },
  {
    icon: previdencia,
    text: "Top 30 Previdência",
    onClick: "onClick"
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
  return (
    <InsightsContainer>
      <TickerTape colorTheme="dark" copyrightStyles={styles} />
      <CardsGrid>
        <CardsContainer>
          {
            cardsData.map(({ text, icon }) => (
              <InsightsCard text={text} imgSrc={icon} />
            ))
          }
        </CardsContainer>
      </CardsGrid>
      <ChartsContainer>
        <ChartWrapper>
          <SymbolOverview
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
