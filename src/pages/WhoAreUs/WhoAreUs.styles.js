import styled from "styled-components";
import sizes from "utils/breakpoints";

export const WhoAreUsWrapper = styled.div`
  background-color: #161619;
  display: flex;
  align-items: space-between;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 100vh;
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

export const CardsContainer = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 70px;
  margin-bottom: 50px;
  padding: 0 35px;
 
  @media(max-width: ${sizes.xxlg}) {
    padding: 0 50px;
  }
  @media(max-width: ${sizes.lg}) {
    flex-direction: column;
  }
`;
