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
  padding-bottom: 120px;
  @media(max-width: ${sizes.md}) {
    p {
      font-size: 16px;
    }
    h2 {
      font-size: 20px;
    }
  }

`;

export const TitleWrapper = styled.div`
  margin: 50px 0px;
  padding: 0px 0px 64px 100px;
  display: flex;
  h2 {
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
    h2 {
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
  gap: 55px;
  margin-bottom: 50px;
  padding: 0 35px;
 
  @media(max-width: ${sizes.xlg}) {
    gap: 20px;
  }
  @media(max-width: ${sizes.xxlg}) {
    padding: 0 50px;
  }
  @media(max-width: ${sizes.lg}) {
    flex-direction: column;
  }
  @media(max-width: ${sizes.xs}) {
    gap: 50px;
  }
`;
