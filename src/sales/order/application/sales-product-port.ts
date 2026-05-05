export interface ProductDetails {
  id: string;
  price: number;
}

export interface SalesProductPort {
  findById(id: string): Promise<ProductDetails | null>;
}
