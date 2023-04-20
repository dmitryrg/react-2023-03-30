import { Button } from "@/components/Button/Button";
import React, { useState } from "react";

import styles from "./styles.module.scss";
import { Ingredients } from "@/components/Ingredients/Ingredients";
import { useDispatch, useSelector } from "@/CustomStore";

export const Dish = ({ dish }) => {
  const amount = useSelector((state) => state[dish.name] || 0);
  const dispatch = useDispatch();
  const increment = () => dispatch({ type: "increment", payload: dish.name });
  const decrement = () => dispatch({ type: "decrement", payload: dish.name });

  if (!dish) {
    return null;
  }

  const { name, ingredients } = dish;

  return (
    <div>
      <div className={styles.mainInfo}>
        <span className={styles.title}>{name}</span>
        <Button
          className={styles.decrementAction}
          type="secondary"
          disabled={amount === 0}
          onClick={decrement}
        >
          -
        </Button>
        {amount}
        <Button
          className={styles.incrementAction}
          type="primary"
          disabled={amount === 5}
          onClick={increment}
        >
          +
        </Button>
      </div>
      {amount > 0 && (
        <Ingredients ingredients={ingredients} className={styles.ingredients} />
      )}
    </div>
  );
};
