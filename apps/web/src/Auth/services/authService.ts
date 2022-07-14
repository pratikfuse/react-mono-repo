import api, { Api } from 'src/Common/Api';
import endpoints from 'src/constants/apiEndpoints';
import {
  LoginRequest,
  LoginResponse,
} from './authService.types';

export class AuthService {
  private api: Api;

  constructor() {
    this.api = api;
  }

  async login(loginData: LoginRequest) {
    return this.api.post<LoginRequest, LoginResponse>(
      endpoints.auth.login,
      {
        email: loginData.email,
        password: loginData.password,
      },
    );
  }

  async logout() {
    localStorage.removeItem('access_token');
  }
}

const authService = new AuthService();

export default authService;
