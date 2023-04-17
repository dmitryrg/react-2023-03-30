import { Button } from "@/components/Button/Button";
import React, { useState } from "react";

import styles from "./styles.module.scss";

export const Dish = ({ dish }) => {
  const [amount, setAmount] = useState(0);
  const increment = () => setAmount(amount + 1);
  const decrement = () => setAmount(amount - 1);

  if (!dish) {
    return null;
  }

  const { name } = dish;

  return (
    <div>
      <span>{name}</span>
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
  );
};
