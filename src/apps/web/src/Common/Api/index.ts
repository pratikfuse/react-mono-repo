import axios, { AxiosResponse } from 'axios';
import userService from 'src/Auth/services/userService';
import envConfig from '../config/env';

export class Api {
  private handleError = (error: any) => {
    switch (error.response.status) {
      case 401:
      case 403:
        userService.logout();
        window.location.replace(
          '/auth/login?msg=authentication_failed',
        );
        break;
      case 400:
        const formErrors =
          error.response.data.error ||
          error.response.data.errors ||
          {};
        return {
          ...formErrors,
          _error:
            error.response.data.message ||
            (error.response.data.error &&
              error.response.data.error['0']) ||
            (error.response.data.errors &&
              error.response.data.errors['0']),
        };
      case 404:
        return {
          message: 'Requested Resource does not exist',
        };
      case 500:
      case 503:
      default:
        return {
          message:
            'We ran into some problem while executing your request.',
        };
    }
  };

  axiosFunction = (withCredentials: boolean) => {
    return axios.create({
      baseURL: envConfig.baseUrl || 'http://localhost:5000',
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...(withCredentials
          ? {
              Authorization: 'Bearer access toeken',
            }
          : {}),
      },
    });
  };
  post<Data, Response>(
    url: string,
    data: Data,
    withCredentials = true,
  ) {
    const _self = this;
    return new Promise<AxiosResponse<Response>>(function (
      resolve,
      reject,
    ) {
      _self
        .axiosFunction(withCredentials)
        .post(url, data)
        .then(
          response => {
            resolve(response);
          },
          error => {
            reject(_self.handleError(error));
          },
        );
    });
  }
  get<Data, Response>(
    url: string,
    data: Data,
    withCredentials = true,
  ) {
    const _self = this;
    return new Promise<AxiosResponse<Response>>(function (
      resolve,
      reject,
    ) {
      _self
        .axiosFunction(withCredentials)
        .get(url, data)
        .then(
          response => {
            resolve(response);
          },
          error => {
            reject(_self.handleError(error));
          },
        );
    });
  }

  delete<Data, Response>(
    url: string,
    data: Data,
    withCredentials = true,
  ) {
    const _self = this;
    return new Promise<AxiosResponse<Response>>(function (
      resolve,
      reject,
    ) {
      _self
        .axiosFunction(withCredentials)
        .delete(url, data)
        .then(
          response => {
            resolve(response);
          },
          error => {
            reject(_self.handleError(error));
          },
        );
    });
  }

  update<Data, Response>(
    url: string,
    data: Data,
    withCredentials = true,
  ) {
    const _self = this;
    return new Promise<AxiosResponse<Response>>(function (
      resolve,
      reject,
    ) {
      _self
        .axiosFunction(withCredentials)
        .put(url, data)
        .then(
          response => {
            resolve(response);
          },
          error => {
            reject(_self.handleError(error));
          },
        );
    });
  }
}

const api = new Api();
export default api;
