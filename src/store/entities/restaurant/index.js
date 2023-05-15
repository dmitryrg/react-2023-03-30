import { LOADING_STATUS } from "@/constants/loading-status";
import {createEntityAdapter, createSlice} from '@reduxjs/toolkit'
import {fetchRestaurants} from '@/store/entities/restaurant/thunks/loadRestaurantIfNotExisted.js'
const dishEntityAdapter = createEntityAdapter();

export const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: dishEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
  }),
  extraReducers: {
    [fetchRestaurants.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    [fetchRestaurants.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.finished;
      dishEntityAdapter.setMany(state, payload);
    },
    [fetchRestaurants.rejected]: (state, { payload }) => {
      state.loadingStatus =
        payload === LOADING_STATUS.earlyAdded
          ? LOADING_STATUS.finished
          : LOADING_STATUS.failed;
    },
  },
});
