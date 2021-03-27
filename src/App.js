import "./App.css";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Login from './components/Login/Login';
import Container from "./components/Container";
import ProtectedRoute from './components/ProtectedRoute';
function App() {
 
  return (
    <BrowserRouter>
     <div className="App">
     <Switch>
      
       <Route exact path="/" component={Login} />
       <ProtectedRoute component={Container} />
    
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
