import styled from "styled-components";

export const HiddenNavbar = styled.nav`
  z-index: 3 !important;
  background-color: transparent !important;
  overflow: hidden;
  background-attachment: fixed;
  background-position: auto,center top;
  position: fixed;
  top: 0;
  width: 100%;

  .navbar-brand {
    margin-right: 100px;
    img {
      width: 100%;
      height: 100%;
      max-width: 150px;
    }
  }
  .container {
    margin: 0 auto;
    max-width: 1400px;
  }
  a {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;
    :not(:last-child) {
      margin-right: 50px;
      @media(max-width: 1024px) {
        margin-right: 14px;  
      }
    }
    color: #FFF !important;
    :hover {
      color: #964CDB !important;
    }
    @media(max-width: 1024px) {
      font-size: 16px; 
    }
  }
`;

export const NormalNav = styled.nav`
  z-index: 3 !important;
  overflow: hidden;
  background-color: #000000 !important;
  position: fixed;
  top: 0;
  width: 100%;

  .navbar-brand {
      margin-right: 100px;
      
    img {
      width: 100%;
      height: 100%;
      max-width: 150px;
    }
    @media(max-width: 1024px) {
      margin-right: 0;
    }
  }
  .container {
    margin: 0 auto;
    max-width: 1400px;
  }
  a {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 29px;
    :not(:last-child) {
      margin-right: 50px;
      @media(max-width: 1024px) {
        margin-right: 14px;  
      }
    }
    color: #FFF !important;
    :hover {
      color: #964CDB !important;
    }
    @media(max-width: 1024px) {
      font-size: 16px; 
    }
  }
`;

export const OpenYourAccountButton = styled.button`
  width: 248px;
  height: 55px;
  background-color: transparent;
  color: white;
  border: 1px solid #964CDB;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  cursor: pointer;
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
      width: 191px;
      height: 50px;
    }
`;
