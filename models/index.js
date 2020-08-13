const modelDefiners = [
  require("./Book"),
  require("./Profile"),
  require("./Review"),
  require("./User"),
];

/**
 * Define all models using sequelize instance.
 * @param {Object} sequelize Database instance
 */
async function defineModels(sequelize) {
  modelDefiners.forEach((modelDefiner) => {
    modelDefiner(sequelize);
  });

  /* Associate with related models */
  const { models } = sequelize;
  Object.values(models).forEach((model) => {
    if (typeof model.associate === "function") {
      model.associate.call(model, models);
    }
  });

  await sequelize.sync({
    force: true,
  });
}

module.exports = defineModels;
