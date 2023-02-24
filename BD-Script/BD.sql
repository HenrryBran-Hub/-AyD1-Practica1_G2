CREATE DATABASE practica_1_ayd1_g2;
USE practica_1_ayd1_g2; 

#-------------------------------------------------------------------------
#CREAMOS LA TABLA DE Contacto
#-------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS Contacto (
	Id INT AUTO_INCREMENT,
    Nombres VARCHAR(100) NOT NULL,
    Apellidos VARCHAR(100) NOT NULL,    
    Telefono INT NOT NULL,
    Correo VARCHAR(100) NOT NULL,
    Favorito BOOLEAN NOT NULL,
    Eliminar BOOLEAN NOT NULL,
    PRIMARY KEY (Id)
)ENGINE=INNODB;

#-------------------------------------------------------------------------
#LA TABLA ESTA COMPUESTA POR
#Id -> Es un identificador de la la persona y es auto incremental 
#Nombres -> Es un campo para el nombre de la persona
#Apellidos -> Es un campo para los apellidos de la persona
#Telefono -> Es un campo para el telefono de la persona 
#Correo -> Es un campo para el correo de la personan
#Favorito -> Es para la funcion de favorito si esta en 0 no esta si esta en 1 si esta en favoritos
# 			 este lo cambiamos en las funciones de favorito
#Eliminar -> Es para la funcion de eliminar si esta en 0 no esta si esta en 1 si esta eliminado
# 			 este lo cambiamos en las funciones de eliminar contacto y servira para la funcion especial
#-------------------------------------------------------------------------