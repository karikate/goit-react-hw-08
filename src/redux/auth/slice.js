import { createSlice } from "@reduxjs/toolkit";
import { login, logout, signup } from "./operaions";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLogIn: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(signup.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLogIn = true;
    });
    builder.addCase(logout.fulfilled, () => initialState);
  },
});

export const authReducer = authSlice.reducer;

// export default authSlice.reducer;
