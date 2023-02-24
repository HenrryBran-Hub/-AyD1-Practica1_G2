const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//lista de contactos
router.get('/getContactos',(req, res) => {
    let consulta = `SELECT *
    FROM Contacto WHERE Eliminar = false`;
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});

//agregar un contacto
router.post('/addContacto', (req,res) =>{
    let contacto = "(\'" + req.body.Nombres + "\',\'" + req.body.Apellidos + "\',\'" + req.body.Telefono + "\',\'" + req.body.Correo + "\',false,false)"
    let consulta = `INSERT INTO Contacto
    (Nombres,Apellidos,Telefono,Correo,Favorito,Eliminar)
    VALUES ` + contacto;
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});


module.exports = router;