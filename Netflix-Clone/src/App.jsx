import './app.scss';
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register'
import Login from './pages/login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { useContext } from 'react';
import { AuthContext} from './authContext/AuthContext';


const App = () => {

  const {user} = useContext(AuthContext);

  return (
    <Router>
    <Switch>
    
    <Route exact path="/">
      { user ? <Home /> : <Redirect to = "/register" /> }
    </Route>

    <Route path="/register">
      {!user ? <Register/> : <Redirect to = "/" /> }
      <Register />
    </Route>

    <Route path="/login">
      {!user ? <Login/> : <Redirect to = "/" /> }
      <Login />
    </Route>

    {user && (
      <>
    <Route path="/movies">
      <Home type="movie"/>
    </Route>

    <Route path="/series">
      <Home type="series"/>
    </Route>

    <Route path="/watch">
      <Watch/>
    </Route>
    </>
    )}
  </Switch>
  </Router>
  );
};

export default App;