import axios from "api";
import ApiRoutes from "constants/apiPaths";

export const getProducts = () => {
  const temp = axios;
  return axios.get(ApiRoutes.products, {
    withCredentials: true,
    
  });
}

// export const getProductById = (productId: string) => axios.get(Routes.productById, {})