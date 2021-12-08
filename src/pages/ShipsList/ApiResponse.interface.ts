import {Ship} from 'src/types';

export interface ApiResponse {
  results: Ship[];
  count: number;
  next: string;
  previous: string;
}
