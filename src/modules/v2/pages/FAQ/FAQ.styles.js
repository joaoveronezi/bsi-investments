import styled from "styled-components";
import sizes from "utils/breakpoints";

export const FAQWrapper = styled.div`
  background-color: #202020;
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
  color: white;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: lighter;

  .accordion {
    max-width: 770px;
    background: #202020;
    border: none;
    @media (max-width: ${sizes.xs}) {
      max-width: 400px;
    }
    @media (max-width: ${sizes.sm}) {
      max-width: 592px;
    }
    @media (max-width: ${sizes.lg}) {
      max-width: 726px;
    }
  }
  .accordion__item {
    border-bottom: 1px solid #964cdb;
  }

  .accordion__button {
    background-color: #202020;
    color: #fff;
    font-size: 32px;
    cursor: pointer;
    padding: 18px;
    width: 100%;
    text-align: left;
    border: none;

    @media (max-width: ${sizes.lg}) {
      font-size: 30px;
    }
    @media (max-width: ${sizes.sm}) {
      font-size: 24px;
    }
  }

  .accordion__button[aria-expanded="true"]::before,
  .accordion__button[aria-selected="true"]::before {
    transform: rotate(45deg);
  }
  .accordion__button:before {
    display: inline-block;
    content: "";
    height: 10px;
    width: 10px;
    margin-right: 12px;
    border-bottom: 2px solid currentColor;
    border-right: 2px solid currentColor;
    transform: rotate(-45deg);
  }
`;

export const AccordionWrapper = styled.div``;
