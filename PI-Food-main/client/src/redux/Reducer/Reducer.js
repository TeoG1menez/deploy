import { RECIPE_SEARCH, CHANGE_ORDER, GET_DIETS, GET_RECIPES, GET_RECIPE_DETAIL_BY_ID, GET_STATE_ID, CHANGE_PAGE } from "../Constant/Constantes";

const initialState = {
recipes: [],
recipeDetail: [],
diets: [],
currentPage:1,
itemsPerPage: 9,
recipeOrder: {order:'',dir:''},
recipeSearch: '',
recipeForm: ''
}

const Reducer = (state = initialState, action) => {
switch (action.type){
    case GET_RECIPES:
        return {...state,
        recipes: action.payload};
    
    
    case GET_RECIPE_DETAIL_BY_ID:
    return {...state,
        recipeDetail: action.payload};

    case GET_DIETS:
        return {
            ...state,
            diets: action.payload
        }
    case GET_STATE_ID:
        const filtId = state.recipes
        const Idfind = filtId.find((recipe) => {
            if(typeof action.payload === 'number'){
                if (recipe.idApi === action.payload) return recipe
            } else {
                if (recipe.id === action.payload) return recipe
            }
            })
            return{
                ...state,
                recipeDetail: Idfind
            }  
    case CHANGE_PAGE: 
            return {
                ...state,
                currentPage: action.payload
            }
    case CHANGE_ORDER: return {
        ...state,
        recipeOrder: action.payload
    }

    case RECIPE_SEARCH: return {
        ...state,
        recipeSearch: action.payload
    }
    default: return {...state}
}
};

export default Reducer