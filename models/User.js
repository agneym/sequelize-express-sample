const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  class User extends Model {}

  User.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
    },
    {
      sequelize,
    }
  );

  User.associate = function (models) {
    this.hasOne(models.Profile);
    this.hasMany(models.Review);
    this.belongsToMany(models.Book, {
      through: "ReadBooks",
    });
  };

  return User;
};
