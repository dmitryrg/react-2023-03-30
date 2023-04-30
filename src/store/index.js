import { dishReducer } from "@/store/entities/dish";
import { restaurantReducer } from "@/store/entities/restaurant";
import { cartReducer } from "@/store/ui/cart";
import { combineReducers, createStore } from "redux";
import {reviewReducer} from '@/store/entities/review/index.js'

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  review:reviewReducer
});

export const store = createStore(rootReducer);
