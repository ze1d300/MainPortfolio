import { Container, Row, Col } from "react-bootstrap";
import FooterBanner from "./FooterBanner";
import logo from "../assets/img/logo.png";
import { Facebook, Instagram, Linkedin } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <section className="footer" id="footers">
      <Container>
        <Row className="align-items-center">
          <FooterBanner />
          <Col md={6} xs={12} className="text-center text-sm-start">
            <img src={logo} alt="Logo" />
          </Col>
          <Col md={6} xs={12} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="#">
                <Linkedin size={20} color="white" />
              </a>
              <a href="#">
                <Facebook size={20} color="white" />
              </a>
              <a href="#">
                <Instagram size={20} color="white" />
              </a>
            </div>
            <p>Copyright 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Footer;
