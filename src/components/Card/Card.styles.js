import styled from "styled-components";
import sizes from "utils/breakpoints";

export const CardWrapper = styled.div`
  position: relative;
  width: 275px;
  height: 500px;
  border: 1px solid #964CDB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space;
  color: #fff;
  align-content: center;
  @media(max-width: ${sizes.lg}) {
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 160px;
  }
  @media(max-width: ${sizes.md}) {
    justify-content: space-between;
  }
  @media(max-width: ${sizes.sm}) {
    height: 200px;
  }
  @media(max-width: ${sizes.xs}) {
    height: 300px;
  }
`;

export const TextWrapper = styled.div`
  padding: 60px 14px 0px 14px;
  span {
    color: #964CDB;
  }
  p {
    text-decoration: none;
    font-weight: lighter;
    font-size: 24px;
  }
  @media(max-width: ${sizes.lg}) {
    margin: 0;
  }
  @media(max-width: ${sizes.md}) {
    p {
      font-size: 20px;
    }
  }
`;

export const LetterWrapper = styled.div`
  position: absolute;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90px;
  height: 90px;
  background: #964CDB;
  top: -50px;
  span {
    font-size: 64px;
  }
`;
