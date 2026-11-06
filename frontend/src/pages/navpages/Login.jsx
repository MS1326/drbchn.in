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

const Login = () => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
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
                LOGIN
              </Card.Header>
              <Card.Body>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Row className="mb-3">
                    <Form.Group md="4" controlId="validationCustom01">
                      <Form.Label>
                        User Id : <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Enter Your User Id"
                      />
                    </Form.Group>
                    <Form.Group
                      md="4"
                      controlId="validationCustom02"
                      className="mt-3"
                    >
                      <Form.Label>
                        Password : <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control
                        required
                        type="password"
                        placeholder="Enter Your Password"
                      />
                    </Form.Group>

                    <span className="text-danger text-center mt-2 fw-bold">
                      {" "}
                      ( OR ){" "}
                    </span>

                    <Form.Group
                      md="4"
                      controlId="validationCustom03"
                      className="mt-2"
                    >
                      <Form.Label>
                        Date of Birth : <span className="text-danger">*</span>
                      </Form.Label>

                      <Form.Control
                        required
                        type="date"
                        placeholder="Enter Your Date of Birth"
                      />
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">
                    <CaptchaForm />
                  </Row>


                  <Row className="mt-3">
                    <Col xs={12} md={8}>
                      <Button type="submit" className="w-50 bg-success border-0">
                        SUBMIT
                      </Button>
                    </Col>
                    <Col xs={12} md={4}>
                      <Nav.Link
                        as={NavLink}
                        to="/forgetpass"
                        className="nav-link doc-link mt-1"
                      >
                        Forget Password
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

export default Login;
