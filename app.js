//Importing the required modules
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//Import the route handlers for handling queries
const custRoutes = require("./customer.js");
const phoneRoutes = require("./phone.js");
const orderRoutes = require("./orders.js");

//Add some way to read json
app.use(express.json());

//Use the routes that were imported
app.use("/customers", custRoutes);
app.use("/phones", phoneRoutes);
app.use("/orders", orderRoutes);


//Connect to mongodb database:

mongoose.connect("mongodb+srv://myUser1:<password>@cluster0.wi9yewk.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

//run express on either 3000 or production port
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
