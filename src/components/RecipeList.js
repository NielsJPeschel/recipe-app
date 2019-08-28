import React, { useState } from "react";
import Recipe from "./Recipe";
import Pagination from "./Pagination";
import styled from "styled-components";

const RecipeList = ({ recipes, handleActiveRecipe }) => {
  const [index, setIndex] = useState(0);
  const displayAmount = 3;
  var currRecipes = recipes.slice(index, index + displayAmount);

  var currPage = index / displayAmount;
  var numPages = Math.ceil(recipes.length / displayAmount);

  // If there is a next page, displays the next recipes
  const incIndex = () => {
    if (currPage < numPages - 1) {
      setIndex(index + displayAmount);
    }
  };

  // If there is a previous page, displays the previous recipes
  const decIndex = () => {
    if (currPage >= 1) {
      setIndex(index - displayAmount);
    }
  };

  return (
    <ListStyle>
      {currRecipes.map(recipe => (
        <Recipe
          key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          handleActiveRecipe={handleActiveRecipe}
        />
      ))}

      <br />

      <Pagination
        incIndex={incIndex}
        decIndex={decIndex}
        currPage={currPage}
        numPages={numPages}
      />
    </ListStyle>
  );
};
export default RecipeList;

// Styled Components

const ListStyle = styled.div`
  width: 100%;
  height: 70vh;
  display: inline-block;
  white-space: nowrap;
  overflow-x: none;

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }
`;
