import React from "react";
import { Dish } from '@/components/Dish/Dish.jsx'

export const Menu = ({ menu }) => {
  if (!menu?.length) return null;

  return (
    <div>
      <h3>Меню</h3>
      <ul>
        {menu.map(dish=> (<li key={dish.id}><Dish dish={dish} /></li>))}
      </ul>
    </div>

  );
};
