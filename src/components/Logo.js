import React from "react";
import { GiCurlyWing } from "react-icons/gi";
import styled from "styled-components";

const LogoStyles = styled.div`
  max-width: 100%;
  width: 40px;

  svg {
    width: 100%;
    object-fit: contain;
    color: gold;
  }
`;

function Logo() {
  return (
    <LogoStyles>
      <GiCurlyWing />
    </LogoStyles>
  );
}

export default Logo;
