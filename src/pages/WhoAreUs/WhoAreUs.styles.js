import styled from "styled-components";

export const WhoAreUsWrapper = styled.div`
  background-color: #161619;
  display: flex;
  align-items: space-between;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  h1 {
    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 64px;
    line-height: 77px;
    text-align: center;
    color: white;
  }
  margin-bottom: 100px;
`;

export const CardsContainer = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
`;
