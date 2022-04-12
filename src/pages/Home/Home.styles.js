import styled from "styled-components";
import sizes from "utils/breakpoints";

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #000000;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-style: normal;
  @media(max-width: ${sizes.sm}) {
    width: 100vw; 
  }
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
  @media(max-width: ${sizes.lg}) {
    max-width: 1000px;
  }
  @media(max-width: ${sizes.sm}) {
    padding: 0 15px;
  }
`;

export const HomeTitle = styled.h2`
  color: white;
  font-size: 60px;
  line-height: 78px;
  font-weight: 700;
  text-align: center;
  font-family: 'Inter', sans-serif;
  span {
    color: #6C3EA4;
  }
  @media(max-width: ${sizes.lg}) {
    font-size: 45px;
  }
  @media(max-width: ${sizes.sm}) {
    font-size: 36px;
  }
`;

export const AccountButton = styled.button`
  width: 360px;
  height: 86px;
  background-color: #6C3EA4;
  color: white;
  border: none;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 32px;
  cursor: pointer;
  margin-top: 93px;
  font-family: 'Inter', sans-serif;
  transition: 0.3s;
  :hover {
    background-color: #964CDB;
  }
  a {
    text-decoration: none;
    color: white;
  }
  @media(max-width: 1024px) {
    max-width: 300px;
    height: 70px;
  }
  @media(max-width: ${sizes.sm}) {
    margin-top: 53px;
  }
`;

export const MouseScrollWrapper = styled.a`
  position: absolute;
  bottom: 35px;
  img {
    width: 90px;
  }
  @media(max-width: ${sizes.sm}) {
    bottom: 0;
  }
`;
