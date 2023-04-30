import { dishReducer } from "@/store/entities/dish";
import { restaurantReducer } from "@/store/entities/restaurant";
import { cartReducer } from "@/store/ui/cart";
import { combineReducers, createStore } from "redux";
import {reviewReducer} from '@/store/entities/review/index.js'
import {userReducer} from '@/store/entities/user/index.js'

const rootReducer = combineReducers({
  cart: cartReducer,
  restaurant: restaurantReducer,
  dish: dishReducer,
  user: userReducer,
  review:reviewReducer
});

export const store = createStore(rootReducer);
