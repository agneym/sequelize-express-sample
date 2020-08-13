const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  class Book extends Model {}

  Book.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
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

  Book.associate = function (models) {
    this.belongsToMany(models.User, {
      through: "ReadBooks",
    });
  };

  return Book;
};
