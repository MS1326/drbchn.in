import React from "react";
import Drb_header from "../../components/drb_header/drb_header.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Footer from "../../components/footer/Footer.jsx";
import Leftindex from "../frontpage/Leftindex.jsx";
import ListGroup from "react-bootstrap/ListGroup";
import '../../style/Index.css'

const Terms_condition = () => {
  return (
    <>
      <Drb_header />
      <Navbar />

      <Container className="mt-4">
        <Row className="justify-content-md-center">
          <Col xs={12} md={3}>
            <Leftindex />
          </Col>

          <Col xs={12} md={9}>
            <Card className="mt-3 border-0" style={{overflow : "hidden" , overflowY :"scroll" , height : "750px"}}>
              <Card.Header className="bg-primary text-white">
                ONLINE PAYMENT TERMS AND CONDITIONS for WEBSITES
              </Card.Header>
              <Card.Body className="">
                <Card.Title className="fw-bold mb-3">
                  Online Payments:
                </Card.Title>
                <Card.Text className="mb-4">
                  This online payment system is provided by CHENNAI District
                  Recruitment Bureau . CHENNAI District Recruitment Bureau may
                  update these terms from time to time and any changes will be
                  effective immediately on being set out here. Please ensure you
                  are aware of the current terms. The country of domicile for
                  CHENNAI District Recruitment Bureau is India.
                </Card.Text>

                <Card.Title className="fw-bold fs-6 mb-3">
                  Terms & Conditions:
                </Card.Title>
                <Card.Text className="mb-4">
                  Please read these terms carefully before using the online
                  payment facility. Using the online payment facility on this
                  website indicates that you accept these terms. If you do not
                  accept these terms do not use this facility.
                </Card.Text>
                <Card.Text className="mb-4">
                  All payments are subject to the following conditions:-
                </Card.Text>
                <Card.Text className="mb-4">
                  The description of services of match making are specific to
                  your need, when you log in with your unique password. Normally
                  payment is required in advance (i.e. before you commence your
                  activity).
                </Card.Text>

                <Card.Title className="fs-6 mb-3">
                  All Fees quoted are in Indian Rupees. The CHENNAI District Recruitment Bureau reserves the right to change the fees at any time:
                </Card.Title>

                <ListGroup
                  as="ul"
                  className="dotted"
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "3rem",
                  }}
                >
                  <ListGroup.Item as="li">Your payment will normally reach the CHENNAI District Recruitment Bureau account to 
                    which you are making a payment within two working days</ListGroup.Item>
                  <ListGroup.Item as="li">We cannot accept liability for a payment not reaching the correct CHENNAI District Recruitment Bureau account due to you quoting an incorrect account number or incorrect personal details. Neither can we accept liability if payment is refused or declined by the credit/debit card supplier for any reason</ListGroup.Item>
                  <ListGroup.Item as="li">If the card supplier declines payment the CHENNAI District Recruitment Bureau is under no obligation to bring this fact to your attention. You should check with your bank/credit/debit card supplier that payment has been deducted from your account</ListGroup.Item>
                  <ListGroup.Item as="li">In no event will the CHENNAI District Recruitment Bureau be liable for any damages whatsoever arising out of the use, inability to use, or the results of use of this site, any websites linked to this site, or the materials or information contained at any or all such sites, whether based on warranty, contract, tort or any other legal theory and whether or not advised of the possibility of such damages.</ListGroup.Item>
                </ListGroup>


                <Card.Title className="fw-bold fs-6 mb-1">
                  Refund Policy:
                </Card.Title>

                <ListGroup
                  as="ul"
                  className="dotted"
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "3rem",
                  }}
                >
                  <ListGroup.Item as="li">If the Customer leaves the CHENNAI District Recruitment Bureau before they complete their service period, there shall be no entitlement to a refund of paid service fees.</ListGroup.Item>
                  <ListGroup.Item as="li">Refunds, if applicable, at the discretion of the Management, will only be made to the debit/credit card used for the original transaction. For the avoidance of doubt nothing in this Policy shall require the CHENNAI District Recruitment Bureau to refund the Fees (or part thereof) unless such Fees (or part thereof) have previously been paid.</ListGroup.Item>
                </ListGroup>


                <Card.Title className="fw-bold fs-6 mb-2">
                  Privacy Policy:
                </Card.Title>
                <Card.Text className="mb-2">
                  This Privacy Policy applies to all of the products, services and websites offered byCHENNAI District Recruitment Bureau. Sometimes, we may post product specific privacy notices or Help Centre materials to explain our products in more detail.
                </Card.Text>
                <Card.Text className="mb-2">
                   If you have any questions about this Privacy Policy, please feel free to contact us through our website or write to us at 
                </Card.Text>
                <Card.Text className="mb-2">
                  Information we collect and how we use it for our CHENNAI District Recruitment Bureau.
                </Card.Text>


                <Card.Title className="fw-bold fs-6 mb-1">
                  Changes to our Privacy Policy:
                </Card.Title>
                <Card.Text className="mb-3">
                  CHENNAI District Recruitment Bureau reserves the entire right to modify/amend/remove this privacy statement anytime and without any reason. Nothing contained herein creates or is intended to create a contract/agreement between CHENNAI District Recruitment Bureau and any user visiting the CHENNAI District Recruitment Bureau website or providing identifying information of any kind.
                </Card.Text>


                <Card.Title className="fw-bold fs-6 mb-1">
                  DND Policy :
                </Card.Title>
                <Card.Text className="mb-3">
                  If you wish to stop any further sms/email alerts/contacts from our side, all you need to do is to send an email:- <span className="text-primary">info@chndrb.in</span> with your mobile numbers and you will be excluded from the alerts list.
                </Card.Text>


                <Card.Title className="fw-bold fs-6 mb-1">
                  Contact Details:
                </Card.Title>
                <Card.Text className="mb-2">
                  Email: chennaidrb@gmail.com
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Terms_condition;
