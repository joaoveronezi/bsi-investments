import styled from "styled-components";
import sizes from "utils/breakpoints";

export const AccordionWrapper = styled.div`
  width: 100%;
  color: #FFFF !important;
  .accordion-body {
    color: white;
    font-size: 22px;
    background-color: black;
    @media(max-width: ${sizes.sm}) {
        font-size: 18px;
    }
  }
  .accordion-button {
    background-color: #6C3EA4;
  }
  .accordion-item {
    border: none !important;
  }
  .accordion-header {
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 50px !important;
    line-height: 44px;
    color: #FFFF !important;
    h2 {
      margin-left: 130px;
    }
  
    @media(max-width: ${sizes.xxlg}) {
      h2 {
        margin-left: 33px;
      }
    }
    @media(max-width: ${sizes.xlg}) {
      h2 {
        margin-left: 17px;
      }
    }
  }
  .accordion-button::after {
    background-image: url("resources/images/arrow.png");
  }
  #methodAccordion {
    .accordion-button {
      background-color: #161619;
    }
    .accordion-body {
      color: white;
      font-size: 22px;
      background-color: #6C3EA4;
      @media(max-width: ${sizes.sm}) {
        font-size: 18px;
      }
    }
  }
`;

export const AccordionHeader = styled.h2`
    font-family: 'Inter', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 44px;
    color: #FFFF;

    @media(max-width: ${sizes.xlg}) {
      font-size: 26px;
    }
`;
