const express = require("express");
const PlanetsRouter = require("./planets/planets.router");
const launchesRouter = require("./launches/launches.router");
const api = express.Router();
api.use("/planets", PlanetsRouter);
api.use("/launches", launchesRouter);

module.exports = api;
