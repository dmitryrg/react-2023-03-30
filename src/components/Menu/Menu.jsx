import React from "react";

export const Menu = ({ menu }) => {
  if (!(menu && Array.isArray(menu) && menu.length===0)) return null;

  return (
    <div>
      {menu.map(dish=> {} )}
    </div>
  );
};
