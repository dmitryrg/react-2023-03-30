import {selectRestaurantIds} from '@/store/entities/restaurant/selectors'
import {createAsyncThunk} from '@reduxjs/toolkit'
import {LOADING_STATUS} from '@/constants/loading-status.js'


export const fetchRestaurants = createAsyncThunk(
  "restaurant/fetchRestaurants",
  async (restaurantId, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      if (selectRestaurantIds(state).length) {
        return rejectWithValue(LOADING_STATUS.earlyAdded);
      }

      const response = await fetch(
        `http://localhost:3001/api/restaurants`
      );

      return await response.json();
    } catch (err) {
      rejectWithValue(`Error in "restaurant/fetchRestaurants" ${err.message}` );
    }
  }
);
