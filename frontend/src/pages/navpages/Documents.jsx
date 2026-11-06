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
import "../../style/index.css";
import Footer from "../../components/footer/Footer.jsx";
import Leftindex from "../frontpage/Leftindex.jsx";
import Rightindex from "../frontpage/Rightindex.jsx";

const Documents = () => {
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
              <Card.Header className="text-center fw-bold bg-secondary text-white">
                DOCUMENTS
              </Card.Header>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>SNO</th>
                    <th>Document</th>
                  </tr>
                </thead>
                <tbody className="fs-6">
                  <tr>
                    <td>1</td>
                    <td>
                      <Nav.Link
                        as={NavLink}
                        to="../../../public/pdf/I - subcaste.pdf"
                        className="nav-link doc-link"
                        target="_blank"
                      >
                        Sub caste list in tamilnadu
                      </Nav.Link>
                    </td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <Nav.Link
                        as={NavLink}
                        to="../../../public/pdf/District_Taluk.pdf"
                        className="nav-link doc-link"
                        target="_blank"
                      >District and Taluk Name</Nav.Link>
                    </td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <Nav.Link
                        as={NavLink}
                        to="../../../public/pdf/pstm_certificate.pdf"
                        className="nav-link doc-link"
                        target="_blank"
                      >PSTM Certificate Format</Nav.Link>
                    </td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td>
                      <Nav.Link
                        as={NavLink}
                        to="../../../public/pdf/Syllabus.pdf"
                        className="nav-link doc-link"
                        target="_blank"
                      >
                        Syllabus for Cooperative Assistant/Clerk
                        Examination{" "}
                      </Nav.Link>
                    </td>
                  </tr>
                </tbody>
              </Table>
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

export default Documents;
