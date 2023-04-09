import React from "react";
import { Menu } from "@/components/Menu/Menu";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) return null;

  const { name,menu,reviews } = restaurant;
  console.log('menu 1 ->', menu); // debug

  return (
    <div>
      <div>{name}</div>
      <div>
        <Menu menu={menu}>меню</Menu>
      </div>
      <div>#######</div>
    </div>
  );
};
