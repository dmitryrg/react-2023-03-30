import React from "react";

export const Dish = ({ dish }) => {
  if (!dish ) return null;

  return (
    <div>
      <div>
        <span>название: </span>
        <span>{dish.name}</span>
      </div>
      <div>
        <span>цена: </span>
        <span>{dish.price}</span>
      </div>
      <div>
        <span>состав: </span>
        <span>{dish.ingredients.join(', ')}</span>
      </div>
    </div>
  );
};
