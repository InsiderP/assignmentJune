const express = require("express");
const CreateController = require("../controller/createUser");
const userLoginController = require("../controller/getUser");
const userRouter = express.Router();
userRouter.post("/create", CreateController);
userRouter.post("/login", userLoginController);
module.exports = userRouter;
