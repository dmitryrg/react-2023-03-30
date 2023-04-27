import { Home } from "@/components/Home/Home";
import { loadRestaurants } from "@/store/entities/restaurant/actions";
import { selectIsRestaurantLoading } from "@/store/entities/restaurant/selectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const HomeContainer = () => {
  const isRestaurantLoading = useSelector(selectIsRestaurantLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants());
  }, [dispatch]);

  if (isRestaurantLoading) {
    return <div>Loading...</div>;
  }

  return <Home />;
};
