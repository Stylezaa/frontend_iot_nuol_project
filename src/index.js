import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../src/assets/font/NotoSansLao-Medium.ttf'
import PrivateRoute from './Guard/auth';
import './index.css';
import MapComponent from './Components/Map/MapComponent'
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
        <MapComponent />
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
