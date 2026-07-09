// app.js
const express = require("express");
const app = express();
const path = require("node:path");
require("dotenv").config();

//routers
const homeRouter = require('./routes/homeRouter');
const newRouter = require('./routes/newRouter');
const messageRouter = require("./routes/messageRouter");



// styles
const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

// client side set up for ejs
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(express.urlencoded({ extended: true }));

app.use('/', homeRouter);
app.use('/new', newRouter)
app.use('/message', messageRouter)


const PORT = 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server running on", PORT);
});

