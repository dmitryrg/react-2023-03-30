import { Restaurant } from "@/components/Restaurant/Restaurant";
import { restaurants } from '@/constants/fixtures.js'
import React from "react";
import { nanoid } from 'nanoid'

const procRestaurants = restaurants.map(restaurant=> ({
  ...restaurant,
  menu:  restaurant.menu.map(dish=> ({
    ...dish,
    ingredients:dish.ingredients.map(ingredient=>({name:ingredient, id:nanoid()}))
  }))
}))
export const Home = () => {
  return (
    <div>
      {procRestaurants.map(restaurant => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
