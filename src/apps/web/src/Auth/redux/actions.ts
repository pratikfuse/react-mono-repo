import {
  showError,
  showSuccess,
} from '@lf-mono-web/components';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  AppDispatch,
  RootState,
} from 'src/Common/redux/store';
import authService from '../services/authService';
import {
  LoginRequest,
  LoginResponse,
} from '../services/authService.types';

export default {
  login: createAsyncThunk<
    LoginResponse,
    LoginRequest,
    {
      dispatch: AppDispatch;
      state: RootState;
      rejectValue: ErrorResponse;
    }
  >('auth/login', async ({ email, password }, thunk) => {
    if (email === 'admin') {
      throw new Error('username not found');
    }
    try {
      const response = await authService.login({
        email,
        password,
      });
      showSuccess('logged in successfully', {
        onUndo: () => console.log('clicked undo'),
      });
      return response.data;
    } catch (e: any) {
      e.message && showError(e.message);
      return thunk.rejectWithValue(e);
    }
  }),
};
