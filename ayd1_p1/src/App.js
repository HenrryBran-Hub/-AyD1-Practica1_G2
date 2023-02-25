import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import Userlist from './Components/Userlist';
import Form from './Components/Form';
import Favlist from './Components/Favlist';
import Dellist from './Components/Dellist';
import Search from './Components/Search';

function App() {

  const [user,setUser] = useState({
    Nombres:'',
    Apellidos:'',
    Telefono:'',
    Correo:''
  })

  const [listUpdated, setlistUpdated] = useState(false)

  const [users, setUsers] = useState([])

  useEffect(() => {
    const getUsers = () => {
      fetch('http://localhost:9000/getContactos')
      .then(res => res.json())
      .then(res => setUsers(res))
    }
    getUsers()
    setlistUpdated(false)
    setlistUpdatedFav(false)
    setlistUpdatedDel(false)
  },[listUpdated])

  const [userFav,setUserFav] = useState({
    Nombres:'',
    Apellidos:'',
    Telefono:'',
    Correo:''
  })

  const [listUpdatedFav, setlistUpdatedFav] = useState(false)

  const [usersFav, setUsersFav] = useState([])

  useEffect(() => {
    const getUsersFav = () => {
      fetch('http://localhost:9000/getContactosfavoritos')
      .then(res => res.json())
      .then(res => setUsersFav(res))
    }
    getUsersFav()
    setlistUpdatedFav(false)
  },[listUpdatedFav])

  const [userDel,setUserDel] = useState({
    Nombres:'',
    Apellidos:'',
    Telefono:'',
    Correo:''
  })

  const [listUpdatedDel, setlistUpdatedDel] = useState(false)

  const [usersDel, setUsersDel] = useState([])

  useEffect(() => {
    const getUsersDel = () => {
      fetch('http://localhost:9000/getContactosPapelera')
      .then(res => res.json())
      .then(res => setUsersDel(res))
    }
    getUsersDel()    
    setlistUpdatedDel(false)
    setlistUpdated(false)
  },[listUpdatedDel])


  const [userSearch, setUserSearch] = useState([])

  return (
    <Fragment>
      <Navbar brand ='Agenda ap -> Editar | Eliminar | Agregar'></Navbar>
        <div className='container'>
          <div className='row'>
            <div className='col-5'>
              <h2 style={{textAlign:'center'}}>Ingreso de Contactos</h2>
              <Form user={user} setUser={setUser}/>
            </div>
            <div className='col-7'>
              <h2 style={{textAlign:'center'}}>Lista de Contactos</h2>
              <Userlist user={user} users={users} setlistUpdated={setlistUpdated} setlistUpdatedFav={setlistUpdatedFav} setlistUpdatedDel={setlistUpdatedDel}/>
            </div>            
          </div>
      </div>
      <Navbar brand =' Agenda app -> Buscador'></Navbar>
        <div className='container'>
          <div className='row'>
            <div className='col-7'>
              <h2 style={{textAlign:'center'}}>Lista de Buscador</h2>
              <Search />
            </div>
          </div>
      </div>
      <Navbar brand ='Agenda app -> Favoritos'></Navbar>
        <div className='container'>
          <div className='row'>
            <div className='col-7'>
              <h2 style={{textAlign:'center'}}>Lista de Favoritos</h2>
              <Favlist userFav={userFav} usersFav={usersFav} setlistUpdatedFav={setlistUpdatedFav}/>
            </div>
          </div>
      </div>
      <Navbar brand ='Agenda app -> Funcion especial Papelera'></Navbar>
        <div className='container'>
          <div className='row'>
            <div className='col-7'>
              <h2 style={{textAlign:'center'}}>Lista de Contactos Eliminados</h2>
              <Dellist userDel={userDel} usersDel={usersDel} setlistUpdatedDel={setlistUpdatedDel} setlistUpdated={setlistUpdated}/>
            </div>
          </div>
      </div>
    </Fragment>
  );
}

export default App;
