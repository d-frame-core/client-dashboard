//Importing the Required Libraries
import React from "react";
import "./Sidebar.css";
import dFrameLogo from "../../assets/Images/d-frame-logo.png";
import { NavLink, Link } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { MdOutlineCampaign } from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineSetting } from "react-icons/ai";
import { BiHelpCircle } from "react-icons/bi";
import { FaBookReader } from "react-icons/fa";
import { Col, Container, Row } from "react-bootstrap";

//Exporting the Sidebar Component
export const Sidebar = () => {
  return (
      
    <Container fluid className="main">
      {/*Creating the Classname container,logocontainer,itemContainer*/}
      <div className="logoContainer">
        <img src={dFrameLogo} alt="" className="logo" />
        <div className="titleContainer">
          <h3 className="title">D Frame</h3>
        </div>
      </div>

      <div style={{marginTop:"10px"}} > 
            {/*Creating the Navigation link for Dashboard */}
          <NavLink to="/dashboard" activeClassName="selected" >
          <Row className="justify-content-center subselected">
                <Col xs="auto"><span style={{color:"black",fontSize:"20px",marginRight:"20px"}}><BsFillPersonFill/></span>Profile</Col>
          </Row>
          </NavLink>
            {/*Creating the Navigation link for Wallet */}
          <NavLink to="/Wallet" activeClassName="selected" >
          <Row className="justify-content-center subselected">
                <Col xs="auto"><span style={{color:"black",fontSize:"20px",marginRight:"20px"} }><MdOutlineAccountBalanceWallet/></span>Wallet</Col>
          </Row>
          </NavLink>
            {/*Creating the Navigation link for Datapool */}
          <NavLink to="/datapool" activeClassName="selected" >
          <Row className="justify-content-center subselected">
                <Col xs="auto"><span style={{color:"black",fontSize:"20px",marginRight:"20px"} }><BsFillBarChartLineFill/></span>Data Pool</Col>
          </Row>
          </NavLink>
            {/*Creating the Navigation link for Campaigns */}
          <NavLink to="/campaigns" activeClassName="selected" >
          <Row className="justify-content-center subselected">
                <Col xs="auto"><span style={{color:"black",fontSize:"20px",marginRight:"20px"} }><TbReportAnalytics/></span>Campaigns</Col>
          </Row>
          </NavLink>
            {/*Creating the Navigation link for Ads */}
          <NavLink to="/ads" activeClassName="selected" >
          <Row className="justify-content-center subselected">
                <Col xs="auto"><span style={{color:"black",fontSize:"20px",marginRight:"20px"} }><MdOutlineCampaign/></span>ADs</Col>
          </Row>
          </NavLink>
            {/*Creating the Navigation link for Settings */}
          <NavLink to="/settings" activeClassName="selected" >
          <Row className="justify-content-center subselected">
                <Col xs="auto"><span style={{color:"black",fontSize:"20px",marginRight:"20px"} }><AiOutlineSetting/></span>Settings</Col>
          </Row>
          </NavLink>
        
        
          <div style={{marginTop:"200px"}}>
            {/*Creating the Navigation link for Help */}
            <NavLink to="/help" activeClassName="selected" >
            <Row className="justify-content-center subselected">
                  <Col xs="auto"><span style={{color:"black",fontSize:"20px",marginRight:"20px"} }><BiHelpCircle/></span>Help</Col>
            </Row>
            </NavLink>
            {/*Creating the Navigation link for Learn */}
            <NavLink to="/learn" activeClassName="selected" >
            <Row className="justify-content-center subselected">
                  <Col xs="auto"><span style={{color:"black",fontSize:"20px",marginRight:"20px"} }><FaBookReader/></span>Learn More</Col>
            </Row>
            </NavLink>
          </div>
      </div>
    </Container>
  );
};
