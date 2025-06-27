import {IProductFilters, TGetProductListResponse} from "@/api/types";
import {useQuery} from "@tanstack/react-query";
import {ErrorMessage} from "@/types/commonTypes";
import {getProductsByFilters} from "@/api";

export const useGetProductFilters = (params: IProductFilters, enabled: boolean) => {
  return useQuery<TGetProductListResponse, ErrorMessage>({
    queryKey: ['filters', params.skip, params.limit, params.order, params.category, params.sortBy],
    queryFn: () => getProductsByFilters(params),
    enabled
  })
}