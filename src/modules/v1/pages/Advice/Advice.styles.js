/* eslint-disable no-unused-vars */
import styled from "styled-components";
import sizes from "utils/breakpoints";

export const AdviceWrapper = styled.div`
  background-color: #202020;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  flex-direction: column;
  color: white;
  font-family: 'Inter', sans-serif;
  font-style: normal;

  @media(max-width: ${sizes.md}) {
    padding-bottom: 120px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 50px;
  margin-top: 50px;
  h1 {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 77px;
    text-align: center;
    color: white;
  }
  p {
    font-family: 'Inter', sans-serif;
    font-weight: normal;
    font-size: 24px;
    line-height: 29px;
    text-align: center;
  }
  @media(max-width: ${sizes.lg}) {
    margin-top: 120px;
  }
  @media(max-width: ${sizes.sm}) {
    h1 {
      font-size: 36px;
    }
    p {
      font-size: 18px;
    }
  }
`;

export const CardContainer = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  width: 293px;
  height: 300px;
  padding: 15px;
  h2 {
    font-weight: 600;
    font-size: 36px;
    line-height: 58px;
    margin-bottom: -6px;
  }
  p {
    font-weight: normal;
    font-size: 18px;
    line-height: 29px;
    margin-bottom: -6px;
  }
  p:last-child {
    width: 100%;
    max-width: 600px;
  }
  @media(max-width: 1280px) {
    h2 {
      font-size: 36px;
    }
    p {
      font-size: 16px;
    }
  }
  @media(max-width: ${sizes.sm}) {
    padding: 0 15px;
  }
`;

export const CardsWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 90px;
  padding: 0 35px;

  div:not(:last-child) {
    border-right: 1px solid #964CDB;
  }
  @media(max-width: ${sizes.md}) {
    flex-wrap: wrap;
    div {
      border: 1px solid #964CDB;
    }
  }
`;
