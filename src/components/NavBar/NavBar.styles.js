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
`;

export const NormalNav = styled.nav`
  z-index: 3 !important;
  overflow: hidden;
  background-color: #000000 !important;
  position: fixed;
  top: 0;
  width: 100%;
`;
