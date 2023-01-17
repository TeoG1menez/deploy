import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {changePage} from '../../redux/Actions/actions'
import './Paginado.css'

function Paginado({ recetas }) {

    const pageNumbers  = []
    const itemsPerPage = useSelector(state => state.itemsPerPage)
    const currentPage = useSelector(state => state.currentPage)
    const dispatch = useDispatch()
    const total = recetas.length;
    for(let i = 1; i<=Math.ceil(total/itemsPerPage); i++){
        pageNumbers.push(i)
    }
    React.useEffect(()=>{
        let len = pageNumbers.length
        if(len<currentPage){
          if(len ===0) len=1;
          dispatch(changePage(len))
        }
      })
    return (
    <div className="Paginado">
    {pageNumbers.map(number=>          
              <input className='button' type="button" key={number} onClick={()=>dispatch(changePage(number))} value={number}>
          </input>)}
    </div>)
    

} 


export default Paginado