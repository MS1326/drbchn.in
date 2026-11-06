import React from "react";
import Drb_header from "../../components/drb_header/drb_header.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../../style/index.css";
import Footer from "../../components/footer/Footer.jsx";
import Leftindex from "../frontpage/Leftindex.jsx";
import Rightindex from "../frontpage/Rightindex.jsx";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import CaptchaForm from "../../components/captcha/Captcha.jsx";

const Forget_pass = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

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
                Forgot Password
              </Card.Header>
              <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group md="4" controlId="validationCustom01">
                      <Form.Label>
                        Email_Id : <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter Your Email_Id"
                      />
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <CaptchaForm />
                  </Row>

                  <Row className="mt-5">
                    <Col xs={12} md={9}>
                      <Button type="submit" className="w-25 bg-success">
                        SEND
                      </Button>
                    </Col>
                    <Col xs={12} md={3}>
                      <Nav.Link
                        as={NavLink}
                        to="/login"
                        className="nav-link doc-link mt-1 fw-bold"
                      >
                        GO BACK
                      </Nav.Link>
                    </Col>
                  </Row>
                </Form>
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
export default Forget_pass;
