const router = require("express").Router();

router.use("/plays", require('./plays.routes'))

module.exports = router;
