const express = require("express");
const app = express();
require("./models/db_confg");
const postRoute = require("./routes/post_controller");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use("/person", postRoute);

app.listen(8080, (req, res) => {
    console.log(`server starting`);
})
