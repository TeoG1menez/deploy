import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {changeOrder} from '../../redux/Actions/actions'
import './Orden.css'


const Orden = () => {
  const recipeOrder      = useSelector(state => state.recipeOrder)
  const dispatch = useDispatch()
  function handleOrderChange(e) {

    if (recipeOrder.order === [e.target.name][0]) {
      if (recipeOrder.dir === 'up') {
        return  dispatch(changeOrder({order: [e.target.name][0],
          dir:"down"
          }))
      }
    }
    return  dispatch(changeOrder({order: [e.target.name][0],
      dir:"up"
      }))

  }
  console.log('order' + recipeOrder.order)
  return (
    <div>
      <div className="order">
        <p>Order by: <input className = 'avgbutton' onClick={(e)=>handleOrderChange(e)}  value={"HealthScore"+ 
       (recipeOrder.order==="healthScore"?(recipeOrder.dir==='up'?
       ' ↑':recipeOrder.dir==='down'?' ↓':'' ):'')} 
       id='score' type = 'button' name='healthScore'></input>
        Or by: <input className = 'avgbutton2'  onClick={(e)=>handleOrderChange(e)}  value={"Name"+ 
       (recipeOrder.order==="name"?(recipeOrder.dir==='up'?
       ' ↑':recipeOrder.dir==='down'?' ↓':'' ):'')} 
        id='title' type = 'button' name='name'></input></p>
      
    </div>
    </div>
  )
}

export default Orden
