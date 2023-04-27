import { dishReducer } from "@/store/entities/dish";
import { restaurantReducer } from "@/store/entities/restaurant";
import { loadRestaurantIfNotExisted } from "@/store/entities/restaurant/middlewares/loadRestaurantIfNotExisted";
import { reviewReducer } from "@/store/entities/review";
import { userReducer } from "@/store/entities/user";
import { logger } from "@/store/middlewares/logger";
import { cartReducer } from "@/store/ui/cart";
import { applyMiddleware, combineReducers, createStore } from "redux";

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  review: reviewReducer,
  user: userReducer,
});

export const store = createStore(
  rootReducer,
  applyMiddleware(logger, loadRestaurantIfNotExisted)
);
