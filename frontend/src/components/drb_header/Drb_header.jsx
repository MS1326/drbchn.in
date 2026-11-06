import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import NormalGdata from "../../json/generalData.json";
import "./Drb_header.css";

function Drb_header() {
  return (
    <Container fluid className="drb-header">
      <Row className="align-items-center text-center">
        
        {/* Left Logo */}
        <Col xs={12} md={3} className="d-flex justify-content-center">
          <Card className="border-0 bg-transparent chead">
            <Card.Img
              src={NormalGdata.tnlogo}
              alt="TN Logo"
              className="TN_Logo"
            />
          </Card>
        </Col>

        {/* Center Text */}
        <Col xs={12} md={6}>
          <Card className="border-0 bg-transparent chead">
            <Card.Body className="d-flex flex-column justify-content-center text">
              <div className="data">{NormalGdata.data}</div>
              <div className="data1">{NormalGdata.data1}</div>
              <div className="data1">{NormalGdata.data2}</div>
            </Card.Body>
          </Card>
        </Col>

        {/* Right Logo */}
        <Col xs={12} md={3} className="d-flex justify-content-center">
          <Card className="border-0 bg-transparent chead">
            <Card.Img
              src={NormalGdata.rightlogo}
              alt="Right Logo"
              className="Right_Logo"
            />
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default Drb_header;
