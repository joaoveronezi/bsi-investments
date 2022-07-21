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
  return (
    <InsightsContainer>
      <TickerTape colorTheme="dark" copyrightStyles={styles} />
      <CardsGrid>
        <CardsContainer>
          {
            cardsData.map(({ text, icon, link }) => (
              <InsightsCard text={text} imgSrc={icon} link={link} />
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
