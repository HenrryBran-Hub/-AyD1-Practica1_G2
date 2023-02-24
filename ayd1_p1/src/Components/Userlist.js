import React from "react";

const Userlist = ({user, users, setlistUpdated, setlistUpdatedFav, setlistUpdatedDel}) =>{

    let{Nombres,Apellidos,Telefono,Correo} = user

    const handleUpdate = id => {
        Telefono = parseInt(Telefono,10)
        //validacion de los datos
        if (Nombres === '' || Apellidos === '' || Telefono <= 0){
            alert('Todos los campos son obligatorios y/o el telefono debe ser correcto')
            return
        }

        // Definimos la expresion regular
        var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

        // Validamos el correo
        if( !validEmail.test(Correo) ){
            alert('El correo no es valido');
            return
        }
        //consulta
        const requestInit = {
            method:'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }
        fetch('http://localhost:9000/updateContacto/' + id,requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        setlistUpdated(true)
        setlistUpdatedFav(true)
        setlistUpdatedDel(true)
    }

    const handleDelete = Id => {

        //consulta
        const requestInit = {
            method:'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }
        fetch('http://localhost:9000/deleteContacto/' + Id,requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        setlistUpdated(true)
        setlistUpdatedFav(true)
        setlistUpdatedDel(true)
    }

    const handleFavoritos = Id => {

        //consulta
        const requestInit = {
            method:'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }
        fetch('http://localhost:9000/favoritoContacto/' + Id,requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        setlistUpdated(true)
        setlistUpdatedFav(true)
        setlistUpdatedDel(true)
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                    <th>Correo</th>
                </tr>
            </thead>
            <tbody>
                {users.map(users => (
                    <tr key = {users.Id}>
                        <td>{users.Id}</td>
                        <td>{users.Nombres}</td>
                        <td>{users.Apellidos}</td>
                        <td>{users.Telefono}</td>
                        <td>{users.Correo}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={ () => handleDelete(users.Id)} className="btn btn-danger">Eliminar</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={ () => handleUpdate(users.Id)} className="btn btn-info">Editar</button>
                            </div>
                            <div className="mb-3">
                                <button onClick={ () => handleFavoritos(users.Id)} className="btn btn-success">Favoritos</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Userlist;