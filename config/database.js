const { Sequelize } = require("sequelize");

const {
  DB_USERNAME = "postgres",
  DB_PASSWORD = "",
  DB_HOST = "localhost",
  DB_PORT = 5432,
  DB_NAME,
} = process.env;

/**
 * Initialize and assert database connection.
 * @returns {Object} sequelize instance.
 */
const initDatabase = async () => {
  try {
    const sequelize = new Sequelize(
      `postgres://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`
    );
    await sequelize.authenticate();
    return sequelize;
  } catch (err) {
    console.error(`Database connection failed`, err);
    process.exit(1);
  }
};

module.exports = initDatabase;
