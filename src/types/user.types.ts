export interface IUser {
  id: string;
  name: string;
  age: number;
}

export type IUserCreate = Omit<IUser, 'id'>;
