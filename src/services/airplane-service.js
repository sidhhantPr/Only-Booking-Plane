const { AirplaneRepo } = require("../repositories");

const airplaneRepo = new AirplaneRepo();

async function createAirplane(data) {
  try {
    const airplane = airplaneRepo.create(data);
    return airplane;
  } catch (error) {
    throw error;
  }
}
module.exports = {
  createAirplane,
};
