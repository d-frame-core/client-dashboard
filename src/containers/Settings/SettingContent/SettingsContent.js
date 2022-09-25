//Importing the Required Libraries and the Components
import React, {useState,useContext} from "react";
import  "./SettingStyle.css";
// import { ToggleButton } from "@mui/material";
import ToggleButton from 'react-bootstrap/ToggleButton';
import { Container, Row , Col } from "react-bootstrap";
import { UserContext } from '../../../context/UserContext';
import axios from "axios";

//Creating a Object as SettingsContent
const SettingsContent = () => {
    const [checked, setChecked] = useState(false);
    const { address } = useContext(UserContext);
    // const [selected, setSelected] = React.useState(false);
    //Creating the function to delete Previous Ads
    const deletePrevAds=()=>{
        axios.delete(`http://54.167.69.158:4000/campaign/all/${address}`)
        .then((res)=>console.log("deleted"))
        .catch((err)=>console.log("deleted"))
    }

  return (
    //Creating a Container to hold the Components
    <Container fluid style={{background:"#CCCDCF",height:"80vh",padding:"5vh"}}>
        <Row className="eachRow">
            <Col xs={4} className="texts">
                <label>
                Clear Ad History
                </label>    
            </Col>
            <Col xs={8} className="fields">
                <button className="delete" onClick={deletePrevAds}>Clear Previous Campaigns </button>    
            </Col>
        </Row>
        <Row className="eachRow">
            <Col xs={4} className="texts">
                <label>
                Notifications
                </label>    
            </Col>
            <Col xs={8} className="fields">
                <ToggleButton
                        className="mb-2"
                        id="toggle-check"
                        type="checkbox"
                        variant="outline-primary"
                        checked={checked}
                        value="1"
                        onChange={(e) => setChecked(e.currentTarget.checked)}
                    />
                        
            </Col>
        </Row>
    </Container>
  );
};
//Exporting the Object
export default SettingsContent;
