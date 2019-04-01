'use strict';
const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username required'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Username required'
        }
      }
    },
    role: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate(user, options) {
        // const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync(user.password, 10);
      }
    }
  });
  User.associate = function(models) {
    // associations can be defined here
  };
  return User;
};