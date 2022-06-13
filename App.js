import React, {useEffect} from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Guard/auth';
import MapComponent from './Components/Map/MapComponent';
import Overview from './Pages/Admin/Overviews'
import Station from './Pages/Admin/Station'
import Login from './Pages/Login'
const TRACKING_ID = "UA-230584004-1"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

function App() {

    useEffect(() =>{
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

  return (
    <>
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
    </>
  );
}

export default App;