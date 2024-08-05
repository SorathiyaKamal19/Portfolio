import {  Col, Container, Image, Row } from "react-bootstrap";
import html from "../assets/html.png"
import css from "../assets/css2.png"
import js from "../assets/js3.png"
import bootstrap from "../assets/bootstrap2.png"
import jquery from "../assets/jquery2.png"
import react from "../assets/react4.jpeg"





const Skills = () => {
  return (
    <Container className="text-center , root" >
      <div className="mt-5 mb-5 text-center main-content">
        <Row className=" justify-content-center  g-4 " >
          <Col md={4} className="d-flex justify-content-center ">
           
            <div className="cards">
              <div className="contents">
                <div className="front">
                  <Image src={html} />
                </div>
                <div className="back">
                  <p><b>HTML (Hyper Text Markup Language) </b>  <br/>is the standard markup language for Web pages.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-center" >
          <div className="cards">
              <div className="contents">
                <div className="front">
                  <Image src={css} />
                </div>
                <div className="back">
                  <p><b> CSS (Cascading Style Sheets)</b> is a language designed to simplify the process of making web pages presentable. </p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-center" >
            
             <div className="cards">
              <div className="contents">
                <div className="front">
                  <Image src={js} />
                </div>
                <div className="back">
                  <p><b>JavaScript</b> is a programming language that runs in all modern web browsers. </p>
                </div>
              </div>
            </div>
          </Col>

          <Col md={4} className="d-flex justify-content-center">
          <div className="cards">
              <div className="contents">
                <div className="front">
                  <Image src={bootstrap} />
                </div>
                <div className="back">
                  <p><b>Bootstrap</b> It is a front-end framework used for easier and faster web development.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-center" >
          <div className="cards">
              <div className="contents">
                <div className="front">
                  <Image src={jquery} />
                </div>
                <div className="back">
                  <p><b>jQuery</b> is an open-sourced JavaScript library that simplifies creation and navigation of web applications.</p>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="d-flex justify-content-center" >
            <div className="cards">
              <div className="contents">
                <div className="front">
                  <Image src={react} />
                </div>
                <div className="back">
                  <p><b>React</b> is a declarative, efficient, and flexible JavaScript library for building user interfaces.</p>
                </div>
              </div>
            </div>
          </Col>




        </Row>

      </div>
    </Container>
  );
};

export default Skills;
