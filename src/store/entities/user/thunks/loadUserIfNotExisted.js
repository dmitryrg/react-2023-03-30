import { userSlice } from "@/store/entities/user";
import { selectUserIds } from "@/store/entities/user/selectors";
import {createAsyncThunk} from '@reduxjs/toolkit'
import {LOADING_STATUS} from '@/constants/loading-status.js'

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (_, { getState, rejectWithValue }) => {
    try {
      const state = getState();
      if (selectUserIds(getState()).length) {
        return rejectWithValue(LOADING_STATUS.earlyAdded);
      }

      const response = await fetch(
        `http://localhost:3001/api/users`
      );

      return await response.json();
    } catch (err) {
      rejectWithValue(`Error in "user/fetchUsers" ${err.message}` );
    }
  }
);
