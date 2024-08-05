import { Col, Row, Image, Container } from "react-bootstrap";
import img from "../assets/avatar.svg";
import imgs from "../assets/pexels-olia-danilevich-4974913.jpg";
import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsappSquare } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <div className="header main-content">
        <Image
          src={imgs}
          style={{ height: "100vh", width: "100%", opacity: "60%" }}
        />
      </div>
      <Container >
        <div >
          <div>
            {"  "}
            <h1 className="content">
              Hi, I am  Kamal Sorathiya,
            </h1>
            <h2 style={{ color: "black" }} className="content-2" >
              {"  "}
              <ReactTyped

                strings={["Frontend Developer", "React JS Developer"]}
                typeSpeed={100}
                cursorChar="|"
                showCursor={true}
                loop={true}

                back
              />
            </h2>
          </div>
        </div>


        <div className=" mt-5 mb-5">
          <Row >
            <h3>LET ME INTRODUCE MYSELF</h3>
            <Col md={6}>
             
              <p>
                I am a passionate <b>React.js developer</b> with a strong background in creating dynamic and user-friendly web applications.<br/><br/>
                 I have honed my skills in building responsive and efficient interfaces through dedicated learning and hands-on projects. <br/><br/>
                 My expertise includes leveraging the latest <b> React features , TypeScript, and CSS</b> to deliver high-quality solutions.
                 <br/> <br/> I have demonstrated my abilities by developing robust applications during my internship at Company.<br/><br/>
                  I am committed to continuous learning and am excited to take on new challenges in <b>Front-end development</b>.






              </p>
            </Col>
            <Col md={6} className="text-center">
              <Image src={img} />
            </Col>
          </Row>
        </div>

        <div className=" text-center mt-5 " >
          <h3 >FIND ME ON</h3>
        </div>
        <div className=" text-center   mb-5">
          <h4>Feel Free to Connect With Me</h4>
        </div>
        <div className="text-center mb-4 ">
          <ul className="  home-about-social-links list list-unstyled ">
            <li className="social-icons ">
              <Link target='_blank' to="https://github.com/kamalsorathiya007">
                {" "}
                <FaGithub className='icons' />
              </Link>
            </li>
            <li>
              <Link target='_blank' to="https://www.linkedin.com/in/kamal-sorathiya-76514024b/" >
                {" "}
                <FaLinkedin className='icons' />
              </Link>

            </li>
            <li>
              <Link target='_blank' to="https://www.instagram.com/i_m_kamal19?igsh=dTAzOTltMnRicXB5">
                {" "}
                <FaInstagram className='icons' />
              </Link>
            </li>

            <li>
              <Link target='_blank' to="https://wa.me/+917383366294">
                {" "}
                <FaWhatsappSquare className='icons' />
              </Link>
            </li>
          </ul>
        </div>
      </Container >
    </>
  );
};

export default Home;
