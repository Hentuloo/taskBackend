const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const dbConnect = require("./dbConnect");
const clientRouter = require("./resources/client/router.js");

//Connect to DB
dbConnect();

const app = express();

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Clients API TODO
app.use("/api/client", clientRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`);
});
