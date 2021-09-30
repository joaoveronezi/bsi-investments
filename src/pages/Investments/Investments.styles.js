/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const InvestmentsWrapper = styled.div`
  background-color: #161619;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: calc(100vh + 80px);
  flex-direction: column;
  color: white;
  font-family: 'Inter', sans-serif;
  font-style: normal;
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;
