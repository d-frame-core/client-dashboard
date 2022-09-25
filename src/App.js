//Importing the Required Libraries and the Components
import React, { useState, useEffect } from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect,
} from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner';
import { UserContext } from './context/UserContext';
import { checkUser } from './services/magic';
import Authenticate from './components/Authenticate';
import PrivateRoute from './components/PrivateRoute';
import Profile from './containers/Profile/Profile';
import Help from './containers/Help/Help'
import Learn from './containers/LearnMore/Learn'
import Campaigns from './containers/Campaigns/Campaigns';
import Ads from './containers/Ads/Ads'
import Settings from './containers/Settings/Settings'
import Wallet from './containers/Wallet/Wallet'
import Data from './containers/Data/Data'


//Craeting a Object as App
const App = () => {
  const [user, setUser] = useState({ isLoggedIn: false, email: '',address: ''});
  const [loading, setLoading] = useState();
  useEffect(() => {
    const validateUser = async () => {
      setLoading(true);
      try {
        await checkUser(setUser);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    validateUser();
  }, [user.isLoggedIn]);

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: '100vh' }}
      >
        <Spinner animation="border" />
      </div>
    );
  }
  return (
    //Creating the Router Component to direct to the required page.
    <UserContext.Provider value={user}>
      <Router>
      {user.isLoggedIn && <Redirect to={{ pathname: '/dashboard' }} />}
        <Switch>
          <Route exact path="/">
            <Authenticate setStatus={setUser} />
          </Route>
          <PrivateRoute path="/dashboard" component={Profile} />
          <PrivateRoute path="/help" component={Help} />
          <PrivateRoute path="/learn" component={Learn} />
          <PrivateRoute path="/campaigns" component={Campaigns} />
          <PrivateRoute path="/ads" component={Ads} />
          <PrivateRoute path="/settings" component={Settings} />
          <PrivateRoute path="/wallet" component={Wallet} />
          <PrivateRoute path="/datapool" component={Data} />
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
};
//Exporting the App Component
export default App;
