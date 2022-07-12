import { createSlice, DeepPartial, PayloadAction } from "@reduxjs/toolkit";
import { NavigateFunction } from "react-router-dom";

export interface AuthState {
  isLoggedIn: boolean;
  user: DeepPartial<IUser>;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: {},
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (
      state,
      action: PayloadAction<{
        email: string;
        password: string;
        navigate: NavigateFunction;
      }>
    ) => {
      if (
        action.payload.email === "admin" &&
        action.payload.password === "admin"
      ) {
        state.isLoggedIn = true;
        action.payload.navigate("/app");
      }
    },
  },
});

export default authSlice.reducer;
