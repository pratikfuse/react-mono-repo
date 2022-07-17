import { createSlice, DeepPartial } from '@reduxjs/toolkit';
import actions from './actions';
export interface AuthState {
  isLoggedIn: boolean;
  user: DeepPartial<IUser>;
  loading: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  user: {},
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(actions.login.pending, state => {
        state.loading = true;
      })
      .addCase(actions.login.fulfilled, state => {
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(actions.login.rejected, state => {
        state.loading = false;
        state.isLoggedIn = false;
      });
  },
});

export default authSlice.reducer;
