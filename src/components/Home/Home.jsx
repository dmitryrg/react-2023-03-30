import { Header } from "@/components/Header/Header";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { restaurants } from "@/constants/fixtures";
import React from "react";

export const Home = () => {
  return (
    <div>
      <Header />
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};
