import { Button } from "@/components/Button/Button";
import React from "react";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant) {
    return null;
  }

  const { name } = restaurant;

  return (
    <div>
      <Button>
        <span>{name}</span>
      </Button>
    </div>
  );
};
