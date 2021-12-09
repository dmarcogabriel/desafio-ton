import api from '../../services/api';
import {ApiResponse} from './ApiResponse.interface';
import {mapShips} from '../../utils';

const loadShips = async (page: number): Promise<ApiResponse> => {
  const {data} = await api.get<ApiResponse>('starships', {params: {page}});
  return {
    ...data,
    results: mapShips(data.results),
  };
};

export default {loadShips};
