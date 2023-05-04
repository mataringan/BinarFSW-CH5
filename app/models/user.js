"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Car, {
        foreignKey: "createdBy",
        as: "creator",
      });
      this.hasMany(models.Car, {
        foreignKey: "updatedBy",
        as: "updator",
      });
      this.hasMany(models.Car, {
        foreignKey: "deletedBy",
        as: "deletor",
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      role: DataTypes.STRING,
      username: DataTypes.STRING,
      email: DataTypes.STRING,
      encryptedPassword: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
