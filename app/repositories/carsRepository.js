const { Car } = require("../models");
const { Op } = require("sequelize");

module.exports = {
  create(createArgs) {
    return Car.create(createArgs);
  },

  update(id, updateArgs) {
    return Car.update(updateArgs, { where: { id } });
  },

  delete(id) {
    return Car.destroy({ where: { id } });
  },

  find(id) {
    return Car.findByPk(id);
  },

  search(key) {
    return Car.findAll({
      where: {
        [Op.and]: [
          {
            available: true,
          },
          {
            [Op.or]: [
              {
                name: { [Op.substring]: key },
              },
              {
                size: { [Op.substring]: key },
              },
            ],
          },
        ],
      },
    });
  },

  findAll() {
    return Car.findAll();
  },

  findAvailable() {
    return Car.findAll({ where: { available: true } });
  },

  getTotalCars() {
    return Car.count();
  },
};
