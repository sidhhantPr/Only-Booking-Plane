const express = require("express");
const router = express.Router();
const { InfoController } = require("../../controller");

const airplaneRoutes = require("./airplane-routes");

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use("/airplane", airplaneRoutes);
router.get("/info", InfoController.info);

module.exports = router;
