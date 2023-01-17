
//traemos axios y las constantes
import {SET_RECIPE,POST_RECIPE, RECIPE_SEARCH,CHANGE_ORDER, GET_RECIPES, GET_RECIPE_DETAIL_BY_ID, GET_DIETS, GET_STATE_ID, CHANGE_PAGE} from '../Constant/Constantes';

export const getAllRecipes = (name) => {
    return function(dispatch){
        return fetch('http://localhost:3001/recipes?name='+name)
        .then((response)=> response.json())
        .then((data)=> dispatch({type: GET_RECIPES, payload: data}))
    }
}

export const getRecipeDetail = (id) => {
    return function(dispatch){
        fetch(`http://localhost:3001/recipes/${id}`)
        .then((response)=> response.json())
        .then((data)=> dispatch({type: GET_RECIPE_DETAIL_BY_ID, payload: data}))
    }
}

export const ActualizaFiltros=(payload)=> {
    return {
        type: RECIPE_SEARCH,
        payload: payload
    }
}
export const getDiet = () => {
    return function(dispatch){
        fetch('http://localhost:3001/diets')
        .then((response)=>response.json())
        .then((data)=> dispatch({type: GET_DIETS, payload: data}))
    }
}

export function searchId(payload) {
    return {
        type: GET_STATE_ID,
        payload: payload
    }
}

export function changePage(payload) {
    return { type: CHANGE_PAGE, payload };
  }

  export function changeOrder(payload) {
    return { type:CHANGE_ORDER, payload };
  }

  export function updateFilter(payload) {
    return { type: RECIPE_SEARCH, payload };
  }
   
  export function setRecipe(payload){
    return {type: SET_RECIPE, payload}
  }
  export function postRecipe(recipe){
    return function (dispatch){
        return fetch ('http://localhost:3001/recipes',
        {method: 'post',
         headers:{'Accept': '*/*',
        'Content-Type': 'application/json'},
            body: JSON.stringify(recipe)})
        .then(res => res.json())
        .then(()=>{
        dispatch({type: POST_RECIPE, payload: {
        name: '',
        resumen: '',
        Steps: '',
        HealtScore:'',
        img:'',
        diets:[]
        }})
    })
    }
  } 