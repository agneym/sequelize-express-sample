const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  class Book extends Model {}

  Book.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
    }
  );
};
