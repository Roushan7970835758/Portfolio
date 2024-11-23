const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");


//dotevn configrueation
dotenv.config();

//rest object
const app = express();

//middleware
app.use(cors());
app.use(express.json());

//static files access
app.use(express.static(path.join(__dirname, "../frontend/portfolio/node_modules/build")));

//routes
app.use("/api/v1/portfolio", require("./routes/portfolioRoutes"));

//port
const PORT = process.env.PORT || 8080;

//listner
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
