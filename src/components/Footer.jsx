import { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsappSquare } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const [year, setYear] = useState("")

  useEffect(() => {
    const date = new Date()
    const years = date.getFullYear()
    setYear(years)

  }, [])
  return (
    <Container fluid className='footer  '>
      <Row className='bg-body-tertiary text-center mt-4 pt-4  '>
        <Col md={4}  >
          <p>Designed and developed By Kamal Sorathiya</p>
        </Col>
        <Col md={4} >
          <p> Copyright © {year} KS</p>
        </Col>
        <Col md={4} >
          <div className="text-center ">
            <ul className="  home-about-social-links list list-unstyled ">
              <li className="social-icons  ">
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
        </Col>

      </Row>

    </Container>
  )
}

export default Footer