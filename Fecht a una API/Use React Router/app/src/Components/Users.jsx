import React, { useState , useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Users = () =>{
    const [usuarios,setUsuarios] = useState([]);
    const getUsers = async()=>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        const users = await response.data;
        setUsuarios(users);
    }
    useEffect(()=>{
        getUsers();
    },[]);
    return(
        <div>
            <h2>List:</h2>
            {
                usuarios.map((item)=>(
                    <div>
                        <Link to={`/user/${item.id}`} key={item.id}>{item.name}</Link>
                    </div>
                ))
            }

        </div>
    )
}

export default Users;