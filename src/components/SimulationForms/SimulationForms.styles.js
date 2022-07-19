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
  }
`;

export const ButtonWrapper = styled.div`
  margin: 35px auto 0 auto;
  width: 372px;
  height: 77px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: ${sizes.sm}) {
    width: 260px;
    height: 77px;
    margin-bottom: 30px;
  }
`;

export const SubmitButton = styled.button`
  width: 205px;
  height: 60px;
  background-color: #6C3EA4;
  color: white;
  border: none;
  text-align: center;
  font-size: 24px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: 0.3s;
  :hover {
    background-color: #964CDB;
  }
`;

export const SimulationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin-top: 40px;
`;

export const SimulationResults = styled.div`
  width: 100%;
  height: 100%;
  max-height: 120px;
  border: 2px solid #964CDB;
  box-sizing: border-box;
  p { 
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    color: #FFFFFF;
  }
`;

export const SimulationTextWrapper = styled.div`
  margin: 20px;
  p { 
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    line-height: 34px;
    color: #FFFFFF;
    margin: 0px;
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
    font-family: 'Inter', sans-serif;
    text-align: center;
  }
`;

export const ModalButton = styled.button`
  box-sizing: border-box;
  width: 360px;
  height: 40px;
  background-color: #161619;
  color: white;
  border: 1px solid #964CDB;
  text-align: center;
  font-size: 12px;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
  transition: 0.3s;
  margin: 15px;
  :hover {
    background-color: #964CDB;
  }
`;
