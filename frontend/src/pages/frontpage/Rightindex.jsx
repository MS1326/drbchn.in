import React from "react";
import Card from "react-bootstrap/Card";
import Nav from "react-bootstrap/Nav";
import { NavLink } from 'react-router-dom';
import {
  FaBullhorn,
  FaRegHandPointRight,
  FaGg,
  FaSteamSymbol,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "../../style/index.css";

const Rightindex = () => {
  return (
    <>
      <Card className="Notification-card text-center">
        <div className="icon-circle3">
          <FaBullhorn size={24} color="#fff" />
        </div>
        <Card.Header className="title3">Notification </Card.Header>
        <Card.Body className="dateitems notif-wrapper">
          <div className="notif-marquee">
            <div className="dateitem mt-2">
              <IoIosArrowForward className="arrow-icon" />
              <Nav.Link className="notif-links" as={NavLink} target="_blank" to="../../../public/pdf/Notification_1.pdf">
                Notification for the Recruitment of Assistant/Junior Assistant
                in Apex Cooperative Institutions.
              </Nav.Link>
            </div>

            <div className="dateitem mt-2">
              <IoIosArrowForward className="arrow-icon" />
              <Nav.Link className="notif-links" as={NavLink} target="_blank" to="../../../public/pdf/Notification_1.pdf">
                தலைமை கூட்டுறவு நிறுவனங்களில் உதவியாளர்/இளநிலை உதவியாளர்.
              </Nav.Link>
            </div>
          </div>
        </Card.Body>
      </Card>

      <Card className="important-links-card text-center mt-4">
        <Card.Header className="title6 d-flex justify-content-between align-items-center fw-bold fs-6">
          <span>Important Links</span>
          <div className="icon-circle4">
            <FaGg size={24} color="#fff" />
          </div>
        </Card.Header>
        <Card.Body className="dateitems">
          <div className="dateitem">
            <IoIosArrowForward className="arrow-icon1" />
            <Nav.Link className="imp-links" as={NavLink}  to="/">
              Payment through Online
            </Nav.Link>
          </div>
          <div className="dateitem">
            <IoIosArrowForward className="arrow-icon1" />
            <Nav.Link className="imp-links" as={NavLink} to="/contact">
              Contact Us
            </Nav.Link>
          </div>
          <div className="dateitem">
            <IoIosArrowForward className="arrow-icon1" />
            <Nav.Link className="imp-links" as={NavLink}  to="/">
              Instructions To the Candidates
            </Nav.Link>
          </div>
          <div className="dateitem">
            <IoIosArrowForward className="arrow-icon1" />
            <Nav.Link className="imp-links" as={NavLink}  to="/termscondition">
              Online Payment Terms and conditions for Websites
            </Nav.Link>
          </div>
        </Card.Body>
      </Card>

      <Card className="instruction-card text-center mt-4">
        <Card.Header className="title6 d-flex justify-content-between align-items-center fw-bold fs-6">
          <span>Mission</span>
          <div className="icon-circle4">
            <FaSteamSymbol size={24} color="#fff" />
          </div>
        </Card.Header>
        <Card.Body className="dateitems">
          <div className="instruction-text">
            <FaRegHandPointRight color="red" />
            Ensure a Free, Fair and Transparent recruitment process for various
            posts in cooperative institutions which are coming under the control
            of Registrar of coop Societies.
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Rightindex;
