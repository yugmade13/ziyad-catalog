import api from '../api/apiInstance';
import { ProductsResponse, Product } from '../types/product';

export const getProducts = async (): Promise<ProductsResponse> => {
  const response = await api.get<ProductsResponse>('/products', {
    params: { limit: 12 },
  });
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await api.get<Product>(`/products/${id}`);
  return response.data;
};
