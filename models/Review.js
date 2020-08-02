const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  class Review extends Model {}

  Review.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      body: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      rating: {
        type: DataTypes.SMALLINT,
        defaultValue: 0,
      },
    },
    {
      sequelize,
    }
  );

  return Review;
};
