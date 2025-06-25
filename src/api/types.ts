export interface IProduct {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: ICategory;
  images: string[];
}

export interface ICategory {
  id: number;
  name: string;
  image: string;
  slug: string;
}

export interface IProductListParams {
  limit: number;
  offset: number;
}

export interface IProductFilters {
  categoryId?: number;
  categorySlug?: string;
  limit?: number;
  offset?: number;
}

export type TGetProductListResponse = IProduct[] | null