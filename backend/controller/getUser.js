const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/newUser");

const userLoginController = async (req, res) => {
  const { email, password } = req.body;
  try {
    const findUser = await User.findOne({ email });
    // console.log(findUser, "FINDUSER");
    if (findUser) {
      const cookieOptions = {
        maxAge: 172800000,
        sameSite: "none",
        secure: true,
        httpOnly: true,
      };
      const bcryptresponse = await bcryptjs.compare(
        password,
        findUser.password
      );

      if (bcryptresponse) {
        const token = jwt.sign(
          {
            _id: findUser._id,
            name: findUser.name,
            email: findUser.email,
          },
          process.env.SECRET_KEY
        );

        return res.status(200).cookie("auth_token", token, cookieOptions).json({
          status: true,
          message: "Login success",
        });
      } else {
        return res.status(400).json({
          message: "User does not exist Or Wrong Password",
          status: false,
        });
      }
    }
    return res.status(400).json({
      message: "User does not exist with this email",
      status: false,
    });
  } catch (error) {
    return res.status(400).send({ message: error.message, status: false });
  }
};

module.exports = userLoginController;
