//Importing the Required Libraries and the Components
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { UserContext } from '../context/UserContext';
import { logoutUser } from '../services/magic';

//Craeting a Object as Dashboard
const Dashboard = () => {
  const { email } = useContext(UserContext);
  const history = useHistory();
  //Creating a handleLogout function to handle the logout
  const handleLogOut = async () => {
    try {
      await logoutUser();
      history.replace('/');
    } catch (error) {
      console.error(error);
    }
  };
  return (
    
    <div className="p-2">
      <div className="d-flex justify-content-end">
        {/*Creating the sign out button */}
        <Button variant="primary" onClick={handleLogOut}>
          Sign Out
        </Button>
      </div>
      <h1 className="h1">User: {email}</h1>
      this is from where we get
    </div>
  );
};
//Exporting the Dashboard Component
export default Dashboard;
