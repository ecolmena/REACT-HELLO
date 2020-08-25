import React from "react";
import IngredientList from "./IngredientList";
import Procedure from "./Procedure";
import StarRating from "./StarRating";

export default function Recipe({ recipe }) {
  return (
    <div>
      <h1>{recipe.name}</h1>
      <IngredientList ingredientList={recipe.ingredients} />
      <Procedure procedure={recipe.steps} />
      <StarRating totalStars={5} />
    </div>
  );
}
