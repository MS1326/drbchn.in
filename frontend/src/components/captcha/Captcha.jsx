import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { FaSyncAlt } from "react-icons/fa";

const CaptchaForm = () => {
  const [captcha, setCaptcha] = useState("");
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState("");

  // Generate CAPTCHA
  const generateCaptcha = () => {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptcha(result);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  // Validate CAPTCHA
  const handleSubmit = (e) => {
    e.preventDefault();

    if (userInput === captcha) {
      setMessage("CAPTCHA Verified ✅");
    } else {
      setMessage("Invalid CAPTCHA ❌");
      generateCaptcha();
      setUserInput("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3 align-items-end">
        
        {/* CAPTCHA INPUT */}
        <Form.Group as={Col} md="5" controlId="captchaInput">
          <Form.Label>
            Captcha : <span className="text-danger">*</span>
          </Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Captcha"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            required
          />
        </Form.Group>

        {/* CAPTCHA DISPLAY */}
        <Form.Group as={Col} md="5">
          <Form.Label>Captcha Code</Form.Label>
          <div
            style={{
              fontSize: "20px",
              fontWeight: "bold",
              letterSpacing: "4px",
              background: "#e9ecef",
              padding: "8px",
              textAlign: "center",
              borderRadius: "4px",
              userSelect: "none",
            }}
          >
            {captcha}
          </div>
        </Form.Group>

        {/* RELOAD BUTTON */}
        <Form.Group as={Col} md="2" className="text-center">
          <Form.Label className="d-none">reloader</Form.Label>
          <FaSyncAlt
            style={{ cursor: "pointer", fontSize: "20px", marginTop: "30px" }}
            onClick={generateCaptcha}
          />
        </Form.Group>
      </Row>


      {message && <p className="mt-3">{message}</p>}
    </Form>
  );
};

export default CaptchaForm;