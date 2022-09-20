/* eslint-disable import/prefer-default-export */
import styled from "styled-components";
import sizes from "utils/breakpoints";

export const ContactWrapper = styled.div`
  background-color: #202020;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  min-height: calc(100vh + 80px);
  position: relative;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  @media(max-width: ${sizes.md}) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
  @media(max-width: ${sizes.md}) {
    display: none;
  }
`;

export const IconImage = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 150px;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  top: 140px;
  @media(max-width: 1024px) {
    max-width: 400px;
  }
`;

export const ContactImage = styled.img`
  width: 100%;
  max-width: 900px;
  height: calc(100vh + 80px);
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 60px 30px 0 30px;
  margin: 0 auto;
  @media(max-width: 1024px) {
    padding: 60px 10px 0 10px;
  }
`;

export const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #FFFFFF;
  
  @media(max-width: ${sizes.xlg}) {
    font-size: 40px;
  }
  @media(max-width: ${sizes.sm}) {
    font-size: 36px;
  }
`;

export const SubTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  margin-top: 75px;
  @media(max-width: ${sizes.xlg}) {
    margin-top: 20px;
  }
`;

export const Tooltip = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  width: 100%;
  max-width: 380px;

  @media(max-width: ${sizes.sm}) {
    font-size: 16px;
    padding: 0 15px;
  }
`;

export const FormsWrapper = styled.div`
  width: 100%;
  padding: 0 15px;
`;

export const TypographWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  margin-bottom: 17px;
`;
