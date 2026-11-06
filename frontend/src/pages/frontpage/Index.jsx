import React from "react";
import Drb_header from "../../components/drb_header/drb_header.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  FaRegHandPointRight,
} from "react-icons/fa";
import "../../style/index.css";
import Footer from "../../components/footer/Footer.jsx";
import Leftindex from "./Leftindex.jsx";
import Rightindex from "./Rightindex.jsx";
import Midindex from "./Midindex.jsx";

const Index = () => {
  return (
    <>
      <Drb_header />
      <Navbar />

      <Container className="mt-2">
        <div className="marquee-wrapper">
          <div className="marquee-content">
            <FaRegHandPointRight color="#000" />
            பி.ஏ (கூட்டுறவு ), பி.காம் (கூட்டுறவு ) படித்து கூட்டுறவுப்
            பயிற்சியிலிருந்து விலக்குக் கோருபவர்கள், கணக்குப்பதிவியல் (Book
            Keeping) , வங்கியியல் (Banking) , கூட்டுறவு (Cooperation), தணிக்கை
            (Auditing) ஆகிய பாடங்களைப் படித்துத் தேர்ச்சி பெற்றிருக்க வேண்டும்.
            இதற்கான ஒருங்கிணைந்த மதிப்பெண் பட்டியலை (Consolidated Marklist)
            பதிவேற்றம் செய்ய வேண்டும். இல்லையெனில் இவர்கள் கூட்டுறவுப்
            பயிற்சியினை முடித்திருக்க வேண்டும்.
          </div>
        </div>
      </Container>

      <Container className="mt-4">
        <Row className="justify-content-md-center">
          <Col xs={12} md={3}>
            <Leftindex />
          </Col>
          <Col xs={12} md={6}>
            <Midindex />
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

export default Index;
