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
          <div className='Titulo'>  WELCOME CHEF
              <div className='Subtitulo'>Here you will find the best recipes
               <div>
                  <a href='/Home' class='Boton'>SEE RECIPES</a>
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

