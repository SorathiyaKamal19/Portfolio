import { Container, Row, Col, Image } from "react-bootstrap"
import about from "../assets/about.png"
import { ImPointRight } from "react-icons/im"

const About = () => {
  return (
    <Container className="root"  >
      <div className="main-content mt-4 mb-5">
        <Row className="mt-5" >
          <Col md={6}  >
            <h1>
              Know Who I m
            </h1>
            <div>
              <p style={{ textAlign: "justify", fontSize: "20px" }}>
                Hi Everyone,
                <br />
                <span >  I am Kamal Sorathiya </span>
                <br />
                Targeting <b>Front-end Developer</b> roles with an organization of high repute with a scope of improving knowledge and further career growth.
              </p>
              <ul className="list-unstyled" >
                <li className="about-activity lis ">
                  <ImPointRight /> Playing Games
                </li>
                <li className="about-activity">
                  <ImPointRight /> Playing Cricket
                </li>
                <li className="about-activity">
                  <ImPointRight /> Travelling
                </li>
              </ul>
              <p>
                Strive to build things that make a difference ! {" "}
              </p>
            </div>
          </Col>
          <Col md={6}   >
            <Image src={about} className="img-fluid" />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default About