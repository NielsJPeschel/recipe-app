import React from "react";
import styled from "styled-components";

const FullRecipe = ({ recipe }) => {
  const closeRecipe = () => {
    recipe.handleActiveRecipe({});
  };

  return (
    <Wrapper>
      <Container>
        <Button onClick={closeRecipe}>
          <i class="fas fa-times" />
        </Button>
        <Header image={recipe.image}>{recipe.title}</Header>

        <Content>
          <ol style={{ textAlign: "left" }}>
            {recipe.ingredients.map(ingredient => (
              <li>{ingredient.text}</li>
            ))}
          </ol>
        </Content>
      </Container>
    </Wrapper>
  );
};

export default FullRecipe;

// Styled Components
const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.8);
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 80%;
  min-width: 60%;
`;

const Button = styled.button`
  background: none;
  color: white;
  border: none;
  font-size: 18pt;
  padding: 15px;
  border-radius: 12px;
  float: right;
  cursor: grab;
  &:hover {
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const Header = styled.div`
  text-align: center;
  float: down;
  font-size: 40px;
  color: white;
  border-radius: 15px 15px 0 0;
  width: 100%;
  padding: 75px 0;
  background-position: center;
  background-repeat: no-repeat;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${props => props.image});
`;

const Content = styled.div`
  padding: 35px;
  border-radius: 0 0 15px 15px;
  background: white;
`;
