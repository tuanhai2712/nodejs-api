const express = require("express");

const app = express();
app.use(express.json());
require("./routes")(app);

app.listen(5000, () => console.log("auth running"));
