//Importing the Required Libraries and the Components
import React from "react";
import { Sidebar } from "../../components/Sidebar/Sidebar";
import Main from "./main/Main";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//Creating a Object as Profile
const Profile = () => {
  return (
    <Container fluid>
      <Row>
      <Col sm={4} md={3} lg={2}  style={{padding:"0"}}><Sidebar /></Col>
      <Col sm={8} md={9} lg={10} style={{padding:"0"}}><Main /></Col>
      </Row>
    </Container>
  );
};
//Exporting the Profile Component
export default Profile;
