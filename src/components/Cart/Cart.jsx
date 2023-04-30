import React from "react";
import { DishContainer } from "@/containers/Dish/Dish";

export const Cart = ({dishIds}) => {

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {dishIds.map((dishId) => (
          <li key={dishId}>
            <DishContainer dishId={dishId} />
          </li>
        ))}
      </ul>
    </div>
  );
};
