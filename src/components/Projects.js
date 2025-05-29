import { Col, Container, Row } from "react-bootstrap";
import projImg1 from "../assets/img/Yoqurt IMG.png";
import projImg2 from "../assets/img/Rest.IMG.png";
import projImg3 from "../assets/img/To-Do APP.png";
import projImg4 from "../assets/img/CalculatorIMG.png";
import projImg5 from "../assets/img/Figma.png";
import projImg6 from "../assets/img/AdminPanel.IMG.png";
import TrackVisibility from "react-on-screen";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "YoYoqurt Shop",
      description: "Development & Design",
      imgUrl: projImg1,
      url: "https://github.com/ze1d300/YoYogurt",
    },
    {
      title: "Figma",
      description: "Development",
      imgUrl: projImg5,
      url: "https://www.figma.com/design/vSByAtstjksjp755UTucL4/Untitled?node-id=0-1&t=8JI2cFt3Ee0Id3pp-1",
    },
    {
      title: "Restaraunt",
      description: "Development & Design",
      imgUrl: projImg2,
      url: "https://github.com/ze1d300/Restaraunt",
    },
    {
      title: "To-Do App",
      description: "Development & Design",
      imgUrl: projImg3,
      url: "https://github.com/ze1d300/tooodooo",
    },
    {
      title: "Calculator",
      description: "Development & Design",
      imgUrl: projImg4,
      url: "https://github.com/ze1d300/Calculator1",
    },
    {
      title: "Admin Panel",
      description: "Development",
      imgUrl: projImg6,
      url: "https://github.com/ze1d300/adminpanel",
    },
  ];

  return (
    <section id="projects" className="project">
      <Container>
        <Row>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    We design and develop clean, modern websites—from restaurant
                    menus to brand platforms—focusing on user experience, speed,
                    and strong visual identity.
                  </p>
                  <Row>
                    {projects.map((item, index) => (
                      <ProjectCard
                        key={index}
                        url={item.url}
                        title={item.title}
                        description={item.description}
                        imgUrl={item.imgUrl}
                      />
                    ))}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Projects;
