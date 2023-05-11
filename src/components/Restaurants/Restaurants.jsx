import { RestaurantCardContainer } from "@/containers/RestaurantCard/RestaurantCard";
import Link from "next/link";
import React from "react";

import styles from "./styles.module.scss";

export const Restaurants = ({ restaurantIds }) => {
  return (
    <div className={styles.root}>
      {restaurantIds.map((restaurantId) => (
        <Link
          key={restaurantId}
          href={{
            pathname: "/restaurants/[restaurantId]",
            query: { restaurantId },
          }}
          className={styles.restaurantLink}
        >
          <RestaurantCardContainer restaurantId={restaurantId} />
        </Link>
      ))}
    </div>
  );
};
