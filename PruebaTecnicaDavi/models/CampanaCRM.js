'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, Sequelize) => {
  class CampanaCRM extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CampanaCRM.init({
    nombres: {
      type: Sequelize.STRING
    },
    apellidos: {
      type: Sequelize.STRING
    },
    telefonos: {
      type: Sequelize.STRING
    },
    direcciones: {
      type: Sequelize.STRING
    },
  }, {
    sequelize,
    modelName: 'CampanaCRM',
  });
  return CampanaCRM;
};
