import React from "react";
import Drb_header from "../../components/drb_header/drb_header.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import NormalGdata from "../../json/generalData.json";
import "../../style/index.css";
import Footer from "../../components/footer/Footer.jsx";
import Leftindex from "../frontpage/Leftindex.jsx";
import Rightindex from "../frontpage/Rightindex.jsx";
import { FaFileDownload } from "react-icons/fa";

const Notifications = () => {
  return (
    <>
      <Drb_header />
      <Navbar />

      <Container className="mt-4">
        <Row className="justify-content-md-center">
          <Col xs={12} md={3}>
            <Leftindex />
          </Col>

          <Col xs={12} md={6}>
            <Card className="mt-3">
              <Card.Header className="fw-bold bg-primary text-white">
                List Of Current Notification
              </Card.Header>
              <Card.Body>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th colSpan={2} className="bg-success text-white">
                        Assistant / Junior Assistant in Cooperative Institutions
                        / District Central Cooperative Bank
                      </th>
                    </tr>
                  </thead>
                  <tbody className="fs-6">
                    <tr>
                      <td>Notification Number</td>
                      <td><div className="number">{NormalGdata.number}</div></td>
                    </tr>
                    <tr>
                      <td>Notification Date</td>
                      <td><div className="notdate">{NormalGdata.notdate}</div></td>
                    </tr>
                    <tr>
                      <td>Online Application Start Date</td>
                      <td><div className="onlinestartdate">{NormalGdata.onlinestartdate}</div></td>
                    </tr>
                    <tr>
                      <td>Online Application End Date</td>
                      <td><div className="onlineenddate">{NormalGdata.onlineenddate}</div></td>
                    </tr>
                    <tr>
                      <td>Application Fees</td>
                      <td><div className="applicationfess">{NormalGdata.applicationfess}</div></td>
                    </tr>
                    <tr>
                      <td className="text-success fw-bold">Download</td>
                      <td><Nav.Link
                        as={NavLink}
                        to="../../../public/pdf/Notification_1.pdf"
                        className="nav-link doc-link"
                        target="_blank"
                      > <FaFileDownload /> Click To Download here..</Nav.Link></td>
                    </tr>
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3}>
            <Rightindex />
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Notifications;
