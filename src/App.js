import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecipeList from "./components/RecipeList";
import FullRecipe from "./components/FullRecipe";
import "./App.css";
import header from "./img/header.jpg";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [activeRecipe, setActiveRecipe] = useState({});

  useEffect(() => {
    getRecipes();
  }, [query]);

  // API Call
  const getRecipes = async () => {
    const APP_ID = "291db793";
    const APP_KEY = "a9d29ffc22dada5c5c9e3ae169294422";
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  // handle search
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  // Determines whether full recipe should be displayed
  const isEmpty = obj => {
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        return <FullRecipe recipe={activeRecipe} />;
      }
    }
    return null;
  };

  return (
    <div className="App">
      {console.log(recipes)}
      {isEmpty(activeRecipe)}
      <Form
        onSubmit={getSearch}
        className="search-form"
        view={recipes.length === 0}
      >
        <Center view={recipes.length === 0}>
          {recipes.length === 0 ? <Logo>RecipeApp</Logo> : null}
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
      </Form>
      {recipes.length > 0 ? (
        <RecipeList recipes={recipes} handleActiveRecipe={setActiveRecipe} />
      ) : null}
    </div>
  );
};

export default App;

// Styled Components

const Form = styled.form`
  display: block;
  height: ${props => (props.view ? "100vh" : "30vh")};
  background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4),
      rgba(255, 255, 255, 0.5)
    ),
    url(${header});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Input = styled.input`
  padding: 15px 35px;
  border-radius: 35px 0 0 35px;
  border: none;
  font-size: 12pt;
  background-color: rgba(0, 0, 0, 0.2);

  &:focus,
  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }

  &::placeholder {
    color: white;
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
  top: ${props => (props.view ? "50vh" : "15vh")};
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Logo = styled.h1`
  color: rgba(255, 255, 255, 0.8);
  font-size: 60px;
  margin: 30px;
  /* text-shadow: 0 0 5px rgba(0, 0, 0, 0.4); */
`;
