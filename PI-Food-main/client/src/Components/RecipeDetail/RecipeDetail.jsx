import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../Nav/Nav'
import './RecipeDetail.css'
const RecipeDetail = () => {
  const detalle = useSelector((state) => state.recipeDetail)
  return (

  <div> <Nav></Nav>
  <div className='RecipeDetail'> 
    <ul className='Ulist'>
      <img src={detalle.img} alt="" />
      <li>Name Of The Recipe: {detalle.name}</li>
      <li>HealtScore: {detalle.healthScore}</li>
      <li>Step By Step: {detalle.pasoAPaso}</li>
      <li>Diet type: {detalle.dieta + ' '}</li>
     </ul>

  </div>
  
      
    </div>
  )
}

export default RecipeDetail

