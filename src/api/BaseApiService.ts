import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
} from "axios";
import { IBaseApiResponse } from "../model/base/IBaseApiResponse";
import { IBaseErrorResponse } from "../model/base/IBaseErrorResponse";

const API_CONFIG: CreateAxiosDefaults<any> = {
  baseURL: "https://dummyjson.com",
};

export abstract class BaseApiService {
  private instance: AxiosInstance;
  constructor() {
    this.instance = axios.create(API_CONFIG);
  }

  private _handleResponse<T = any>(
    response: AxiosResponse<T | IBaseErrorResponse>
  ): IBaseApiResponse | IBaseErrorResponse {
    if (response.status === 200) {
      const data = response.data as T;
      return {
        data: {
          data,
        },
      };
    }

    //return error
    const error = response.data as string;
    return {
      error: {
        message: error,
      },
    };
  }

  private _handleError<T = any>(): IBaseErrorResponse {
    return {
      error: {
        message: "Network Error",
      },
    };
  }
  public async get<T>(url: string, config?: AxiosRequestConfig) {
    try {
      const response = await this.instance.get<T>(url, config);
      return this._handleResponse<T>(response);
    } catch (error) {
      return this._handleError();
    }
  }
}
