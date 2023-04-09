import { Restaurant } from "@/components/Restaurant/Restaurant";
import {restaurants} from '@/constants/fixtures.js'
import React from "react";

export const Home = () => {
  return (
    <div>
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
