'use strict'
const {
  Model
} = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Voucher extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.user = this.belongsTo(models.User, {foreignKey: 'userId'})
    }
  }
  Voucher.init({
    code: DataTypes.STRING,
    isUsed: DataTypes.DECIMAL,
    useDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Voucher',
  })
  return Voucher
}
