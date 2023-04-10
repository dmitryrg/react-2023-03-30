import { Dish } from "@/components/Dish/Dish";
import React from "react";

import styles from "./styles.module.scss";

export const Menu = ({ menu }) => {
  if (!menu?.length) {
    return null;
  }

  return (
    <div className={styles.root}>
      <h3>Menu</h3>
      <ul className={styles.dishList}>
        {menu.map((dish) => (
          <li key={dish?.id} className={styles.dish}>
            <Dish dish={dish} />
          </li>
        ))}
      </ul>
    </div>
  );
};
