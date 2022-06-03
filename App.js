import React, {useEffect} from 'react';
// import ReactGA from 'react-ga';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PrivateRoute from './Guard/auth';
import MapComponent from './Components/Map/MapComponent';
import Overview from './Pages/Admin/Overviews'
import Station from './Pages/Admin/Station'
import Login from './Pages/Login'

function App() {

    // useEffect(() =>{
    //     ReactGA.initialize('G-0E095421TT')
    
    //     //to report page view
    //     ReactGA.pageview('/');
    // }, [])

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