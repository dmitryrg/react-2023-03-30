import React from "react";
import { useSelector } from "react-redux";
import {Reviews} from '@/components/Reviews/Reviews.jsx'
import {selectReviewsByRestaurantId} from '@/store/entities/restaurant/selectors.js'

export const RestaurantReviewsContainer = ({ restaurantId }) => {
  const reviewIds = useSelector((state) =>
    selectReviewsByRestaurantId(state, { restaurantId })
  );

  if (!reviewIds?.length) {
    return null;
  }

  return <Reviews reviewIds={reviewIds} />;
};
