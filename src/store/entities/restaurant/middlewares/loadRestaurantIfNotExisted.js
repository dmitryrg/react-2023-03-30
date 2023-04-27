import {
  RESTAURANT_ACTION,
  failLoadingRestaurants,
  finishLoadingRestaurants,
  startLoadingRestaurants,
} from "@/store/entities/restaurant/actions";
import { selectRestaurantIds } from "@/store/entities/restaurant/selectors";

export const loadRestaurantIfNotExisted = (store) => (next) => (action) => {
  if (action.type !== RESTAURANT_ACTION.load) {
    return next(action);
  }

  if (selectRestaurantIds(store.getState()).length) {
    return;
  }

  store.dispatch(startLoadingRestaurants());

  fetch("http://localhost:3001/api/restaurants/")
    .then((response) => response.json())
    .then((restaurants) =>
      store.dispatch(finishLoadingRestaurants(restaurants))
    )
    .catch(() => store.dispatch(failLoadingRestaurants()));
};
