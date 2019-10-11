const router = require('express').Router();
const SCG = require("../controllers/SCG.controller");
router
    .get('/findingXYZ', SCG.findingXYZ)
    .get('/findRestaurantsInBangsue', SCG.findRestaurantsInBangsue)

module.exports = router;