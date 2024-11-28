import React from "react";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: black;
  color: white;
  text-align: center;
  padding: 1rem;
  font-size: 1.5rem;
`;

function Header() {
  return <HeaderWrapper>Legal Eagle</HeaderWrapper>;
}

export default Header;
