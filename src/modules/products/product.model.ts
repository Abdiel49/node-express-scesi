import { CreationOptional, DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config/database.config';
import { IProductCreate, IProductModel } from './products.types';

class Product extends Model<IProductModel> implements IProductModel {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  // declare created_at: Date>;
  // declare updated_at: CreationOptional<Date>;
}

Product.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
        is: /^[a-zA-Z0-9]*$/,
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'products',
  }
);

export default Product;