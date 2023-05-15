import { Menu } from "@/components/Menu/Menu";
import { selectIsDishLoading } from "@/store/entities/dish/selectors";
import {
  fetchDishesByRestaurantId,
} from "@/store/entities/dish/thunk/loadDishByRestaurantIdIfNotExisted.js";
import { selectMenuByRestaurantId } from "@/store/entities/restaurant/selectors";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const RestaurantMenuContainer = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const menu = useSelector((state) =>
    selectMenuByRestaurantId(state, { restaurantId })
  );
  const isLoading = useSelector(selectIsDishLoading);

  useEffect(() => {
    dispatch(fetchDishesByRestaurantId(restaurantId));
  }, [dispatch, restaurantId]);

  if (!menu?.length) {
    return null;
  }

  if (isLoading) {
    return <span>Loading...</span>;
  }

  return <Menu menu={menu} />;
};
