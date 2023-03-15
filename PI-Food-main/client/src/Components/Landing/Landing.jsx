import React from 'react'
import {Link} from 'react-router-dom'
import './Landing.css'
const Landing = () => {
  return (
    // <div className='Landing'>
    //   <h1>BIENVENIDO</h1>
    //   <p>Aqui encontraras las mejores recetas</p>
    //   <Link to={
    //     '/Home'
    //   } className='titulo'><p>VER RECETAS</p></Link>
    //   <img src="" alt="" />
    // </div>
    <div className='Landing'>

        <div className='Textos'>
          <div className='Titulo'>  WELCOME PLAYER
              <div className='Subtitulo'>Here you will find the best VideoGames
               <div>
                  <a href='/Home' class='Boton'>SEE GAMES</a>
               </div>
                   
             </div>
          </div>   
        </div>

        <div className='Imagen'>
          
        </div>
    </div>
  )
}

export default Landing

