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

  /**
   *
   * @param loginData call login api with user's emial and password
   * set session data on successful login
   * @returns
   */
  async login(loginData: LoginRequest) {
    const loginResponse = await this.api.post<
      LoginRequest,
      LoginResponse
    >(
      endpoints.auth.login,
      {
        email: loginData.email,
        password: loginData.password,
      },
      false,
    );
    this.setSession(loginResponse);
    return loginResponse;
  }

  /**
   *
   * @param sessionData Session data returned from login api
   * Store session data => access token, refresh token ..., to localstorage
   */
  setSession(sessionData: any) {
    // localStorage.setItem({"ac"})
  }

  // TODO handle logout
  /**
   * Handler to remove client session from user's browser
   */
  async logout(): Promise<any> {
    // return this.logout()
    //   .then(async () => await this.logout())
    //   .then(this.logout);
  }
}

const authService = new AuthService();

export default authService;
