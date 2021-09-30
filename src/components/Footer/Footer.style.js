/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const FooterWrapper = styled.div`
  background-color: #161619;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100vh;
  max-height: 700px;
  color: white;
  font-family: 'Inter', sans-serif;
  font-style: normal;
`;

export const IconAndAdressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 30px;
`;

export const IconWrapper = styled.div`
  width: 100%;
  max-width: 704px;
  display: flex;
  align-items:  flex-start;
  justify-content: flex-start;
  flex-direction: column;
  img {
    width: 100%;
    height: 100%;
    max-width: 300px;
  }
  p {
    margin-top: 25px;
    max-width: 500px;
  }
`;

export const SocialMediaWrapper = styled.div`
  width: 100%;
  max-width: 450px;
  display: flex;
  align-items:  flex-end;
  justify-content: flex-end;
  flex-direction: column;
  p {
    text-align: end;
    margin-top: 25px;
  }
`;

export const SocialIconsWrapper = styled.div`
  img {
    width: 100%;
    max-width: 60px;
    :not(:last-child) {
      margin-right: 30px;
    }
  }

`;

export const DisclaimerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    margin-bottom: 45px;
    font-size: 18px;
  }
`;

export const DisclaimerTextWrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  p {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 29px;
    text-align: justify;
    text-justify: inter-word;
  }
`;
