module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    full_name: {
      type: Sequelize.STRING
    },
    email: {
      type: Sequelize.STRING
    },
    contact: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
