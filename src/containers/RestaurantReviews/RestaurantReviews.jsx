import { Reviews } from "@/components/Reviews/Reviews";
import { selectReviewsByRestaurantId } from "@/store/entities/restaurant/selectors";
import { selectIsReviewLoading } from "@/store/entities/review/selectors";
import { fetchReviewsByRestaurantId } from "@/store/entities/review/thunks/loadReviewsByRestaurantIdIfNotExisted";
import { fetchUsers } from "@/store/entities/user/thunks/loadUserIfNotExisted";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantReviewsContainer = ({ restaurantId }) => {
  const reviews = useSelector((state) =>
    selectReviewsByRestaurantId(state, { restaurantId })
  );
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsReviewLoading);

  useEffect(() => {
    dispatch(fetchReviewsByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  useEffect(() => {
    dispatch(fetchUsers ());
  }, [dispatch]);

  if (!reviews?.length) {
    return null;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return <Reviews reviews={reviews} />;
};
