const express = require('express');
const router = express.Router();

const users = require('../controllers/users');






router.get('/registro', users.mensaje);
router.get('/usuarios', users.viewUsers);



// router.get('/', (req, res) => {
//     res.send('<h1>Hello World!</h1>');
// });

// router.get('/registro' ,(req,res) =>{
//     res.send('<h1>Registro de usuario</h1>');
// });

module.exports = router;