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

//eliminar un contacto
router.put('/deleteContacto/:id', (req,res) =>{
    let contacto = "UPDATE Contacto SET Eliminar = true"
    let consulta = contacto + ' WHERE Id = ' + req.params.id;
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});

//editar un contacto
router.put('/updateContacto/:id', (req,res) =>{
    let contacto = "UPDATE Contacto SET Nombres=\'" + req.body.Nombres + "\',Apellidos=\'" + req.body.Apellidos + "\',Telefono=\'" + req.body.Telefono + "\',Correo=\'" + req.body.Correo + "\'"
    let consulta = contacto + ' WHERE Id = ' + req.params.id;
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});

//Buscar contacto
router.get('/getContactosBusqueda/:Telefono',(req, res) => {
    let contacto = "SELECT *FROM Contacto WHERE Telefono = "
    let consulta = contacto + req.params.Telefono + ' AND Eliminar = False '
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});

//mostrar favoritos
router.get('/getContactosfavoritos',(req, res) => {
    let consulta = `SELECT *
    FROM Contacto WHERE Favorito = true`;
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});

//agregar a favoritos un contacto
router.put('/favoritoContacto/:id', (req,res) =>{
    let contacto = "UPDATE Contacto SET Favorito = true"
    let consulta = contacto + ' WHERE Id = ' + req.params.id;
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});

//quitar de favoritos a un contacto
router.put('/quitarfavoritoContacto/:id', (req,res) =>{
    let contacto = "UPDATE Contacto SET Favorito = false"
    let consulta = contacto + ' WHERE Id = ' + req.params.id;
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});

//mostrar papelera
router.get('/getContactosPapelera',(req, res) => {
    let consulta = `SELECT * FROM Contacto WHERE Eliminar = 1`;
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});

//recuperar el contacto
router.put('/Recuperar/:id', (req,res) =>{
    let contacto = "UPDATE Contacto SET Eliminar = false"
    let consulta = contacto + ' WHERE Id = ' + req.params.id;
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});

module.exports = router;