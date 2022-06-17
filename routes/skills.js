var express = require('express');
var router = express.Router();

//This is where we require the controller that exports skills crud functions
const skillsCtrl = require('../controllers/skills');

//All actual paths start with "/skills" aka the paths are "prefixed" with /skills.

// get skills..
router.get('/', skillsCtrl.index);
//get new skill
router.get('/new', skillsCtrl.new);
//get skills/:id
router.get('/:id', skillsCtrl.show);
//post the new skill
router.post('/', skillsCtrl.create);
// deletes the skill we want
router.delete('/:id', skillsCtrl.delete);


module.exports = router;
