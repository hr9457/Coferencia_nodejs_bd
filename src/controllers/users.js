const conn = require('../database/conexion.js');

// logica de programacion 
const mensaje = async (req,res) => {
    res.send('<h1>Registro de usuario</h1>');
};




// consulta para ver usuarios
const viewUsers = async (req, res) => {
    conn.query('select * from usuario;',
        function(err, result, fields){
            res.status(200).json(result);
        }
    );    
};



// exportacoin de funciones
module.exports = {
    mensaje,
    viewUsers
};