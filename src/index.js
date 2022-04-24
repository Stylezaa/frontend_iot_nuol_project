import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivateRoute from './Guard/auth';
import './index.css';
import App from './App';
import Overview from './Pages/Admin/Overviews'
import Sensor from './Pages/Admin/Sensor'
import Map from './Pages/Admin/Map'
import Setting from './Pages/Admin/Setting'
import Login from './Pages/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <PrivateRoute path="/overview" exact>
        <Overview />
      </PrivateRoute>
      <PrivateRoute path="/sensor" exact>
        <Sensor />
      </PrivateRoute>
      <PrivateRoute path="/map" exact>
        <Map />
      </PrivateRoute>
      <PrivateRoute path="/setting" exact>
        <Setting />
      </PrivateRoute>
      <Route path="/login" exact>
        <Login />
      </Route>
    </Switch>
  </Router>,
);
