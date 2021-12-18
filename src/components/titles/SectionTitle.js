import React from "react";
import styled from "styled-components";
import themeList from "../../data/themeList";

const SectionStyles = styled.h3`
  font-size: 4rem;
  font-family: "Allura", cursive;
  font-weight: 800;
  color: ${({ theme: { theme } }) =>
    theme === themeList.light ? "var(--darkBlue_2)" : "var(--lightBlue_1)"};
  @media only screen and (max-width: 768px) {
    font-size: 3rem;
    padding: 2rem 0;
  }
`;

function SectionTitle({ children, ...rest }) {
  return <SectionStyles {...rest}>{children}</SectionStyles>;
}

export default SectionTitle;
