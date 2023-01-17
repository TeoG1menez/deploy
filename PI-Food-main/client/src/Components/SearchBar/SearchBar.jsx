import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ActualizaFiltros } from '../../redux/Actions/actions'
import './SearchBar.css'
const SearchBar = () => {
    const dispatch = useDispatch();
    const recipeFilter = useSelector(state => state.recipeSearch)
  return (
    <div className='SearchBar'>
      <input className='ElInput'
        type="text"
        placeholder="Search..."
        value={recipeFilter}
        onChange={e => dispatch(ActualizaFiltros(e.target.value))} 
      />
    </div>
  )
}

export default SearchBar
