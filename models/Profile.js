const { Sequelize, DataTypes, Model } = require("sequelize");

module.exports = (sequelize) => {
  class Profile extends Model {}

  Profile.init(
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
      website: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
    }
  );

  Profile.associate = function (models) {
    this.belongsTo(models.User);
  };

  return Profile;
};
