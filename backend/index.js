require("dotenv").config();
const express = require("express");
const connect = require("./config/db");
const app = express();
const cors = require("cors");
const allRoutes = require("./router/allRoutes");
const cookieParser = require("cookie-parser");

// const corsOptions = {
//   origin: ["http://localhost:3000/"],
//   credentials: true,
// };
// app.use(morgan("tiny"));

const corsOpts = {
  origin: "*",

  methods: ["GET", "POST"],

  allowedHeaders: ["Content-Type"],
  credentials: true,
};

app.use(cors(corsOpts));
app.use(cookieParser());
app.use(express.json());
app.use("/api", allRoutes);

app.get("/", (req, res) => {
  res.send("Home Pagessssssssssssss!");
});

app.listen(process.env.PORT, async () => {
  try {
    await connect();
    console.log(`Server listening on port ${process.env.PORT}`);
  } catch (err) {
    console.log(err);
  }
});
