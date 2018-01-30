'use strict';
module.exports = (sequelize, DataTypes) => {
  var Deku = sequelize.define('Deku', {
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Deku;
};