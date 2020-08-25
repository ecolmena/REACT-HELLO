import React from "react";

export default function IngredientList({ingredientList}) {

  return (
    <div>
      <ul>
        {ingredientList.map((ingredient, i) => (
          <li key={i}> {ingredient.name} </li>
        ))}
      </ul>
    </div>
  );
}
