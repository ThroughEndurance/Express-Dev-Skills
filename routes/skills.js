var express = require('express');
var router = express.Router();

//This is where we require the controller that exports skills crud functions
const skillsCtrl = require('../controllers/skills');

//All actual paths start with "/skills" aka the paths are "prefixed" with /skills.

// get skills..
// this is our index route
router.get('/', skillsCtrl.index);

module.exports = router;
