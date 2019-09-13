import React from "react";
import styled from "styled-components";

const Nav = () => {
  return (
    <NavStyle>
      <Logo>RecipeApp</Logo>
      <Ul style={{ listStyle: "none" }}>
        <Li>Home</Li>
        <Li>Favorites</Li>
        <Li>About</Li>
      </Ul>
    </NavStyle>
  );
};

export default Nav;

// styled components
const NavStyle = styled.nav`
  /* padding: 5px; */
  position: absolute;
  top: 0;
  left: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.6);
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Ul = styled.ul`
  list-style: none;
  text-align: center;
  padding: 0 40px;
`;

const Li = styled.li`
  display: inline-block;
  color: white;
  /* margin: 0px 20px; */
  padding: 25px;
  border-radius: 10px;
  cursor: grab;

  &:hover {
    text-decoration: underline;
    background: rgba(0, 0, 0, 0.1);
  }
`;

const Logo = styled.h1`
  font-size: 30px;
  color: white;
  padding: 0 40px;
`;
