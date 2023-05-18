const { AirplaneService } = require("../services");
const StatusCodes = require("http-status-codes");

async function createAirplane(req, res) {
  try {
    const airplane = await AirplaneService.createAirplane({
      modelNumber: req.body.modelNumber,
      capacity: req.body.capacity,
    });
    return res.status(StatusCodes.CREATED).json({
      succes: true,
      message: "successfully created",
      error: {},
      data: "response",
    });
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      succes: false,
      message: "something went Wrong",
      error: {},
      data: {},
    });
  }
}
module.exports = {
  createAirplane,
};
