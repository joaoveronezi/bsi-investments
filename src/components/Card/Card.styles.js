import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 480px;
  height: 579px;
  border: 1px solid #964CDB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;

  img {
    width: 100%;
    height: 100%;
    max-width: 230px;
    max-height: 230px;
    object-fit: contain;
  }
`;

export const TextWrapper = styled.div`
  text-align: center;
  margin: 70px 0 50px 0;
`;

export const SocialIconsWrapper = styled.div`
  img {
      width: 100%;
      max-width: 60px;
      margin-right: 10px;
    }
`;
