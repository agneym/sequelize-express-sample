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
  const models = modelDefiners.reduce((models, modelDefiner) => {
    const model = modelDefiner(sequelize);
    return {
      ...models,
      model,
    };
  }, {});

  /* Associate with related models */
  Object.values(models).forEach((model) => {
    if (typeof model.associate === "function") {
      model.associate(models);
    }
  });

  /* Create models in database */
  await sequelize.sync();
}

module.exports = defineModels;
