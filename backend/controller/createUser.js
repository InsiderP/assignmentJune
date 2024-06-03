const User = require("../models/newUser");

const bcryptjs = require("bcryptjs");

const CreateController = async (req, res) => {
  let { name, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "User Already Exist", status: false });
    }

    password = await bcryptjs.hash(password, 10);

    const create = new User({
      name,
      email,

      password,
    });

    await create.validate();

    await create.save();
    console.log(create);
    return res.status(200).json({
      message: "User Created Successfully",
      status: true,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

module.exports = CreateController;
