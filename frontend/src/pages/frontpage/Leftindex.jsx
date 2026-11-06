import React from "react";
import Card from "react-bootstrap/Card";
import NormalGdata from "../../json/generalData.json";
import {
  FaRegCalendarAlt,
  FaRegHandPointRight,
  FaClipboardList,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "../../style/index.css";

const Leftindex = () => {
  return (
    <>
      <Card className="important-dates-card text-center">
        <div className="icon-circle1">
          <FaRegCalendarAlt size={24} color="#fff" />
        </div>
        <Card.Header className="title1">Important Dates</Card.Header>
        <Card.Body className="dateitems">
          <div className="dateitem">
            <IoIosArrowForward className="arrow-icon" />
            <div className="appstartdate">Application Start Date : {NormalGdata.appstartdate}</div>
          </div>
          <div className="dateitem">
            <IoIosArrowForward className="arrow-icon" />
            <div className="appenddate">Application End Date : {NormalGdata.appenddate}</div>
          </div>
          <div className="dateitem">
            <IoIosArrowForward className="arrow-icon" />
            <div className="examdate">Exam Date : {NormalGdata.examdate}</div>
          </div>
        </Card.Body>
      </Card>
      <Card className="mt-2">
        <img src={NormalGdata.helpdesk} alt="helpdesk" />
      </Card>

      <Card className="instruction-card text-center mt-4">
        <Card.Header className="title4 d-flex justify-content-between align-items-center fw-bold fs-6">
          <span>Instruction / அறிவிப்பு</span>
          <div className="icon-circle4">
            <FaClipboardList size={24} color="#fff" />
          </div>
        </Card.Header>
        <Card.Body className="dateitems mb-5">
          <div className="instruction-text">
            <FaRegHandPointRight color="red" />
            It is instructed to the candidates have to upload scanned copies of
            all the required documents in the admissible size as prescribed in
            the advertisement.
          </div>
          <div className="instruction-text mt-4">
            <FaRegHandPointRight color="red" />
            பதிவேற்றம் செய்யத் தேவையான அனைத்து ஆவணங்களையும் விளம்பர அறிவிப்பில்
            குறிப்பிடப்பட்டுள்ள அளவுகளில் ஸ்கேன் செய்து பதிவேற்றம்
            செய்யவேண்டும்.
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export default Leftindex;
