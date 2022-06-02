import React, {useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ReactGa from 'react-ga'
import '../src/assets/font/NotoSansLao-Medium.ttf'
import PrivateRoute from './Guard/auth';
import './index.css';
import MapComponent from './Components/Map/MapComponent';
import Overview from './Pages/Admin/Overviews'
import Station from './Pages/Admin/Station'
import Login from './Pages/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  useEffect(() =>{
    ReactGa.initialize('G-EL6NPG0LVM')

    //to report page view
    ReactGa.pageview(window.location.pathname + window.location.search);
  }, [])

  <Router>
    <Switch>
      <Route path="/" exact>
        <MapComponent />
      </Route>
      <PrivateRoute path="/dashboard/overview" exact>
        <Overview />
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