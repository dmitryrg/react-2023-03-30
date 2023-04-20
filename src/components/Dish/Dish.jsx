import { Button } from "@/components/Button/Button";
import React, {useState} from 'react'

import styles from "./styles.module.scss";

export const Dish = ({ dish }) => {
  const AMOUNT_INI = 0
  const [amount,setAmount] = useState(AMOUNT_INI)
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
        onClick={()=>setAmount(amount - 1)}
        disabled={amount===0}>
        -
      </Button>
      {amount}
      <Button
        className={styles.incrementAction}
        type="primary"
        onClick={()=>setAmount(amount + 1)}
        disabled={amount===5}
      >
        +
      </Button>
    </div>
  );
};
