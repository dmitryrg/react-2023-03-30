import React from "react";
import { Menu } from "@/components/Menu/Menu";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) return null;

  const { name,menu,reviews } = restaurant;

  return (
    <div>
      <span>{name}</span>
      <div>
          <Menu menu={menu} />
      </div>
    </div>
  );
};
