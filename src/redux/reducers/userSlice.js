import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axiosInstance from '../../services/caller.service';

export const getInfoUser = createAsyncThunk(
  'user/getInfoUser',
  async (_, thunkAPI) => {
    try {
      const token = localStorage.getItem('token') ?? '';
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.post('http://localhost:3001/api/v1/user/profile', null, config);
      return response.data.body;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const updateUserInfo = createAsyncThunk(
  'user/updateUserInfo',
  async ({ _, userInfo }, thunkAPI) => {
    try {
      const token = localStorage.getItem('token') ?? '';
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const response = await axiosInstance.put(`http://localhost:3001/api/v1/user/profile`, userInfo, config);
      localStorage.getItem('token')
      return response.data.body;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userDetails: {
      userName: "",
      id: "",
    }
  },
  reducers: {
    updateUserName: (state, action) => {
      state.userDetails = action.payload.userDetails;
      state.userDetails.userName = action.payload.userName;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getInfoUser.fulfilled, (state, action) => {
        state.userDetails = action.payload;
      })
      .addCase(getInfoUser.rejected, (state, action) => {

      });
  }
});

export const { updateUserName } = userSlice.actions;
export const { setUserDetails } = userSlice.actions;
export default userSlice.reducer;