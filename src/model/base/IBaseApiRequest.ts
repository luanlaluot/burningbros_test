export interface IBaseApiRequest {}
export interface IBasePaginationApiRequest {
  limit: number;
  skip: number;
  q?: string;
}
