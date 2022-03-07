import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../../authentication/services/auth";
import { setUser } from "../../authentication/store/authSlice";
import { LoginPayload } from "./types";

export interface LoginState {
  loginState: {
    pending: boolean;
    error: boolean;
    success: boolean;
  };
}

const initialState: LoginState = {
  loginState: {
    pending: false,
    error: false,
    success: false,
  },
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(performLogin.pending, ({ loginState }) => {
        loginState.pending = true;
        loginState.error = false;
        loginState.success = false;
      })
      .addCase(performLogin.fulfilled, ({ loginState }) => {
        loginState.pending = false;
        loginState.success = true;
      })
      .addCase(performLogin.rejected, ({ loginState }) => {
        loginState.pending = false;
        loginState.error = true;
      });
  },
});

export const performLogin = createAsyncThunk(
  "login/performLogin",
  async (payload: LoginPayload, { dispatch }) => {
    const user = await AuthService.signIn(payload.email, payload.password);
    dispatch(setUser(user));
  }
);

export default loginSlice.reducer;
