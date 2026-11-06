import React from "react";
import Card from "react-bootstrap/Card";
import './Footer.css'

const Footer = () => {
  return (
    <>
      <Card className="text-center footer mt-5">
        <Card.Body className="foot-text">
          <Card.Text className="mb-0 mt-3">
            The Chairman / Additional Registrar
          </Card.Text>

          <Card.Text className="mb-0">
            Chennai District Recruitment Bureau for Cooperative Societies
          </Card.Text>

          <Card.Text className="mb-0">No.91, St Mary's Road,TANFED Building, 3rd Floor,Abhiramapuram, Chennai</Card.Text>

          <Card.Text className="mb-0">
            Pincode - 600018
          </Card.Text>

          <Card.Text className="mb-0">
            Phone No: 044-2461 6503, 044-2461 4289
          </Card.Text>

          <Card.Text className="mb-0">Email: chennaidrb@gmail.com</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

export default Footer;
