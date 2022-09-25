//Importing the Required Libraries and the Components
import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

//Craeting a Object as PrivateRoute
const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isLoggedIn } = useContext(UserContext);
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/" />
        
      }
    />
  );
};
//Exporting the PrivateRoute Component
export default PrivateRoute;
