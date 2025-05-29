import { Col, Container, Row } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import Carousel from "react-multi-carousel";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12} md={12} xl={12}>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                HTML & CSS Strong foundation in semantic HTML and modern CSS
                practices. Skilled in creating responsive, accessible layouts
                using Flexbox, Grid, and media queries. Comfortable working with
                utility-first frameworks like Tailwind CSS and pre-processors
                such as SASS. JavaScript ES6+ Proficient in JavaScript,
                including ES6+ features like arrow functions, destructuring,
                modules, and async/await. Capable of writing clean, modular code
                and handling DOM manipulation, event handling, and API
                integration.
              </p>
              <Carousel
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                responsive={responsive}
              >
                <div className="item">
                  <CircularProgressbar
                    value={80}
                    text={`80%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>React</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={100}
                    text={`100%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={100}
                    text={`100%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>CSS</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={95}
                    text={`95%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>JS</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={90}
                    text={`90%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>TypeScript</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={100}
                    text={`100%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>Figma</h5>
                </div>
                <div className="item">
                  <CircularProgressbar
                    value={100}
                    text={`100%`}
                    className="circular-progress-bar"
                  ></CircularProgressbar>
                  <h5>Git</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Skills;
