export interface IBaseApiResponse extends IBaseApiPagination {
  [key: string]: any;
}
export interface IBaseApiPagination {
  total?: number;
  skip?: number;
  limit?: number;
}
