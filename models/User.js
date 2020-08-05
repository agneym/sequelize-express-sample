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
    models.user.hasOne(models.profile);
    models.user.hasMany(models.review);
    models.user.belongsToMany(models.book, {
      through: "ReadBooks",
    });
  };

  return User;
};
