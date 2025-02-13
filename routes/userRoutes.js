const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();




router.post('/register', userController.register);
router.post('/login', userController.login);
//METODOS GET
router.get('/all', userController.getUsers);
router.get('/:id', userController.getUser);

//METODO DELETE
router.delete('/delete/:id', userController.deleteUser)


module.exports = router;

