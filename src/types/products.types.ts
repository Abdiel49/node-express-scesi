export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: string | number;
}

export type IProductCreate = Omit<IProduct, 'id'>;