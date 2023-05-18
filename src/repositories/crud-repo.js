const { Logger } = require("../config");

class CrudRepo {
  constructor(model) {
    this.model = model;
  }
  async create(data) {
    try {
      const response = await this.model.create(data);
      return response;
    } catch (error) {
      Logger.error("somethimg went wrong");
      throw error;
    }
  }
  async destroy(data) {
    try {
      const response = await this.model.destroy({
        where: {
          id: data,
        },
      });
      return response;
    } catch (error) {
      Logger.error("somethimg went wrong");
      throw error;
    }
  }
  async get(data) {
    try {
      const response = await this.model.findByPk(data);
      return response;
    } catch (error) {
      Logger.error("somethimg went wrong");
      throw error;
    }
  }
  async getAll(data) {
    try {
      const response = await this.model.findAll(data);
      return response;
    } catch (error) {
      Logger.error("somethimg went wrong");
      throw error;
    }
  }
  async update(data, id) {
    try {
      const response = await this.model.update(data, {
        where: {
          id: id,
        },
      });
    } catch (error) {
      Logger.error("somethimg went wrong");
      throw error;
    }
  }
}
module.exports = CrudRepo;
