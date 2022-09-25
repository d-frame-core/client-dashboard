//Importing the Required Libraries and the Components
import { Input } from "@material-ui/core";
import React, {useContext, useEffect, useState} from "react";
import { Container,Row,Col } from "react-bootstrap";
import { UserContext } from '../../../context/UserContext';
import { BiEditAlt } from 'react-icons/bi';
import axios from "axios";
import "./profileStyle.css";

//Creating a Object as ProfileContent
const ProfileContent = () => {
    const { email,address } = useContext(UserContext);
    const [isDisabled, setIsDisabled] = useState(true);
    const [buttonText,setButtonText]=useState("Edit")
    const [companyInfo, setCompanyInfo] = useState({
        company_name: "",
        company_address1: "",
        company_address2: "",
        company_type:"",
        phone_number: "",
      });
    //Creating a handleDisable function
    const handleDisable = () => {
        if(isDisabled){
            setButtonText("Save")
        }
        else{
            setButtonText("Edit")
        }
        axios
            .patch(`http://54.167.69.158:4000/profile/${address}`,{
                company_name:companyInfo.company_name,
                company_type:companyInfo.company_type,
                company_address1:companyInfo.company_address1,
                company_address2:companyInfo.company_address2,
                phone_number:companyInfo.phone_number,
            })
            .then((response)=>console.log(response));
        setIsDisabled(!isDisabled)
        
      };

      //Creating a handleChange function to handle the form submission
      const handleChange = (event) => {
        setCompanyInfo({ ...companyInfo, [event.target.name]: event.target.value });
        console.log(companyInfo)
      };
      

      useEffect(() => {
        axios({
            method: 'get',
            url: `http://54.167.69.158:4000/profile/${address}`,
          })
            .then((response)=> {
                const data=response.data[0];
                setCompanyInfo({company_name:data.company_name,company_type:data.company_type,company_address1:data.company_address1,company_address2:data.company_address2,phone_number:data.phone_number});
              console.log(companyInfo)
            })
            .catch((err)=>console.log(err));
      },[]);
    
  return (
    //Container is used to create the main container that surrounds the whole page
    <Container fluid style={{background:"#CCCDCF",height:"80vh",padding:"5vh"}}>
        <div style={{marginTop:"-20px",marginBottom:"15px",display:"flex",flexDirection:"row-reverse"}}>
            <button className="button" onClick={handleDisable}><strong><BiEditAlt/></strong> {buttonText}</button>
        </div>
        {/*creating the Rows and columns*/}
        <div className="profilebox">
            <Row className="profilefield">
                <Col xs={4} className="profiletexts" >
                    Company Name :
                </Col>
                <Col xs={8}>
                    <Input className="profileinputs" type="text" name="company_name" value={companyInfo.company_name} disabled={isDisabled} onChange={handleChange}/>
                </Col>
            </Row>
            <Row className="profilefield">
                <Col xs={4} className="profiletexts">
                    Company Type :
                </Col>
                <Col xs={8}>
                    <Input disabled={isDisabled} type="text" name="company_type" value={companyInfo.company_type} className="profileinputs" onChange={handleChange}/>
                </Col>
            </Row>
            <Row className="profilefield">
                <Col xs={4} className="profiletexts">
                    Phone Number :
                </Col>
                <Col xs={8}>
                    <Input disabled={isDisabled} type="number" name="phone_number" value={companyInfo.phone_number} className="profileinputs" onChange={handleChange} />
                </Col>
            </Row>
            <Row className="profilefield">
                <Col xs={4} className="profiletexts">
                    Company Email :
                </Col>
                <Col xs={8}>
                    <Input disabled="true" value={email} className="profileinputs"/>
                </Col>
            </Row>
            <Row className="profilefield">
                <Col xs={4} className="profiletexts">
                    Company Address 1:
                </Col>
                <Col xs={8}>
                    <Input disabled={isDisabled} type="text" name="company_address1" value={companyInfo.company_address1} className="profileinputs" onChange={handleChange} />
                </Col>
            </Row>
            <Row className="profilefield">
                <Col xs={4} className="profiletexts">
                    Company Address 2:
                </Col>
                <Col xs={8}>
                    <Input disabled={isDisabled} type="text" name="company_address2" value={companyInfo.company_address2} className="profileinputs" onChange={handleChange} />
                </Col>
            </Row>
            <Row className="profilefield">
                <Col xs={4} className="profiletexts">
                    Wallet Address :
                </Col>
                <Col xs={8}>
                    <Input disabled="true" value={address} className="profileinputs"/>
                </Col>
            </Row>
        </div> 
    </Container>
  );
};
//Exporting the ProfileContent Component
export default ProfileContent;
