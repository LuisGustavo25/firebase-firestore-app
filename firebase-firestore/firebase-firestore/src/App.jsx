import React,{useState,useEffect} from "react";
import {store} from './firebaseconf';
function App() {
  const[mood,setMood] = useState('');
  const[userId,setUserId] = useState('');
  const[name,setName]=useState('');
  const[phone,setPhone]=useState('');
  const[error,setError]=useState('')
  const[users,setUsers]=useState([]);
  const setUser = async (e)=>{
    e.preventDefault();
    if(!name.trim()){
      setError('Name field is Empty')
    }else if(!phone.trim()){
      setError('Phone field is Empty')
    }
    const user = {
      name:name,
      phone:phone
    }
    try{
      const data = await store.collection('Schedule').add(user);
      console.log(data.data())
      const { docs } = await store.collection('Schedule').get();
      const newArray = docs.map( item => ({ id:item.id , ...item.data() }));
      setUsers(newArray);
    }catch(e){
      console.log(e);
    }
    setName('');
    setPhone('');
  }
  const setUpdate = async (e)=>{
    e.preventDefault();
    if(!name.trim()){
      setError('Name field is Empty')
    }else if(!phone.trim()){
      setError('Phone field is Empty')
    }
    const userUpdate = { 
      name:name , 
      phone:phone
    }
    try{
      await store.collection('Schedule').doc(userId).set(userUpdate);
      const { docs } = await store.collection('Schedule').get();
      const newArray = docs.map( item => ({ id:item.id , ...item.data() }));
      setUsers(newArray);
    }catch(e){
      console.log(e);
    }
    setName('');
    setPhone('');
    setUserId('')
    setMood(false)
  }
  const deleteUser = async (id)=>{
    try{
      await store.collection('Schedule').doc(id).delete();
      const { docs } = await store.collection('Schedule').get();
      const newArray = docs.map( item => ({ id:item.id , ...item.data() }));
      setUsers(newArray);
    }catch(e){
      console.log(e);
    }
  }
  const editUser = async (id)=>{
    try{
      const data = await store.collection('Schedule').doc(id).get();
      const { name , phone } = data.data();
      setName(name);
      setPhone(phone);
      setUserId(id);
      setMood(true)
    }catch(e){
      console.log(e);
    }
  }
  useEffect( ()=>{
    const getUsers = async()=>{
      const { docs } = await store.collection('Schedule').get();
      const newArray = docs.map( item => ({ id:item.id , ...item.data() }));
      setUsers(newArray);
    }
    getUsers();
  },[])
  return (
    <div className="container p-3 mb-2 bg-dark text-white">
      <div className="row">
        <div className="col mt-3">
          <h2>Users</h2>
          <form
            onSubmit={mood ? setUpdate : setUser}
            className="form-group" >
            <input
              value={name}  
              onChange={(e)=>{setName(e.target.value)}}
              className="form-control" 
              placeholder="Introduce el Nombre"
              type="text"
            />
            <input
              value={phone}
              onChange={(e)=>{setPhone(e.target.value)}}
              className="form-control mt-3"
              placeholder="Introduce el Numero"
              type="text"
            />
            {
              mood ? 
              (
                <input
                  className="btn btn-primary btn-block mt-3"
                  type="submit"
                  value="EDIT"
                />
              )
              :
              (
                <input
                  className="btn btn-primary btn-block mt-3"
                  type="submit"
                  value="ADD"
                />
              )
            }
            
          </form>
          {
            error ?
            (
              <div>
                <p>Error</p>
              </div>
            )
            :
            (
              <span></span>
            )
          }
        </div>
        <div className="col mt-3">
          <h2>Schedule</h2>
          <ul className="list-group">
          {
            users.length !== 0 ?
            (
             users.map( item =>(
               <li
                  className="list-group-item" 
                  key={item.id}>{item.name} -- {item.phone}
                  <button
                    onClick={(id)=>{ deleteUser(item.id) }}
                    type="button"
                    className="btn btn-danger btn-sm m-auto float-end">DELETE
                  </button>  
                  <button
                    onClick={(id)=>{ editUser(item.id) }}
                    type="button"
                    className="btn btn-info btn-sm ml-3 float-end">EDIT
                  </button>
                </li>
              ))
              
            )
            :
            (
              <span>There is not any item</span>
            )
          }
          </ul>
        </div>
      </div>
    </div>
  );
}
export default App;