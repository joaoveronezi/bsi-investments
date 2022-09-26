/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import sizes from "utils/breakpoints";

export const FooterWrapper = styled.div`
  background-color: #161619;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: 700px;
  color: white;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  @media(max-width: 1440px) {
    padding: 50px;
  }
  @media(max-width: ${sizes.sm}) {
    padding: 20px;
  }
`;

export const IconAndAdressWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  margin-bottom: 30px;
  @media(max-width: ${sizes.sm}) {
    flex-direction: column;
    justify-content: center;
  }
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
  @media(max-width: ${sizes.sm}) {
    align-items:  center;
    justify-content: center;
    margin-bottom: 30px;
    p {
      text-align: justify;
      text-justify: inter-word;
    }
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
  @media(max-width: ${sizes.sm}) {
    align-items:  center;
    justify-content: center;
    margin-top: 20px;
    p {
      text-align: justify;
      text-justify: inter-word;
    }
  }
`;

export const SocialIconsWrapper = styled.div`
  img {
    width: 100%;
    max-width: 50px;
    margin: 0 10px;
    @media(max-width: ${sizes.sm}) {
      max-width: 40px;
      margin: 0 5px;
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
  @media(max-width: ${sizes.sm}) {
    p {
      text-align: center;
    }
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
  @media(max-width: ${sizes.lg}) {
    p {
      font-size: 12px;
    }
  }
`;
