import React from "react";

const Form = ({user,setUser}) => {

    const handleChange = e => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    let{Nombres,Apellidos,Telefono,Correo} = user

    const handleSubmit = () => {
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
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(user)
        }
        fetch('http://localhost:9000/addContacto',requestInit)
        .then(res => res.json())
        .then(res => console.log(res))

        setUser({
            Nombres:'',
            Apellidos:'',
            Telefono:'',
            Correo:''
        })

    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="Nombres" className="form-label">Nombres</label>
                <input value={Nombres} name="Nombres" onChange={handleChange} type="text" id="Nombres" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Apellidos" className="form-label">Apellidos</label>
                <input value={Apellidos} name="Apellidos" onChange={handleChange} type="text" id="Apellido" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Telefono" className="form-label">Telefono</label>
                <input value={Telefono} name="Telefono" onChange={handleChange} type="number" id="Telefono" className="form-control"/>
            </div>
            <div className="mb-3">
                <label htmlFor="Correo" className="form-label">Correo</label>
                <input value={Correo} name="Correo" onChange={handleChange} type="text" id="Correo" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    );
}

export default Form;