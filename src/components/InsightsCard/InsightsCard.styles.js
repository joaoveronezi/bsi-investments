import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 265px;
  width: 283px;
  background-color: #000000;
  border: 3px solid #964CDB;
  margin: 25px;
`;

export const IconContainer = styled.div`
  border-radius: 50%;
  background: #964CDB;
  width: 110px;
  height: 110px;
  margin-bottom: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  p {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    text-align: center;
    color: #FFFFFF;
    :hover {
      color: #964CDB;
    }
  }
`;

export const Link = styled.a`
  text-decoration: none;

`;
