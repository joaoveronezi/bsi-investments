/* eslint-disable import/prefer-default-export */
import { TickerTape } from "react-ts-tradingview-widgets";
import styled from "styled-components";

export const InsightsContainer = styled.div`
  height: 100%;
  min-height: calc(100vh + 80px);
  width: 100%;
  background-color: #000000;
  font-family: 'Inter', sans-serif;
  font-style: normal;
`;

export const CardsGrid = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const ChartsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const ChartWrapper = styled.div`
  margin: 50px 25px;
  width: 506px;
  height: 374px;
`;
