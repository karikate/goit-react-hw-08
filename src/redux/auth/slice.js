import { createSlice } from "@reduxjs/toolkit";
import { login, logout, refreshUser, register } from "./operaions";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggeIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggeIn = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggeIn = true;
    });
    builder.addCase(logout.fulfilled, () => initialState);
    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;
      state.isLoggeIn = true;
      state.isRefreshing = false;
    });
    builder.addCase(refreshUser.pending, (state) => {
      state.isRefreshing = true;
    });
    builder.addCase(refreshUser.rejected, (state) => {
      state.isRefreshing = false;
    });
  },
});

export const authReducer = authSlice.reducer;
