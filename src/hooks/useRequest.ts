import { DependencyList, useEffect, useState } from "react";
import {
  IBaseApiPagination,
  IBaseApiResponse,
} from "../model/base/IBaseApiResponse";
import { IBaseErrorResponse } from "../model/base/IBaseErrorResponse";

export interface IRequest<Param extends IBaseApiPagination> {
  api: (param: Param) => Promise<IBaseApiResponse | IBaseErrorResponse>;
  param: Param;
  deps?: DependencyList;
  onSuccess?(data: IBaseApiResponse): void;
  onError?(): void;
}

export const usePaginationRequest = <
  Param extends IBaseApiPagination,
  Response
>(
  props: IRequest<Param>
) => {
  const { api, param, deps = [], onSuccess, onError } = props;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<IBaseApiResponse>([]);

  const request = async () => {
    console.log("load data");

    setLoading(true);
    api(param)
      .then((result: any) => {
        const data = result.data.data as IBaseApiResponse;
        console.log("on scucess");

        setData(data);
        onSuccess?.(data);
      })
      .catch((err) => {
        onError?.();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  /**
   * @Request
   */
  useEffect(() => {
    request();
  }, deps as DependencyList);

  /**
   * @Return
   */
  return {
    loading,
    data,
  };
};
