const User = require("../models/newUser");
const jwt = require("jsonwebtoken");
const cookie = require("cookie");

module.exports.isAuth = async (req, res, next) => {
  const token = req.cookies.auth_token || req.headers.authorization;

  if (!token) {
    return handleUnauthorized(res);
  }

  let decodedJwtPayload;
  try {
    decodedJwtPayload = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decodedJwtPayload._id).select("-password");

    if (!user) {
      return handleUnauthorized(res);
    }

    req.profile = user;

    next();
  } catch (error) {
    return res.status(500).json({ message: error.message, status: false });
  }
};

module.exports.isAuthSocket = async (socket, next) => {
  // Parse cookies
  let cookies = cookie.parse(socket.handshake.headers.cookie || "");
  const token = cookies.auth_token;

  if (!token) {
    return next(new Error("Unauthorized"));
  }

  let decodedJwtPayload;
  try {
    decodedJwtPayload = jwt.verify(token, process.env.SECRET_KEY);
    const user = await User.findById(decodedJwtPayload._id).select("-password");

    if (!user) {
      return next(new Error("Unauthorized"));
    }

    // if (user.name === "superadmin") {
    //   socket.findQuery = { orgNumber: socket.orgNumber };
    // } else {
    //   socket.findQuery = { branchId: socket.branchId };
    // }
    // socket.profile = user;
    // socket.orgNumber = user.orgNumber;
    // socket.orgId = user.orgId;
    // socket.branchId = user.branchId;
    // socket.role = user.role;
    // next();
  } catch (error) {
    return next(new Error("Internal Server Error"));
  }
};

const handleUnauthorized = (res) => {
  res.status(401).json({ success: false, message: "You are not authorized" });
};
