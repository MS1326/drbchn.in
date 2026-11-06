import React from "react";
import Drb_header from "../../components/drb_header/drb_header.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Footer from "../../components/footer/Footer.jsx";
import Leftindex from "../frontpage/Leftindex.jsx";
import Rightindex from "../frontpage/Rightindex.jsx";

const Contact = () => {
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
            <Card className="mt-3 border-primary">
              <Card.Header className="bg-primary text-white">
                Contact Details
              </Card.Header>
              <Card.Body className="">
                <Card.Text className="mb-1">
                  The Chairman / Additional Registrar
                </Card.Text>

                <Card.Text className="mb-1">
                  Chennai District Recruitment Bureau for Cooperative Societies
                </Card.Text>

                <Card.Text className="mb-1">
                  No.91, St Mary's Road,TANFED Building, 3rd
                  Floor,Abhiramapuram, Chennai
                </Card.Text>

                <Card.Text className="mb-1">Pincode - 600018</Card.Text>

                <Card.Text className="mb-1">
                  Phone No: 044-2461 6503, 044-2461 4289
                </Card.Text>

                <Card.Text className="mb-1">
                  Email: chennaidrb@gmail.com
                </Card.Text>
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

export default Contact;
