import {
  createAsyncThunk,
  createSlice,
  DeepPartial,
} from '@reduxjs/toolkit';
import {
  AppDispatch,
  RootState,
} from 'src/Common/redux/store';
import authService from '../services/authService';
import {
  LoginRequest,
  LoginResponse,
} from '../services/authService.types';
export interface AuthState {
  isLoggedIn: boolean;
  user: DeepPartial<IUser>;
  loading: boolean;
}

const initialState: AuthState = {
  isLoggedIn: true,
  user: {},
  loading: false,
};

export const login = createAsyncThunk<
  LoginResponse,
  LoginRequest,
  {
    // Optional fields for defining thunkApi field types
    dispatch: AppDispatch;
    state: RootState;
    rejectValue: ErrorResponse;
  }
>('auth/login', async ({ email, password }, thunk) => {
  try {
    const response = await authService.login({
      email,
      password,
    });
    if (response.status === 200) {
      return response.data;
    } else {
      if (!response.data) {
        return thunk.rejectWithValue({
          error: 'not valid',
        } as ErrorResponse);
      }
      return thunk.rejectWithValue({
        error: 'not valid',
      } as ErrorResponse);
    }
  } catch (error: any) {
    return thunk.rejectWithValue({
      error: 'not valid',
    } as ErrorResponse);
  }
});

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(login.pending, state => {
        state.loading = true;
      })
      .addCase(login.fulfilled, state => {
        state.loading = false;
        state.isLoggedIn = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
      });
  },
});
export default authSlice.reducer;
