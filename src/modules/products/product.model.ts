// src/models/product.model.ts

import { CreationOptional, DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config/database.config';

interface ProductAttributes {
  id: number;
  name: string;
  description: string;
  price: number;
  brand: string;
  stock: number;
}

export interface ProductCreationAttributes extends Optional<ProductAttributes, 'id'> {}

class Product extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public brand!: string;
  public stock!: number;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
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
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL(10, 2), // Allow for decimal prices with 2 decimal places
      allowNull: false,
      validate: {
        min: 0.01, // Enforce a minimum price of 0.01
      },
    },
    brand: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    stock: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      validate: {
        min: 0, // Enforce a minimum stock of 0
      },
    },
  },
  {
    sequelize,
    tableName: 'products',
    // Enable timestamps for automatic creation and update
    timestamps: true,
  }
);

export default Product;
