const express = require("express");

const userRouter = require("./userRourter");

const allRoutes = express.Router();

allRoutes.use("/user", userRouter);

module.exports = allRoutes;
