import './App.css';
import { Link, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Home from './Pages/Home.';

function App() {

  return (
    <div className="App">
      <div>
        <Link to="/">Home</Link>
        <Link to="/login">Logout</Link>
      </div>
      <Switch>
        <Route path="/" component={Home} exact></Route>
        <Route path="/login" component={Login} exact></Route>
      </Switch>
    </div>
  );
}

export default App;
