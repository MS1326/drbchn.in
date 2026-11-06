import React from "react";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';
import NormalGdata from "../../json/generalData.json";
import {
  FaEnvelopeOpenText,
  FaRegHandPointRight,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "../../style/index.css";

const Midindex = () => {
  return (
    <>
      <Card className="List-Notification-card text-center">
        <div className="icon-circle2">
          <FaEnvelopeOpenText size={24} color="#fff" />
        </div>
        <Card.Header className="title2">
          List of Current Notifications
        </Card.Header>
        <Card.Body className="mt-2 mb-5">
          <Row className="g-0">
            {/* LEFT COLUMN */}
            <Col xs={12} md={8}>
              <div
                style={{
                  backgroundColor: "#337ab7",
                  color: "#fff",
                  padding: "15px",
                  height: "100%",
                }}
              >
                <Card.Title className="notifi_num">
                  NOTIFICATION NUMBER :
                  <div className="number">({NormalGdata.number})</div>
                </Card.Title>

                <Card.Text className="notifi_text">
                  Assistant / Junior Assistant in Cooperative Institutions /
                  District Central Cooperative Bank
                </Card.Text>
              </div>
            </Col>

            {/* RIGHT COLUMN */}
            <Col xs={12} md={4}>
              <div
                style={{
                  backgroundColor: "#008000",
                  color: "#fff",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Nav.Link as={NavLink} className="fw-bold result-link" to="/" >
                  RESULT
                </Nav.Link>
                <div className="new">{NormalGdata.new}</div>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Card className="about-card text-center mt-4">
        <Card.Body className="">
          <Card.Title className="title5">ABOUT US</Card.Title>
          <Card.Text className="about-text">
            CHENNAI District Recruitment Bureau for Cooperative Societies is a
            statutory body constituted as per Sec. 74 of Tamil Nadu Cooperative
            Societies Act, 1983 read with Rules 150 and 151 of Tamil Nadu
            Cooperative Societies Rules 1988 and G.O.(Ms) No. 108 Cooperation,
            Food and Consumer Protection (CJ1) Dept dated 23.9.2023 to recruit
            staff for the cooperative institutions in CHENNAI District.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="note-card text-center mt-4">
        <Card.Body className="">
          <Card.Title className="title">NOTE</Card.Title>
          <div className="dateitem">
            <IoIosArrowForward className="arrow-icon" />
            <FaRegHandPointRight color="red" className="arrow-icon fs-5" />
            <Card.Text className="note-text">
              All the candidates are instructed to fill the application first
              and then pay the application fees in the dashboard(Login).
            </Card.Text>
          </div>
          <div className="dateitem">
            <IoIosArrowForward className="arrow-icon" />
            <FaRegHandPointRight color="red" className="arrow-icon fs-4" />
            <Card.Text className="note-text">
              விண்ணப்பதாரர்கள் விண்ணப்பத்தைப் பதிவு செய்தவுடன் விண்ணப்பப்பதிவுக்
              கட்டணத்தை செலுத்தலாம்.
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Midindex;
