import { selectReviewIds } from "@/store/entities/review/selectors";
import { selectReviewsByRestaurantId } from '@/store/entities/restaurant/selectors'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { LOADING_STATUS } from '@/constants/loading-status.js'

export const fetchReviewsByRestaurantId = createAsyncThunk(
  "review/fetchReviewsByRestaurantId",
  async (restaurantId, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      const restaurantReviews = selectReviewsByRestaurantId(state, {
        restaurantId,
      });
      const reviewIds = selectReviewIds(state);

      if (restaurantReviews.every((reviewId) => reviewIds.includes(reviewId))) {
        return rejectWithValue(LOADING_STATUS.earlyAdded);
      }

      const response = await fetch(
        `http://localhost:3001/api/reviews?restaurantId=${restaurantId}`
      );

      return await response.json();
    } catch (err) {
      rejectWithValue(`Error in "review/fetchReviewsByRestaurantId" ${err.message}` );
    }

  })
