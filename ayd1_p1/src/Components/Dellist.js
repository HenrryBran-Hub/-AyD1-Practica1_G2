import React from "react";

const Dellist = ({userDel, usersDel, setlistUpdatedDel, setlistUpdated}) =>{

    const handleRecuperacion = Id => {
        if (window.confirm("¿Está seguro que desea hacer esto?")) {
            // Hacer algo si el usuario acepta
            //consulta
            const requestInit = {
                method:'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(userDel)
            }
            fetch('http://localhost:9000/Recuperar/' + Id,requestInit)
            .then(res => res.json())
            .then(res => console.log(res))

            setlistUpdatedDel(true)
            setlistUpdated(true)
          } else {
            // Hacer algo si el usuario cancela
            alert('Se mantiene en la papelera el archivo')
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
                {usersDel.map(usersDel => (
                    <tr key = {usersDel.Id}>
                        <td>{usersDel.Id}</td>
                        <td>{usersDel.Nombres}</td>
                        <td>{usersDel.Apellidos}</td>
                        <td>{usersDel.Telefono}</td>
                        <td>{usersDel.Correo}</td>
                        <td>
                            <div className="mb-3">
                                <button onClick={ () => handleRecuperacion(usersDel.Id)} className="btn btn-warning">Recuperar Conctacto</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Dellist;