import api from '../../services/api';
import {ApiResponse} from './ApiResponse.interface';
import {mapProducts} from '../../utils';

const loadProducts = async (page: number): Promise<ApiResponse> => {
  const {data} = await api.get<ApiResponse>('starships', {params: {page}});
  return {
    ...data,
    results: mapProducts(data.results),
  };
};

export default {loadProducts};
