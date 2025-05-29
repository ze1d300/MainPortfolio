import { Col, Container, Row } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import bannerImg from "../assets/img/banner-img.png";
import "animate.css";
import { useEffect, useState } from "react";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { HashLink } from "react-router-hash-link";

const Banner = () => {
  const [text, setText] = useState("");
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer", "Full Stack Dev", "Frontend Developer"];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`I'm Asadullayev Zeyd`}{" "}
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    👋 Welcome! Hi, I'm **Asadullayev Zeyd** — a passionate
                    front-end developer focused on building clean, responsive,
                    and user-friendly web interfaces. I specialize in modern web
                    development using **HTML**, **CSS**, **JavaScript**, and
                    **React**. I enjoy transforming ideas into functional,
                    accessible digital experiences that not only look good but
                    perform well across all devices. Take a look around to
                    explore my projects, learn more about my skills, and see how
                    I bring creativity and code together.
                  </p>
                  <HashLink to="#connect">
                    <button>
                      Let's Connect <ArrowRightCircle size={25} />
                    </button>
                  </HashLink>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={bannerImg} alt="Banner Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Banner;
