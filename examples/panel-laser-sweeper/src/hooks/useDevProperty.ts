import { useQuery } from 'react-query';
import * as devPropertyApi from '@/api/devProperty';

// TODO 是否引入本地缓存？在没网时用本地？

export function useGetDevProperty(code) {
  return useQuery([`get${code}`], async () => devPropertyApi.getDevProperty(code));
}

export function useSaveDevProperty(code, value) {
  return useQuery([`save${code}`], async () => devPropertyApi.saveDevProperty(code, value));
}
