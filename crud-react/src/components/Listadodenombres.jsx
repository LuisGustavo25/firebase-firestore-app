import React,{useState} from 'react';
import uniqid from 'uniqid';

const Listadodenombres = () =>{
    const [ nombre , setNombre ] = useState('');
    const [ listaNombres, setListaNombres ] = useState([]);
    const [ modoEdicion , setModoEdicion ] = useState(false);
    const [ id , setId ] = useState('');
    const [ error , setError ] = useState(null);
    const addNombre = (e) =>{
        e.preventDefault();
        if(!nombre.trim()){
            setError("¡Ingrese un Nombre!")
            return
        }
        const nuevoNombre = {
            id: uniqid(),
            nombreAgregado:nombre
        }
        setListaNombres([...listaNombres,nuevoNombre]);
        setNombre('');
        setError(null);
    }
    const deleteNombre = (id)=>{
        const borradoNombre = listaNombres.filter( item => item.id !== id )
            setListaNombres(borradoNombre);
    }
    const editar = (item) =>{
        setModoEdicion(true);
        setNombre(item.nombreAgregado);
        setId(item.id);
    }
    const editarNombre = (e) =>{
        e.preventDefault();
        const nuevoArray = listaNombres
            .map( item => item.id === id ? { id:id , nombreAgregado:nombre } : item )
        setListaNombres(nuevoArray);
        setModoEdicion(false);
        setNombre('');
    }
    return(
        <div className="container">
            <h1>CRUD</h1>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listaNombres.map(item=>
                                <li className="list-group-item" key={item.id}>
                                  {item.nombreAgregado}       
                                  <button 
                                    className="btn btn-outline-danger float-sm-end"
                                    onClick={()=>{deleteNombre(item.id)}}>
                                        BORRAR  
                                  </button>
                                  <button 
                                    className="btn btn-outline-info float-sm-end mb-3"
                                    onClick={()=>{editar(item)}}>
                                        EDITAR  
                                  </button>
                                </li>
                            )    
                        }
                    </ul>
                </div>
                
                <div className="col">
                    <h2>Añadir nombres</h2>
                    <form 
                        onSubmit={!modoEdicion? addNombre : editarNombre}
                        className="form-group mb-3">
                            <input 
                                onChange={(e)=>{setNombre(e.target.value)}}
                                className="form-control mb-3" type="text"  
                                placeholder="Ingresa el nombre"                               
                                value={nombre}
                            />
                            <input 
                                type="submit"
                                className="btn btn-info btn-block"
                                value={!modoEdicion? 'Agregar Nombre' : 'Editar Nombre'} />
                    </form>
                    {
                        error != null ?
                        (
                            <div className="alert alert-danger">
                                error
                            </div>
                        ):(
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Listadodenombres;