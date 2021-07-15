import React, { useState , useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const User = () =>{
    const [usuario,setUsuario] = useState([]);
    const {id} = useParams();
    const getUser = async()=>{
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const user = await response.data;
        setUsuario(user);
    }
    useEffect(()=>{
        getUser();
    });
    return(
        <div>
            <h4>User ({id})</h4>
            <div>
                <p>Name: {usuario.name}</p> 
                <p>e-mail: {usuario.email}</p>
                <small>Phone: {usuario.phone}</small>
            </div>
        </div>
    )
}

export default User;