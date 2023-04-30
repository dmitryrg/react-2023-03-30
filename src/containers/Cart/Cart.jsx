import React from "react";
import { useSelector } from "react-redux";
import {selectReviewById} from '@/store/entities/review/selectors.js'
import {Cart} from '@/components/Cart/Cart.jsx'
import {selectCartModule} from '@/store/ui/cart/selectors.js'

export const CartContainer = () => {
  const dishIds = Object.keys(useSelector(selectCartModule));


  return (
    <Cart dishIds={dishIds} />
  );
};
