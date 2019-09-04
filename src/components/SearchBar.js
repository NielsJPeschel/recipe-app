import React from "react";
import styled from "styled-components";

const SearchBar = ({ search, updateSearch, length }) => {
  return (
    <Center view={length === 0}>
      <Input
        className="search-bar"
        type="text"
        placeholder="ex. chicken"
        value={search}
        onChange={updateSearch}
      />
      <Button className="search-button" type="submit">
        <i className="fas fa-search" />
      </Button>
    </Center>
  );
};

export default SearchBar;

// Styled Components

const Input = styled.input`
  padding: 15px 35px;
  border-radius: 35px 0 0 35px;
  border: none;
  font-size: 12pt;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;

  &:focus,
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;
const Button = styled.button`
  font-size: 12pt;
  padding: 15px 20px;
  border-radius: 0 35px 35px 0;
  background-color: rgba(0, 0, 0, 0.4);
  color: white;
  border: none;
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

const Center = styled.div`
  position: absolute;
  top: ${props => (props.view ? "50vh" : "20vh")};
  left: 50%;
  transform: translate(-50%, -50%);
`;
