import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Guard/auth';
import './index.css';
import MapComponent from './Components/Map/MapComponent'
// import Home from './Pages/Home'
import Map from './Pages/Map'
import Sensor from './Pages/Sensor'
import About from './Pages/About'
import Overview from './Pages/Admin/Overviews'
import SensorDash from './Pages/Admin/Sensor'
import MapDash from './Pages/Admin/Map'
import Station from './Pages/Admin/Station'
import Login from './Pages/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Switch>
      <Route path="/" exact>
        {/* <Home /> */}
        <MapComponent />
      </Route>
      <Route path="/map" exact>
        <Map />
      </Route>
      <Route path="/sensor" exact>
        <Sensor />
      </Route>
      <Route path="/about" exact>
        <About />
      </Route>
      <PrivateRoute path="/dashboard/overview" exact>
        <Overview />
      </PrivateRoute>
      <PrivateRoute path="/dashboard/sensor" exact>
        <SensorDash />
      </PrivateRoute>
      <PrivateRoute path="/dashboard/map" exact>
        <MapDash />
      </PrivateRoute>
      <PrivateRoute path="/dashboard/station" exact>
        <Station />
      </PrivateRoute>
      <Route path="/login" exact>
        <Login />
      </Route>
    </Switch>
  </Router>,
);
