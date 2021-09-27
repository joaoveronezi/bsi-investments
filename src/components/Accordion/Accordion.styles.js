import styled from "styled-components";

export const AccordionWrapper = styled.div`
  width: 100%;
  color: #FFFF !important;
  .accordion-body {
    color: black;
    font-size: 22px;
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
  }
  .accordion-button::after {
    background-image: url("resources/images/arrow.png");
  }
  #methodAccordion {
    .accordion-button {
      background-color: #161619;
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

`;
