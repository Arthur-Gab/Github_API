const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const routes = require("./routes");

const app = express();

mongoose.connect(
	"mongodb+srv://omnistack:omnistack@cluster0.zgpreiu.mongodb.net/week10?retryWrites=true&w=majority"
);

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(7878);
