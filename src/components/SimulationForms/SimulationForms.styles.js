/* eslint-disable import/prefer-default-export */
import { Modal } from "react-bootstrap";
import styled from "styled-components";
import sizes from "utils/breakpoints";

export const FormsStyled = styled.form`
  width: 100%;
  color: white;
  .form-control {
    background-color: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-radius: 0;
    outline: none;
    color: white;
    @media (max-width: ${sizes.sm}) {
      height: 70px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  margin: 35px auto 0 auto;
  width: 372px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${sizes.sm}) {
    width: 260px;
    height: 77px;
    margin-bottom: 30px;
  }
`;

export const SubmitButton = styled.a`
  width: 205px;
  height: 60px;
  background-color: #6c3ea4;
  color: white;
  border: none;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  transition: 0.3s;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  :hover {
    background-color: #964cdb;
    color: white;
  }
`;

export const GetContent = styled.button`
  width: 300px;
  height: 60px;
  background-color: #000;
  color: white;
  border: none;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  transition: 0.3s;
  text-decoration: underline;

  :hover {
    background-color: #964cdb;
  }
`;

export const SimulationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
  span {
    align-self: flex-start;
    font-size: 14px;
    color: #fff;
    text-align: left;
  }
`;

export const SimulationResults = styled.div`
  width: 100%;
  height: 100%;
  max-height: 120px;
  border: 2px solid #964cdb;
  box-sizing: border-box;
  p {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    color: #ffffff;
  }
  @media (max-width: ${sizes.sm}) {
    max-height: 100px;
  }
`;

export const SimulationTextWrapper = styled.div`
  margin: 20px;

  p {
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 34px;
    color: #ffffff;
    margin: 0px;
  }
  @media (max-width: ${sizes.sm}) {
    p {
      font-size: 18px;
    }
  }
`;

export const InsideModal = styled(Modal)`
  .modal-content {
    /* Modal Content */
    background-color: #161619;
    align-items: center;
    justify-content: center;
    height: 530px;
  }
  .modal-header {
    /* Modal Header */
    border: none;
    img {
      width: 174px;
    }
  }
  .modal-body {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column;
    color: white;
    font-family: "Inter", sans-serif;
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;

export const ModalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 360px;
  height: 40px;
  background-color: #161619;
  border: 1px solid #964cdb;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  transition: 0.3s;
  margin: 15px;
  :hover {
    background-color: #964cdb;
  }
  p {
    text-decoration: none;
    color: #fff;
  }
`;
