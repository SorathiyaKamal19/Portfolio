import { useState } from "react";
import { TextField } from "@mui/material";
import { Col, Container, Form, Row, Button } from "react-bootstrap";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaWhatsappSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Contact = () => {
   
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....")

    

    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    if (!name || !email || !message) {
      setResult("All fields are required.");
    }else if(!name ===" "  || !email ===" " || message === " "){
      setResult("All fields are required.");
      return;
    }

    formData.append("access_key", "8f5b4578-fc64-449f-9e9e-27ae212f292b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Error submitting form", error);
      setResult("There was an error submitting the form. Please try again later.");
    }
  };

  return (
    <Container className="root">
      <div className="mt-5 main-content">
        <Row>
          <Col className="mt-5" md={6} xs={12}>
            <h3>Let’s Talk</h3>
            <p>Feel Free To Connect With Me!</p>
            <h5 className="mt-5">Email</h5>
            <Link className="icons">sorathiyakamal7383@gmail.com</Link>
            <h5 className="mt-5">Find Me on</h5>
            <div className="text-center">
              <ul
                className="list-unstyled d-flex justify-content-start"
                style={{ gap: "1rem" }}
              >
                <li>
                  <Link
                    target="_blank"
                    to="https://github.com/kamalsorathiya007"
                  >
                    <FaGithub className="icons" />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://www.linkedin.com/in/kamal-sorathiya-76514024b/"
                  >
                    <FaLinkedin className="icons" />
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    to="https://www.instagram.com/i_m_kamal19?igsh=dTAzOTltMnRicXB5"
                  >
                    <FaInstagram className="icons" />
                  </Link>
                </li>
                <li>
                  <Link target="_blank" to="https://wa.me/+917383366294">
                    <FaWhatsappSquare className="icons" />
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col className="mt-5" md={6} xs={12}>
            <h3>Message Me</h3>
            <div>
              <Form onSubmit={onSubmit} noValidate>
                <TextField
                  fullWidth
                  name="name"
                  id="name"
                  label="Name"
                  required
                  variant="standard"
                />
                {

                }
                <TextField
                  className="mt-4"
                  fullWidth
                  name="email"
                  id="email"
                  label="Email"
                  required
                  variant="standard"
                />
                <TextField
                  className="mt-4"
                  fullWidth
                  id="message"
                  name="message"
                  label="Type Your Message Here"
                  variant="standard"
                  required
                />
                <Button
                  className="mt-5 mb-5 d-flex"
                  type="submit"
                  variant="outline-info"
                >
                  Submit
                </Button>
              </Form>
              <span>{result}</span>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Contact;
