import React from "react";

export const Dish = ({ dish }) => {
  if (!dish) {
    return null;
  }

  const { name } = dish;

  return (
    <div>
      <span>{name}</span>
    </div>
  );
};
