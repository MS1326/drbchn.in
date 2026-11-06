import React from "react";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Nav className="custom-nav justify-content-center">
      <Nav.Item>
        <Nav.Link as={NavLink} to="/" className="nav-link">
          HOME
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={NavLink} to="/documents" className="nav-link">
          DOCUMENTS
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={NavLink} to="/notifications" className="nav-link">
          NOTIFICATION
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="../../../public/pdf/instruction_candidates.pdf"
          className="nav-link"
          target="_blank"
        >
          INSTRUCTIONS TO THE CANDIDATES
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link
          as={NavLink}
          to="../../../public/pdf/howtoapply.pdf"
          className="nav-link"
          target="_blank"
        >
          HOW TO APPLY ONLINE
        </Nav.Link>
      </Nav.Item>

      <Nav.Item>
        <Nav.Link as={NavLink} to="/login" className="nav-link">
          LOGIN
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
};

export default Navbar;
