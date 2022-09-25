//Importing the Required Libraries and the Components
import React, {useContext, useEffect, useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import { UserContext } from '../../../context/UserContext';
import "./WalletIndex.css";
import axios from "axios";
import { Link } from "react-router-dom";

//Craeting a Object as WalletIndex
const WalletIndex = () => {
  const { address } = useContext(UserContext);
  const [wallet,setWallet] = useState(0)

  useEffect(() => {
    axios({
        method: 'get',
        url: `http://54.167.69.158:4000/profile/${address}`,
      })
        .then((response)=> {
            const data=response.data[0];
            setWallet(data.balance)
        }).catch((err)=>console.log(err));
  },[]);
  return (
    //Creating a Container Component
    <Container fluid style={{background:"#CCCDCF",height:"80vh",padding:"5vh"}}>
        <Container>
            <Row>
              <Col>
              {/*Displaying and alligning the Wallet Components*/}
              <div className="dft">
                  <div style={{textAlign:"center",paddingTop:"8%",fontSize:"23px"}}>
                    <strong>Wallet Balance</strong>
                  </div>
                  <div style={{textAlign:"center",paddingTop:"4%",fontSize:"20px",display:"flex",paddingBottom:"20px"}}>
                    <div style={{width:"60%"}}>
                      DFT :
                    </div>
                    <div style={{width:"10%",color:"#15d639"}}>
                      {wallet}
                    </div>
                  </div>
                </div>

                <div className="address"> 
                  <div style={{textAlign:"center",paddingTop:"4%",fontSize:"23px"}}>
                    <strong>Your Wallet Address</strong>
                  </div>
                  <div style={{textAlign:"center",paddingTop:"6%",fontSize:"18px",paddingBottom:"20px"}}>
                    {address}
                  </div>
                </div>

              </Col>

              <Col>
                <div className="token">
                  <div style={{textAlign:"center",paddingTop:"5%",fontSize:"23px"}}>
                    <strong>Token Transfers</strong>
                  </div>
                  <div style={{textAlign:"center",paddingTop:"5%",fontSize:"20px"}}>
                      Amount :<br/>
                      <input type="number" min="0"  className="walletinputs" />
                  </div>
                  <div style={{textAlign:"center",paddingTop:"5%",fontSize:"20px"}}>
                      Receipent Wallet Address :<br/>
                      <input type="text"  className="walletinputs" />
                  </div>
                  <div style={{textAlign:"center",paddingTop:"4%",fontSize:"20px",marginBottom:"20px"}}>
                    <button className="button" style={{padding:"10px 40px"}}>Send</button>
                  </div>
                </div>
              </Col>
              </Row>


            <Row>
            <div className="note">
            <Link to="/help" style={{color:"black"}}>
              Terms and Conditions
              </Link>
            </div>
            </Row>
        </Container>
    </Container>
  );
};
//Exporting the WalletIndex Component
export default WalletIndex;
