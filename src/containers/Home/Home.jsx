import { Home } from "@/components/Home/Home";
import { loadRestaurantIfNotExisted } from "@/store/entities/restaurant/thunks/loadRestaurantIfNotExisted";
import { selectIsRestaurantLoading } from "@/store/entities/restaurant/selectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserIfNotExisted } from "@/store/entities/user/thunks/loadUserIfNotExisted";

export const HomeContainer = () => {
  const isRestaurantLoading = useSelector(selectIsRestaurantLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurantIfNotExisted());
    dispatch(loadUserIfNotExisted());
  }, [dispatch]);

  if (isRestaurantLoading) {
    return <div>Loading...</div>;
  }

  return <Home />;
};
