import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 480px;
  max-height: 579px;
  border: 1px solid #964CDB;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space;
  color: white;
  align-content: center;
  @media(max-width: 1024px) {
    gap: 60px;
    justify-content: space-between;
  }
`;
export const ImageWrapper = styled.div`
  margin-top: 30px;
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
  font-size: 36px;
  @media(max-width: 1024px) {
    margin: 0;
  }
`;

export const SocialIconsWrapper = styled.div`
  img {
      width: 100%;
      height: 100%;
      max-width: 60px;
      margin-right: 10px;
    }
    @media(max-width: 1024px) {
     img {
        max-width: 40px;
        padding-bottom: 32px;
      } 
    }
`;
