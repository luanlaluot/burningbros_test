import { IBaseApiResponse } from "../base/IBaseApiResponse";
import { IBaseModel } from "../base/IBaseModel";

export interface IProduct extends IBaseModel {
  title?: string;
  description?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  brand?: string;
  category?: string;
  thumbnail?: string;
  images?: string;
}

export interface IProductsResponse extends IBaseApiResponse {
  products: IProduct[];
}
