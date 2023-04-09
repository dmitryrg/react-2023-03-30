import React from "react";
import { Reviews } from "@/components/Reviews/Reviews";
import { Menu } from "@/components/Menu/Menu";
import { Dish } from '@/components/Dish/Dish.jsx'

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) return null;

  const { name,menu,reviews } = restaurant;

  return (
    <div>
      <div>{name}</div>
      <div>
        <div>-меню-</div>
        <Menu menu={menu}/>
      </div>
      <div>
        <div>-блюда-</div>
        <div>
          {menu.map(dish=> (<Dish key={dish.id} dish={dish}/>))}
        </div>
      </div>
      <div>
        <div>-отзывы-</div>
        <Reviews reviews={reviews}/>
      </div>
      <div>#######</div>
    </div>
  );
};
