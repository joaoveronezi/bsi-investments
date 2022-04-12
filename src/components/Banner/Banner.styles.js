import styled from "styled-components";
import sizes from "utils/breakpoints";

export const BannerWrapper = styled.div`
  background-color: #6C3EA4;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
  gap: 20px;
`;

export const BannerTitle = styled.h2`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 77px;
  text-align: center;
  margin-top: 100px;
  @media(max-width: ${sizes.sm}) {
    font-size: 36px;
  }
`;

export const BannerDisclaimer = styled.div`
  font-family: 'Inter', sans-serif;
  font-weight: normal;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  width: 50%;
  @media(max-width: ${sizes.sm}) {
    width: 100%;
    padding: 0 15px;
    font-size: 18px;
  }
`;

export const BannerButton = styled.button`
  width: 380px;
  height: 76px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 30px;
  cursor: pointer;
  margin-bottom: 100px;
  font-family: 'Inter', sans-serif;
  transition: 0.3s;
  :hover {
    background-color: white;
    color: #6C3EA4;
  }
  @media(max-width: ${sizes.sm}) {
    width: 230px;
    height: 60px;
    font-size: 15px;

  }
`;
