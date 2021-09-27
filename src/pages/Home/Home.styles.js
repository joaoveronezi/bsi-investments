import styled from "styled-components";

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
`;

export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 1200px;
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
`;

export const MouseScrollWrapper = styled.a`
  position: absolute;
  bottom: 35px;

img {
  width: 90px;
}
`;
