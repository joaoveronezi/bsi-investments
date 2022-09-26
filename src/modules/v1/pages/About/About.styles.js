/* eslint-disable no-unused-vars */
import styled from "styled-components";
import sizes from "utils/breakpoints";

export const AboutContainer = styled.div`
  background-color: #161619;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: calc(100vh + 80px);
  @media(max-width: ${sizes.lg}) {
    flex-direction: column;
  }
`;

export const Main = styled.div`
  width: 60%;
  height: 100%;
  min-height: calc(100vh + 80px);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  @media(max-width: ${sizes.lg}) {
    width: 100%;
  }
`;

export const Aside = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
  max-width: 800px;
  height: 100%;
  min-height: calc(100vh + 80px);
  img {
    width: 100%;
    max-width: 800px;
    height: 100%;
    min-height: calc(100vh + 80px);
    object-fit: cover;
  }
  @media(max-width: ${sizes.lg}) {
    display: none;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 570px;
  color: white;
  margin: 100px auto;
  @media(max-width: ${sizes.xxlg}) {
    margin: 100px auto;
    padding: 0 30px;
  }
  @media(max-width: ${sizes.lg}) {
    max-width: 100%;
    margin-bottom: 300px;
  }
  @media(max-width: ${sizes.xs}) {
    margin-bottom: 600px;
  }
`;

export const AboutTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 77px;
  text-align: left;
  margin-bottom: 20px;
  @media(max-width: ${sizes.xxlg}) {
    font-size: 45px;
    margin-bottom: 0;
  }
  @media(max-width: ${sizes.xlg}) {
    font-size: 36px;
  }
`;
export const AboutText = styled.div`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 29px;
  p:last-child {
    margin-top: 12px;
  }
  h5 {
    font-style: bold;
    font-weight: bold;
    margin-top: 10px;
  }

  @media(max-width: ${sizes.xxlg}) {
    font-size: 16px;
    h5 {
      font-size: 16px;
    }
  }
  @media(max-width: ${sizes.xxlg}) {
    font-size: 16px;
    h5 {
      font-size: 16px;
    }
  }
`;

export const AccordionContainer = styled.div`
  width: 100%;
  max-width: 60%;
  position: absolute;
  bottom: 0;
  @media(max-width: ${sizes.lg}) {
    max-width: 100%;
  }
`;
