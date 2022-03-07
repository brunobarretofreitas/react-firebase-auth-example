import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";

interface State {
  user: User | null;
  loadingUser: boolean;
}

const initialState: State = {
  user: null,
  loadingUser: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
      state.loadingUser = false;
    },
    setLoadingUser: (state, action: PayloadAction<boolean>) => {
      state.loadingUser = action.payload;
    },
  },
});

export const { setUser, setLoadingUser } = authSlice.actions;
export default authSlice.reducer;
