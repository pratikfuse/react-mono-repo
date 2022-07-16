import api, { Api } from 'src/Common/Api';
import endpoints from 'src/constants/apiEndpoints';
import {
  LoginRequest,
  LoginResponse,
} from './authService.types';
import userService, { UserService } from './userService';

export class AuthService {
  private api: Api;
  private userService: UserService;

  constructor() {
    this.api = api;
    this.userService = userService;
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
    this.userService.logout();
  }
}

const authService = new AuthService();

export default authService;
