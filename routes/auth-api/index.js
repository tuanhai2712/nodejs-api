const _ = require("lodash");
const { v4: uuid } = require("uuid");
module.exports = function (app) {
  app.get("/outfit", (req, res) => {
    const tops = ["Black", "White", "Orange"];
    const jeans = ["Grey", "Red", "Navy"];
    const tshirt = ["Yellow", "Green", "Blue"];
    res.json({
      top: _.sample(tops),
      jeans: _.sample(jeans),
      tshirt: _.sample(tshirt),
    });
  });

  app.post("/comments", (req, res) => {
    const id = uuid();
    const body = req.body;
    console.log("body", body);
    res.sendStatus(200);
  });

  //other routes..
};
