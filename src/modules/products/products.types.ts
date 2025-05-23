export interface IProduct {
  id: number;
  name: string;
  description: string;
  price: string | number;
}

export interface IProductModel {
  id: number;
  name: string;
  description: string;
  price: number;
  // create_at: Date;
  // update_at: Date;
}

export type IProductCreate = Omit<IProductModel, 'id' | 'create_at' | 'update_at'>;

export type IProductUpdate = Partial<IProductCreate>;
