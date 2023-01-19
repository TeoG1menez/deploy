import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {getAllRecipes} from '../../redux/Actions/actions'
import RecipeCard from '../RecipeCard/RecipeCard'
import { useDispatch, useSelector} from 'react-redux';
import Paginado from '../Paginado/Paginado'
import Orden from '../Ordenar/Orden'
import './Home.css'
import Loader from '../Loader/Loader';
import Nav from '../Nav/Nav';
const Home = () => {
 
  const dispatch = useDispatch();
 
 
  const Recetas = useSelector((state)=> state.recipes) //
  //PAGINADO
  var recipes2 = Recetas
  const currentPage  = useSelector(state => state.currentPage)
  const itemsPerPage = useSelector(state => state.itemsPerPage)
  const recipeOrder  = useSelector(state => state.recipeOrder)
  const recipeFilter = useSelector(state => state.recipeSearch)
  const indexLastRecipe = currentPage * itemsPerPage
  const indexFirstRecipe = indexLastRecipe - itemsPerPage
  const RecetaActual = recipes2.length ? recipes2.slice(indexFirstRecipe, indexLastRecipe) : []
  // const Page = (pageNumber) => {setCurrentPage(pageNumber)}
   
  
  if (recipeOrder.order) {
    let aux = 1 
    if (recipeOrder.dir==='down') aux = -1
    recipes2 = recipes2.sort(function (a, b) {
      if (a[recipeOrder.order] > b[recipeOrder.order]) {
        return 1*aux;
      }
      if (a[recipeOrder.order] < b[recipeOrder.order]) {
        return -1*aux;
      }
        // a must be equal to b
      return 0;
    });
  }
 
  useEffect(()=>{
    dispatch(getAllRecipes(recipeFilter));
  }, [recipeFilter, dispatch]);
 
  
 
  return (
    <div>
      <div><Nav/></div>
      
      <div className='Cartas'>{RecetaActual.length > 1 ? RecetaActual.map((receta) => 
       {return  (
        
       <RecipeCard key={receta.idApi? receta.idApi : receta.id} 
                    name={receta.name} 
                    id = {receta.idApi? receta.idApi : receta.id}
                    healthScore = {receta.healthScore}
                    img = {receta.img}
                    resumen = {receta.resumen}
                    pasos = {receta.pasoAPaso? receta.pasoAPaso.map(e=>e) : undefined}
                    dietas = {receta.dieta? receta.dieta.map(e=>e) : undefined}
                    plato = {receta.tipoDePlato? receta.tipoDePlato.map(e=>e) : undefined}
                    />
                    )
                    } 
                  ) : <Loader/> }
                  
      </div>
       
       
        
      
     <div className='footer'>
      <Paginado recetas={recipes2}/>
     </div>
    
    </div>
    
  )
}


export default Home;
