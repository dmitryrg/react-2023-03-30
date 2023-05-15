import { CartContainer } from "@/containers/Cart/Cart";
import {RestaurantCardContainer} from '@/containers/RestaurantCard/RestaurantCard.jsx'
import React from 'react'
import {useRouter} from 'next/router.js'

export default function CartPage() {
  const router = useRouter();
  return <CartContainer />;
}
