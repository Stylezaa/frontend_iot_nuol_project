import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '../src/assets/font/NotoSansLao-Medium.ttf'
import PrivateRoute from './Guard/auth';
import './index.css';
import MapComponent from './Components/Map/MapComponent';
import Overview from './Pages/Admin/Overviews'
import Station from './Pages/Admin/Station'
import Login from './Pages/Login'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);