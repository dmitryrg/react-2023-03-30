import { Reviews } from "@/components/Reviews/Reviews";
import { selectReviewsByRestaurantId } from "@/store/entities/restaurant/selectors";
import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { loadReviewByRestaurantIdIfNotExisted } from '@/store/entities/review/thunk/loadReviewByRestaurantIdIfNotExisted.js'
import { selectIsReviewLoading } from '@/store/entities/review/selectors.js'

export const RestaurantReviewsContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviewIds = useSelector((state) =>
    selectReviewsByRestaurantId(state, { restaurantId })
  );

  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(loadReviewByRestaurantIdIfNotExisted(restaurantId));
  }, [dispatch, restaurantId]);

  if (!reviewIds?.length) {
    return null;
  }

  if (isLoading) {
    return <span>Loading Reviews...<br/></span>;
  }

  return <Reviews reviewIds={reviewIds} />;
};
