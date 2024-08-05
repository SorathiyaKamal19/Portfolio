import { Col, Container, Row, } from "react-bootstrap"

const Resume = () => {
  return (
    <Container className="root">
      <div className="main-content">
        <Row className="mt-5">
          <Col>
            <h3>Summary</h3>
            <p>Enthusiastic and dedicated React.js Developer with
              a strong foundation in JavaScript, ES6, HTML5, and CSS3.
              Recently completed a comprehensive training program in React.js
              and eager to apply my skills in developing dynamic, responsive,
              and user-friendly web applications. Possess excellent problem-solving abilities,
              a keen eye for design, and a passion for continuous learning in the ever-evolving field of web development.
              Seeking an opportunity to contribute to a forward-thinking team and grow as a professional in the tech industry.
            </p>
            <div className="mt-5 mb-5">
            <h3 >Education</h3>
            <h5>Bachelors in Computer Applications </h5>
            <h6>Bhakta Kavinarsinh Mehta University,Junagadh</h6>
            <b>CGPA : 8.72</b><br/>
            <b>(2021 to 2024)</b>
            </div>
            
          </Col>
          <Col>
            <h3>Internship Experience</h3>
            <h5>React JS Intern </h5>
            <h5>BlackWolve Technologies,Surat </h5>
            <strong>May 2023  To  August 2023</strong>
            <div className="mt-3">
            <h5>Responsiblites</h5>
            <ul>
              <li>	Developed and maintained user-friendly web applications using React.js, enhancing the overall user experience.</li>
              <li>	Assisted in the design and implementation of reusable components, ensuring code reusability and maintainability.</li>
              <li>	Collaborated with the UI/UX team to translate wireframes and designs into high-quality code.</li>
              <li>	Participated in code reviews, providing constructive feedback to improve code quality and best practices.</li>
            </ul>
            <h5>Achivements</h5>
            <ul>
              <li>	Successfully optimized the performance of key components, leading to a 20% reduction in page load times.</li>
              <li>	Gained valuable experience in modern web development practices, improving overall technical proficiency in React.js.</li>
            </ul>
            </div>

          </Col>

        </Row>

      </div>
    </Container>

  )
}

export default Resume


