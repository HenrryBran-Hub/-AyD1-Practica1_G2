import React from "react";

const Favlist = ({userFav, usersFav, setlistUpdatedFav}) =>{

    const handleFavoritos = Id => {
        if (window.confirm("¿Está seguro que desea hacer esto?")) {
            // Hacer algo si el usuario acepta
            //consulta
            const requestInit = {
                method:'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(userFav)
            }
            fetch('http://localhost:9000/quitarfavoritoContacto/' + Id,requestInit)
            .then(res => res.json())
            .then(res => console.log(res))

            setlistUpdatedFav(true)
          } else {
            // Hacer algo si el usuario cancela
            alert('Pos no')
          }        
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
                {usersFav.map(usersFav => (
                    <tr key = {usersFav.Id}>
                        <td>{usersFav.Id}</td>
                        <td>{usersFav.Nombres}</td>
                        <td>{usersFav.Apellidos}</td>
                        <td>{usersFav.Telefono}</td>
                        <td>{usersFav.Correo}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={ () => handleFavoritos(usersFav.Id)} className="btn btn-danger">Eliminar de Favoritos</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Favlist;