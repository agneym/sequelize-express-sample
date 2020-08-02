const modelDefiners = [];

/**
 * Define all models using sequelize instance.
 * @param {Object} sequelize Database instance
 */
function defineModels(sequelize) {
  for (const modelDefiner of modelDefiners) {
    modelDefiner(sequelize);
  }
}

module.exports = defineModels;
