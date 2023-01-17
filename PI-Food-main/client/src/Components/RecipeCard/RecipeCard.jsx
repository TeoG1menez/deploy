import React from 'react'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { searchId } from '../../redux/Actions/actions'
import './recipeCard.css'

const RecipeCard = ({id, name, healthScore, img, plato, dietas, resumen, pasos}) => {
const dispatch = useDispatch();
async function handleID(id){
  await dispatch(searchId(id))
}
  return (
   <ul>

     
       <Link className='linnk' onClick={()=>handleID(id)} to={'/RecipeDetail/'+id} >
          <div className='Receta' >
          <img src= {img} alt="imagen de recetas" />
          <p>{name}</p>
          
          <p>HealtScore: {healthScore}</p>
     </div></Link> 
     
      

   </ul>
  )
}

export default RecipeCard
