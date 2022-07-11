import axios, {
  AxiosResponse,
} from 'axios';
import userService from 'src/Auth/services/userService';
import envConfig from '../config/env';

// const auth0 = new Auth0();

export default class Api {
  constructor() {}
  handleError = (
    error: any,
  ) => {
    switch (
      error.response.status
    ) {
      case 401:
      case 403:
        userService.logout();
        window.location.replace(
          '/?msg=authentication failed',
        );
        break;
      case 400:
        const formErrors =
          error.response.data
            .error ||
          error.response.data
            .errors ||
          {};
        return {
          ...formErrors,
          _error:
            error.response
              .data.message ||
            (error.response
              .data.error &&
              error.response
                .data.error[
                '0'
              ]) ||
            (error.response
              .data.errors &&
              error.response
                .data.errors[
                '0'
              ]),
        };
      case 404:
        return {
          _error:
            'Requested Resource doesnot exist',
        };
      case 500:
      case 503:
      default:
        return {
          _error:
            'We ran into some problem while executing your request.',
        };
    }
  };

  axiosFunction = () => {
    return axios.create({
      baseURL:
        envConfig.baseUrl,
      responseType: 'json',
      headers: {
        'Content-Type':
          'application/json',
        Accept:
          'application/json',
        // Authorization: "Bearer " + auth0.getAccessToken(),
      },
    });
  };
  post<Data, Response>(
    url: string,
    data: Data,
  ) {
    let _self = this;
    return new Promise<
      AxiosResponse<Response>
    >(function (
      resolve,
      reject,
    ) {
      _self
        .axiosFunction()
        .post(url, data)
        .then(
          response => {
            resolve(response);
          },
          error => {
            reject(
              _self.handleError(
                error,
              ),
            );
          },
        );
    });
  }
  get<Data, Response>(
    url: string,
    data: Data,
  ) {
    const _self = this;
    return new Promise<
      AxiosResponse<Response>
    >(function (
      resolve,
      reject,
    ) {
      _self
        .axiosFunction()
        .get(url, data)
        .then(
          response => {
            resolve(response);
          },
          error => {
            reject(
              _self.handleError(
                error,
              ),
            );
          },
        );
    });
  }

  delete<Data, Response>(
    url: string,
    data: Data,
  ) {
    const _self = this;
    return new Promise<
      AxiosResponse<Response>
    >(function (
      resolve,
      reject,
    ) {
      _self
        .axiosFunction()
        .delete(url, data)
        .then(
          response => {
            resolve(response);
          },
          error => {
            reject(
              _self.handleError(
                error,
              ),
            );
          },
        );
    });
  }

  update<Data, Response>(
    url: string,
    data: Data,
  ) {
    const _self = this;
    return new Promise<
      AxiosResponse<Response>
    >(function (
      resolve,
      reject,
    ) {
      _self
        .axiosFunction()
        .put(url, data)
        .then(
          response => {
            resolve(response);
          },
          error => {
            reject(
              _self.handleError(
                error,
              ),
            );
          },
        );
    });
  }
}
