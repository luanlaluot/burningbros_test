import { IBasePaginationApiRequest } from "../../model/base/IBaseApiRequest";
import { BaseApiService } from "../BaseApiService";
class ProductApi extends BaseApiService {
  public getAllProducts = (params: IBasePaginationApiRequest) =>
    this.get("/products", { params });
  public searchProduct = (params: IBasePaginationApiRequest) =>
    this.get("/products/search", { params });
}
const ProductApiService = new ProductApi();
export default ProductApiService;
