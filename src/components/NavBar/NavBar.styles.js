/* eslint-disable import/named */
/* eslint-disable no-unused-vars */
import styled from "styled-components";
import sizes from "utils/breakpoints";

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
    img {
      width: 100%;
      height: 100%;
      max-width: 150px;
    }
    @media(max-width: ${sizes.xlg}) {
      img {
        margin-left: 50px;
      }
    }
    @media(max-width: ${sizes.lg}) {
      margin-right: 0;
      img {
        max-width: 100px;
        margin-left: 10px;
      }
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
      @media(max-width: ${sizes.lg}) {
        margin-right: 24px;  
      }
    }
    color: #FFF !important;
    :hover {
      color: #964CDB !important;
    }
    @media(max-width: ${sizes.xlg}) {
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
    margin-right: 150px;
      
    img {
      width: 100%;
      height: 100%;
      max-width: 150px;
    }
    @media(max-width: ${sizes.xlg}) {
      img {
        margin-left: 50px;
      }
    }
    @media(max-width: ${sizes.lg}) {
      margin-right: 0;
      img {
        max-width: 100px;
        margin-left: 10px;
      }
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
      @media(max-width: ${sizes.lg}) {
        margin-right: 24px;
      }
    }
    color: #FFF !important;
    :hover {
      color: #964CDB !important;
    }
    @media(max-width: ${sizes.xlg}) {
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
  @media(max-width: ${sizes.xlg}) {
    width: 191px;
    height: 50px;
  }
  @media(max-width: ${sizes.lg}) {
    width: 160px;
    height: 40px;
    font-size: 14px;
  }
`;
