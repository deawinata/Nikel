export interface IProduct {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  stock: number;
  images: string[];
  thumbnail: string;
}

export interface IProductListParams {
  limit: number;
  skip: number;
}

export interface IProductFilters {
  category?: string;
  limit?: number;
  skip?: number;
  sortBy?: string;
  order?: string;
}

export type TGetProductListResponse = {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
} | null

export interface Category {
  slug: string;
  name: string;
}

export interface ICart {
  item: IProduct;
  qty: number;
}