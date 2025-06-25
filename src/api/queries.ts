import {IProductListParams, TGetProductListResponse} from "@/api/types";
import {useQuery, UseQueryOptions} from "@tanstack/react-query";
import {ErrorMessage} from "@/types/commonTypes";
import {getProductList} from "@/api";

export const useGetProductListQuery = (params: IProductListParams) => {
  return useQuery<TGetProductListResponse, ErrorMessage>({
    queryKey: ['get', 'product', 'list'],
    queryFn: () => getProductList(params)
  })
}
