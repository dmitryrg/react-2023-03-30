import { LOADING_STATUS } from "@/constants/loading-status";
import {createEntityAdapter, createSlice} from '@reduxjs/toolkit'
import { fetchReviewsByRestaurantId } from '@/store/entities/review/thunks/loadReviewsByRestaurantIdIfNotExisted.js'
const reviewsEntityAdapter = createEntityAdapter();

export const reviewSlice = createSlice({
  name: "review",
  initialState: reviewsEntityAdapter.getInitialState({
    loadingStatus: LOADING_STATUS.idle,
  }),
  extraReducers: {
    [fetchReviewsByRestaurantId.pending]: (state) => {
      state.loadingStatus = LOADING_STATUS.inProgress;
    },
    [fetchReviewsByRestaurantId.fulfilled]: (state, { payload }) => {
      state.loadingStatus = LOADING_STATUS.finished;
      reviewsEntityAdapter.setMany(state, payload);    },
    [fetchReviewsByRestaurantId.rejected]: (state, { payload }) => {
      state.loadingStatus =
        payload === LOADING_STATUS.earlyAdded
          ? LOADING_STATUS.finished
          : LOADING_STATUS.failed;
    },
  },
});
;
