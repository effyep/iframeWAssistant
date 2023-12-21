const { Router } = require('express');

//obtengo funcion desde el controlador
const { getUsers, postUsers } = require('../controllers/user-controller');

const router = Router();


router.get('/', getUsers);

router.post('/', postUsers);


module.exports =  router;