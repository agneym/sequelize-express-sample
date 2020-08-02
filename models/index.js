const modelDefiners = [require("./Book")];

/**
 * Define all models using sequelize instance.
 * @param {Object} sequelize Database instance
 */
async function defineModels(sequelize) {
  for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
  }
  await sequelize.sync();
}

module.exports = defineModels;
