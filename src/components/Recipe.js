import React from "react";
import styled from "styled-components";

const Recipe = ({
  title,
  calories,
  image,
  ingredients,
  handleActiveRecipe
}) => {
  const formatCalories = cals => {
    return Math.round(cals);
  };

  const formatTitle = title => {
    if (title.length > 20) {
      return title.substring(0, 17) + "...";
    }
    return title;
  };

  const makeActive = () => {
    handleActiveRecipe({ title, ingredients, handleActiveRecipe, image });
  };
  return (
    <RecipeStyle onClick={makeActive}>
      <Img src={image} alt="" />
      <Title>{formatTitle(title)}</Title>
      <p>{formatCalories(calories)} calories</p>
    </RecipeStyle>
  );
};

export default Recipe;

// Styled Components

const RecipeStyle = styled.div`
  display: inline-block;
  max-width: 25%;
  min-width: 20%;
  padding: 15px;
  margin: 25px;
  border-radius: 25px;
  cursor: grab;

  &:hover {
    background: rgb(240, 240, 240);
  }
`;

const Title = styled.h1`
  font-size: 14pt;
`;

const Img = styled.img`
  width: 80%;
  height: 80%;
  border-radius: 125px;
`;
