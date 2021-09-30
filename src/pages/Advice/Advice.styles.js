import styled from "styled-components";

export const AdviceWrapper = styled.div`
  background-color: #202020;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  color: white;
  font-family: 'Inter', sans-serif;
  font-style: normal;
`;
export const CardText = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  width: 600px;
  h2 {
    font-weight: 600;
    font-size: 48px;
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
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  gap: 60px;
  width: 100%;
  margin-bottom: 50px;
`;
