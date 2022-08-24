/* eslint-disable react/prop-types */
import React from "react";
import {
  CardWrapper, TextWrapper, LetterWrapper,
} from "./Card.styles";

const Card = ({
  text, letter
}) => (
  <CardWrapper>
    <LetterWrapper>
      <span>
        {letter}
      </span>
    </LetterWrapper>
    <TextWrapper dangerouslySetInnerHTML={{ __html: text }} />
  </CardWrapper>
);

export default Card;
