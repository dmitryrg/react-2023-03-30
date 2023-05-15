import { NewReviewForm } from "@/components/NewReviewForm/NewReviewForm";
import { RestaurantMenuContainer } from "@/containers/RestaurantMenu/RestaurantMenu";
import { RestaurantReviewsContainer } from "@/containers/RestaurantReviews/RestaurantReviews";
import React from "react";
import Link from 'next/link.js'
import {RestaurantCardContainer} from '@/containers/RestaurantCard/RestaurantCard.jsx'

export const Restaurant = ({ restaurant }) => {
  const { name, id:restaurantId } = restaurant || {};

  return (
    <div>
      <h2>{name}</h2>
      <Link
        key={`menu-${restaurantId}`}
        href={{
          pathname: "/restaurants/menu/[restaurantId]",
          query: { restaurantId },
        }}
      >
        <h3>Menu</h3>
      </Link>
      <Link
        key={`reviews-${restaurantId}`}
        href={{
          pathname: "/restaurants/reviews/[restaurantId]",
          query: { restaurantId },
        }}
      >
        <h3>Reviews</h3>
      </Link>
    </div>
  );
};

/*       <Rating value={rating} />
      <NewReviewForm />*/
