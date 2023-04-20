import { Button } from "@/components/Button/Button";
import { Header } from "@/components/Header/Header";
import { Restaurant } from "@/components/Restaurant/Restaurant";
import { Tabs } from "@/components/Tabs/Tabs";
import { restaurants } from "@/constants/fixtures";
import { useActiveIndex } from "@/hooks/useActiveIndex";
import React from "react";

export const Home = () => {
  const { activeIndex, setActiveIndex } = useActiveIndex({
    storageName: "activeRestaurantIndex",
  });
  const activeRestaurant = restaurants[activeIndex];

  return (
    <div>
      <Header />
      <Tabs restaurants={restaurants} onTabClick={setActiveIndex} />
      {activeRestaurant && (
        <Restaurant key={activeRestaurant.id} restaurant={activeRestaurant} />
      )}
    </div>
  );
};
