import './App.css';
import Landing from './Components/Landing/Landing';
import Home from './Components/Home/Home'
import RecipeDetail from './Components/RecipeDetail/RecipeDetail'
import CreateRecipe from './Components/CreateRecipe/CreateRecipe'
import Nav from './Components/Nav/Nav'
import {BrowserRouter, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/Store/Store'
function App() {
  return (
  <Provider store={store}>  
    <BrowserRouter>
      <div>
        
        <Route exact path="/" component={Landing}/>
        <Route path='/Home' component={Home}/>
        <Route path='/CreateRecipe' component={CreateRecipe}/>
        <Route path='/RecipeDetail' component={RecipeDetail}/>
      </div>
     </BrowserRouter>
  </Provider>
  
  );
}

export default App;
