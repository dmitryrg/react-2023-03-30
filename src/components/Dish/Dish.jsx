import React from "react";

export const Dish = ({ dish }) => {
  if (!dish ) return null;

  const {name,price,ingredients} = dish
  return (
    <div>
      <h4>{name}</h4>
      <p><span>цена: </span><span>{price}</span></p>
      <ul>
        {ingredients.map(ingredient=>(<li key={ingredient.id}>{ingredient.name}</li>))}
      </ul>
    </div>
  );
};
