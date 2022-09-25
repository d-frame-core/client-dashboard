//Importing the Required Libraries and the Components
import React from "react";
import { Container, Row } from "react-bootstrap";
import Top  from "../../../components/Top/Top";
import ProfileContent from "../Inputs/ProfileContent";

//Creating a Object as Main
const Main = () => {
  return (
    <Container fluid>
      <Row>
        <Top name="Profile" />
      </Row>
      <Row>
        <ProfileContent />
      </Row>
    </Container>
  );
};
//Exporting the Main Component
export default Main;
