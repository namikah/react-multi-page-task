import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import './App.css';
import Navi from './components/layouts/navbar/Navi';
import { ROUTES_PATH } from './Constants/consts';
import Home from './pages/home/Home';
import Products from './pages/products/Products';

function App() {
  return (
    <div className="App">
       <Navi />
        <Switch>
          <Route path={ROUTES_PATH.HOME} exact component={Home}>
          </Route>  
          <Route path={ROUTES_PATH.PRODUCTS} exact component={Products}>
          </Route>
        </Switch>
    </div>
  );
}

export default App;
