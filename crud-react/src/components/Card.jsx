import React from 'react';

const Card = (proops) => {
    const {imagen,titulo,texto} = proops
    return(
        <div className="card" >
            <img 
                src={imagen}
                alt="Imagen"
                className="card-img-top img-thumbnail" 
            />
            <div className="card-body">
                <h2 className="card-title">{titulo}</h2>
                <p className="card-text">{texto}</p>
                <a href="#" className="btn btn-primary">ver mas</a>
            </div>
        </div>
    )
}

export default Card;