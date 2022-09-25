//Importing the Required Libraries and the Components
import React from "react";
import { Container, Row } from "react-bootstrap";
import Top  from "../../../components/Top/Top";
import CampaignsIndex from "../CampaignsIndex/CampaignsIndex"

//Creating a Object as Main
const Main = () => {
  return (
    <Container fluid>
      <Row>
        <Top name="Campaigns" />
      </Row>
      <Row>
        <CampaignsIndex />
      </Row>
    </Container>
  );
};
//Exporting the Main Component
export default Main;
