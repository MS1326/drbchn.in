import React from "react";
import Drb_header from "../../components/drb_header/drb_header.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import NormalGdata from "../../json/generalData.json";
import {
  FaRegCalendarAlt,
  FaBullhorn,
  FaEnvelopeOpenText,
  FaRegHandPointRight,
  FaClipboardList ,FaGg ,
  FaSteamSymbol 
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "../../style/index.css";
import Footer from "../../components/footer/Footer.jsx";

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
            <Card className="important-dates-card text-center">
              <div className="icon-circle1">
                <FaRegCalendarAlt size={24} color="#fff" />
              </div>
              <Card.Header className="title1">Important Dates</Card.Header>
              <Card.Body className="dateitems">
                <div className="dateitem">
                  <IoIosArrowForward className="arrow-icon" />
                  Application Start Date : 11-12-2025
                </div>
                <div className="dateitem">
                  <IoIosArrowForward className="arrow-icon" />
                  Application End Date : 31-12-2025 5.45 P.M.
                </div>
                <div className="dateitem">
                  <IoIosArrowForward className="arrow-icon" />
                  Exam Date : 24.01.2026 10.00 am to 1.00 pm.
                </div>
              </Card.Body>
            </Card>
            <Card className="mt-2">
              <img src={NormalGdata.helpdesk} alt="helpdesk" />
            </Card>
          </Col>

          <Col xs={12} md={6}>
            <Card className="List-Notification-card text-center">
              <div className="icon-circle2">
                <FaEnvelopeOpenText size={24} color="#fff" />
              </div>
              <Card.Header className="title2">
                List of Current Notifications
              </Card.Header>
              <Card.Body className="mt-2 mb-3">
                <Row className="g-0">
                  {/* LEFT COLUMN */}
                  <Col xs={12} md={8}>
                    <div
                      style={{
                        backgroundColor: "#337ab7",
                        color: "#fff",
                        padding: "15px",
                        height: "100%",
                      }}
                    >
                      <Card.Title className="notifi_num">
                        NOTIFICATION NUMBER : <div className="date">{NormalGdata.date}</div>
                      </Card.Title>

                      <Card.Text className="notifi_text">
                        Assistant / Junior Assistant in Cooperative Institutions
                        / District Central Cooperative Bank
                      </Card.Text>
                    </div>
                  </Col>

                  {/* RIGHT COLUMN */}
                  <Col xs={12} md={4}>
                    <div
                      style={{
                        backgroundColor: "#008000",
                        color: "#fff",
                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Nav.Link href="#" className="fw-bold result-link">
                        RESULT 
                      </Nav.Link> <div className="new">{NormalGdata.new}</div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={3}>
            <Card className="Notification-card text-center">
              <div className="icon-circle3">
                <FaBullhorn size={24} color="#fff" />
              </div>
              <Card.Header className="title3">Notification </Card.Header>
              <Card.Body className="dateitems notif-wrapper">
                <div className="notif-marquee">
                  <div className="dateitem mt-2">
                    <IoIosArrowForward className="arrow-icon" />
                    <Nav.Link className="notif-links" href="#">
                      Notification for the Recruitment of Assistant/Junior
                      Assistant in Apex Cooperative Institutions.
                    </Nav.Link>
                  </div>

                  <div className="dateitem mt-2">
                    <IoIosArrowForward className="arrow-icon" />
                    <Nav.Link className="notif-links" href="#">
                      தலைமை கூட்டுறவு நிறுவனங்களில் உதவியாளர்/இளநிலை உதவியாளர்.
                    </Nav.Link>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* __________________________________________________________________________________________________________________________ */}

        <Row className="justify-content-md-center">
          <Col xs={12} md={3}>
            <Card className="instruction-card text-center mt-4">
              <Card.Header className="title4 d-flex justify-content-between align-items-center fw-bold fs-6">
                <span>Instruction / அறிவிப்பு</span>
                <div className="icon-circle4">
                  <FaClipboardList size={24} color="#fff" />
                </div>
              </Card.Header>
              <Card.Body className="dateitems mb-4">
                <div className="instruction-text">
                  <FaRegHandPointRight color="red" />
                  It is instructed to the candidates have to upload scanned
                  copies of all the required documents in the admissible size as
                  prescribed in the advertisement.
                </div>
                <div className="instruction-text mt-4">
                  <FaRegHandPointRight color="red" />
                  பதிவேற்றம் செய்யத் தேவையான அனைத்து ஆவணங்களையும் விளம்பர
                  அறிவிப்பில் குறிப்பிடப்பட்டுள்ள அளவுகளில் ஸ்கேன் செய்து
                  பதிவேற்றம் செய்யவேண்டும்.
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={9}>
            <Row className="justify-content-md-center">
              <Col xs={12} md={8}>
                <Card className="about-card text-center">
                  <Card.Body className="">
                    <Card.Title className="title5">ABOUT US</Card.Title>
                    <Card.Text className="about-text">
                      CHENNAI District Recruitment Bureau for Cooperative
                      Societies is a statutory body constituted as per Sec. 74
                      of Tamil Nadu Cooperative Societies Act, 1983 read with
                      Rules 150 and 151 of Tamil Nadu Cooperative Societies
                      Rules 1988 and G.O.(Ms) No. 108 Cooperation, Food and
                      Consumer Protection (CJ1) Dept dated 23.9.2023 to recruit
                      staff for the cooperative institutions in CHENNAI
                      District.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} md={4}>
                <Card className="important-links-card text-center">
                  <Card.Header className="title6 d-flex justify-content-between align-items-center fw-bold fs-6">
                    <span>Important Links</span>
                    <div className="icon-circle4">
                      <FaGg size={24} color="#fff" />
                    </div>
                  </Card.Header>
                  <Card.Body className="dateitems">
                    <div className="dateitem">
                      <IoIosArrowForward className="arrow-icon1" />
                      <Nav.Link className="imp-links" href="#">
                        Payment through Online
                      </Nav.Link>
                    </div>
                    <div className="dateitem">
                      <IoIosArrowForward className="arrow-icon1" />
                      <Nav.Link className="imp-links" href="#">
                        Contact Us
                      </Nav.Link>
                    </div>
                    <div className="dateitem">
                      <IoIosArrowForward className="arrow-icon1" />
                      <Nav.Link className="imp-links" href="#">
                        Instructions To the Candidates
                      </Nav.Link>
                    </div>
                    <div className="dateitem">
                      <IoIosArrowForward className="arrow-icon1" />
                      <Nav.Link className="imp-links" href="#">
                        Online Payment Terms and conditions for Websites
                      </Nav.Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>

            {/* __________________________________________________________________________________________________________________________ */}

            <Row className="justify-content-md-center">
              <Col xs={12} md={8}>
                <Card className="note-card text-center mt-4">
                  <Card.Body className="">
                    <Card.Title className="title">NOTE</Card.Title>
                    <div className="dateitem">
                      <IoIosArrowForward className="arrow-icon" />
                      <FaRegHandPointRight
                        color="red"
                        className="arrow-icon fs-5"
                      />
                      <Card.Text className="note-text">
                        All the candidates are instructed to fill the
                        application first and then pay the application fees in
                        the dashboard(Login).
                      </Card.Text>
                    </div>
                    <div className="dateitem">
                      <IoIosArrowForward className="arrow-icon" />
                      <FaRegHandPointRight
                        color="red"
                        className="arrow-icon fs-4"
                      />
                      <Card.Text className="note-text">
                        விண்ணப்பதாரர்கள் விண்ணப்பத்தைப் பதிவு செய்தவுடன்
                        விண்ணப்பப்பதிவுக் கட்டணத்தை செலுத்தலாம்.
                      </Card.Text>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

              <Col xs={12} md={4}>
                <Card className="instruction-card text-center mt-4">
                  <Card.Header className="title6 d-flex justify-content-between align-items-center fw-bold fs-6">
                    <span>Mission</span>
                    <div className="icon-circle4">
                      <FaSteamSymbol size={24} color="#fff" />
                    </div>
                  </Card.Header>
                  <Card.Body className="dateitems">
                    <div className="instruction-text">
                      <FaRegHandPointRight color="red" />Ensure a Free, Fair and Transparent recruitment process for various posts
                       in cooperative institutions which are coming under the control of Registrar of coop Societies.
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default Index;
