import styled from "styled-components";

export const WhoAreUsWrapper = styled.div`
  background-color: #161619;
  display: flex;
  align-items: space-between;
  justify-content: center;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  position: relative;
  @media(max-width: 1024px) {
    img {
      width: 150px;
    }
    p {
      font-size: 16px;
    }
    h2 {
      font-size: 20px;
    }
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 100px;
  margin-top: 100px;
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
`;

export const CardsContainer = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
`;
