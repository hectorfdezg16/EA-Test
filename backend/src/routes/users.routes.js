const { Router } = require('express') 

const router = Router()

const usersCtrl = require('../controllers/users.controller.js')

router.get('/', usersCtrl.getAllUsers);
router.post('/', usersCtrl.createUser);
router.delete('/:id', usersCtrl.deleteUser);
router.put('/:id', usersCtrl.updateUser);
router.get('/:id', usersCtrl.getUser);

//we will export
module.exports = router;