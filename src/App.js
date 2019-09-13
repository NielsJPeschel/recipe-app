import React, { useEffect, useState } from "react";
import styled from "styled-components";
import RecipeList from "./components/RecipeList";
import FullRecipe from "./components/FullRecipe";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import "./App.css";
import header from "./img/header2.jpg";

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
      <Nav />
      {isEmpty(activeRecipe)}
      <Form
        onSubmit={getSearch}
        className="search-form"
        view={recipes.length === 0}
      >
        <SearchBar
          search={search}
          updateSearch={updateSearch}
          length={recipes.length}
        />
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
      120deg,
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    url(${header});
  /* background: white; */
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
