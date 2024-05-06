import React from 'react'
function Livro({titulo, autor, ano, sinopse, sinopse2}){
    return(
        <section className="Livro">
            <img src="sherlock-holmes.jpg" alt="imagem" />
            <div className="Informacao"> 
            <h1>{titulo}</h1>
            <p>{autor}</p>
            <p>{ano}</p>
            <p>{sinopse}</p>
            <p>{sinopse2}</p>
            </div>
        </section>
    )
}
export default Livro