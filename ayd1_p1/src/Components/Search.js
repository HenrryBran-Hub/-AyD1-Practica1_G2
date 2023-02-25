import React, {useState, useEffect} from "react";
import Userlist from "./Userlist";

const Search = () => {
    
    //setear los hooks useState
    const [ users, setUsers ] = useState([])
    const [ search, setSearch ] = useState("")

    //funcion para traer los datos de la API
    const URL = 'http://localhost:9000/getContactos'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setUsers(data)
    }

    const searcher = (e) => {
        setSearch(e.target.value)
        console.log(e.target.value)
    }

    let results = []
    if(!search)
    {
        results = users
    }else{
        results = users.filter( (dato) =>
        dato.Nombres.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }
    
    useEffect( () => {
        showData()
    },[])

    return (
        <div>
        <input type="text" value={search} onChange={searcher} placeholder='Buscador' className='form-control'/>
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
                {results.map(users => (
                    <tr key = {users.Id}>
                        <td>{users.Id}</td>
                        <td>{users.Nombres}</td>
                        <td>{users.Apellidos}</td>
                        <td>{users.Telefono}</td>
                        <td>{users.Correo}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default Search;