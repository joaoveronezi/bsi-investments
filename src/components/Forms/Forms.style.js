/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const FormsStyled = styled.form`
  width: 100%;
  max-width: 521px;
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
  margin: 75px auto 0 auto;
  width: 372px;
  height: 77px;
`;

export const SubmitButton = styled.button`
  width: 372px;
  height: 77px;
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
