/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const ContatoWrapper = styled.div`
  background-color: #202020;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100vh;
  position: relative;
  font-family: 'Inter', sans-serif;
  font-style: normal;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 50%;
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
  height: 100vh;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const Title = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  color: #FFFFFF;
`;

export const SubTitle = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  margin-top: 75px;
`;

export const Tooltip = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  width: 380px;
`;
