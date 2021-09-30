import styled from "styled-components";

export const AboutContainer = styled.div`
  background-color: #161619;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: 100vh;
`;

export const Main = styled.div`
  width: 60%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  font-family: 'Inter', sans-serif;
  font-style: normal;
`;

export const Aside = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 40%;
  max-width: 800px;
  img {
    width: 100%;
    max-width: 800px;
    height: 100vh;
    object-fit: cover;
  }
`;

export const TextWrapper = styled.div`
  width: 100%;
  max-width: 800px;
  height: 570px;
  color: white;
  margin: 130px auto;

  @media(max-width: 1024px) {
    margin: 30px auto;
    padding: 0 30px;
    h3 {
      font-size: 40px;
    }
    p {
      font-size: 16px;
    }
  }
`;

export const AboutTitle = styled.h3`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 77px;
  text-align: left;
  margin-bottom: 53px;
`;
export const AboutText = styled.p`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 20px;
  line-height: 29px;
`;

export const AccordionContainer = styled.div`
  width: 100%;
  max-width: 60%;
  position: absolute;
  bottom: 0;
`;
