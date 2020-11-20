import axios from "api";
import ApiRoutes from "constants/apiPaths";

export const getProducts = () => {
  return axios.get(ApiRoutes.products);
}
