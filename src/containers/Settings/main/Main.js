//Importing the Required Libraries and the Components
import React from "react";
import { Container, Row } from "react-bootstrap";
import Top  from "../../../components/Top/Top";
import SettingIndex from "../SettingContent/SettingsContent";

//Creating a Object as Main
const Main = () => {
  return (
    <Container fluid>
      <Row>
        <Top name="Settings" />
      </Row>
      <Row>
        <SettingIndex />
      </Row>
    </Container>
  );
};

export default Main;
