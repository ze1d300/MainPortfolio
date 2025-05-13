import { Col, Container, Row } from "react-bootstrap";

const Projects = () => {
  const projects = [
    {
      title: "Yoqurt Shop",
      description: "Development & Design",
      imgUrl: null,
      url: "#",
    },
  ];

  return (
    <section id="projects">
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Projects</h2>
            <p>
              We design and develop clean, modern websites—from restaurant menus
              to brand platforms—focusing on user experience, speed, and strong
              visual identity.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Projects;
