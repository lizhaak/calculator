var express = require('express');
var router = express.Router();

router.post("/", function(req, res) {
  var data = req.body;
  var valueX = data.x;
  var valueY = data.y;

  var totalValue = Number(valueX) * Number(valueY);
  res.send(totalValue.toString());
});

module.exports = router;
